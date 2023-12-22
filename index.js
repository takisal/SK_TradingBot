import Web3 from "web3";
import chAbi from "./abi/clearingHouse.js";
import exAbi from "./abi/exchange.js";
import pk from "./config/pk.js";
import spreadSize10k from "./config/spreadsize.js";
import amounts from "./config/amounts.js";
import ERC20abi from "./abi/erc20.js";
import TickHelpers from "./tickHelpers/tickHelpers.js";
const USDCAddress = "0x928609eA2D7f98Cc18710f0BB4Af293933f99FB3";
const TIF = {
  IOC: 0,
  FOK: 1,
  GTC: 2,
  GCD: 3,
};

const RPC_SK = "https://testnet.silverkoi.co/super-secret-silver-koi/";

function uinxTime() {
  return Math.floor(+new Date() / 1000);
}
/*
//Needed for certain forks/chains: 
const options = {
    reconnect: {
      auto: true,
      delay: 1000, // ms
      maxAttempts: 5,
      onTimeout: false
    }
  };
  */
const skNetwork = new Web3(RPC_SK /*, options*/);
skNetwork.eth.accounts.wallet.add(pk);
skNetwork.eth.defaultAccount = skNetwork.eth.accounts.wallet[0];
console.log("Using account. Address: " + skNetwork.eth.defaultAccount.address);
const clearingHouseContract = new skNetwork.eth.Contract(chAbi, "0x04b2b154722310c9B79292c26725B73ebbaf1153");
const exchangeContract = new skNetwork.eth.Contract(exAbi, "0x47a3Cf95319AF337aE741D962324E36e9cd4979C");
var nonce = 0;
skNetwork.eth.getTransactionCount(skNetwork.eth.defaultAccount.address).then((txn) => {
  nonce = txn;
});
const markets = {};

function getPrices(marketId) {
  exchangeContract.methods
    .getBestAndLastPrices(marketId)
    .call()
    .then((result) => {
      markets[parseInt(marketId)].ask = result.bestAsk;
      markets[parseInt(marketId)].bid = result.bestBid;
    });
}

function getInfos(marketId) {
  exchangeContract.methods
    .getMarketInfoByIndex(marketId)
    .call()
    .then((result) => {
      result.ask = 0;
      result.bid = 0;
      markets[parseInt(result.id)] = result;
    });
}
function grantPermissions(tokenAddress, amount, spender) {
  let erc20Contract = new skNetwork.eth.Contract(ERC20abi, tokenAddress);
  skNetwork.eth.getGasPrice().then((gasPrice) => {
    let encoded = erc20Contract.methods.approve(spender, amount).encodeABI();
    var tx = {
      gas: "1000000",
      gasPrice: gasPrice * BigInt(2),
      to: tokenAddress,
      data: encoded,
      nonce,
    };
    skNetwork.eth.accounts.signTransaction(tx, pk).then((signed) => {
      skNetwork.eth.sendSignedTransaction(signed.rawTransaction).on("receipt", (result) => {
        console.log(result, "granted approval: " + amount);
        nonce++;
      });
    });
  });
}

for (let i = 0; i <= 2; i++) {
  getInfos(i);
}
async function checkAmount(tokenAddress) {
  let erc20Contract = new skNetwork.eth.Contract(ERC20abi, tokenAddress);
  let amount = await erc20Contract.methods
    .allowance(skNetwork.eth.defaultAccount.address, "0x04b2b154722310c9B79292c26725B73ebbaf1153")
    .call();

  if (amount >= BigInt("100000000000000000000000")) {
    return true;
  } else {
    return false;
  }
}
let sufficientAmount = await checkAmount(USDCAddress);
if (sufficientAmount == false) {
  grantPermissions(USDCAddress, "1000000000000000000000000", "0x04b2b154722310c9B79292c26725B73ebbaf1153");
}

setInterval(() => {
  for (let id in markets) {
    getPrices(parseInt(id));
  }
}, 3000);
let limitBool = false;
setTimeout(() => {
  if (limitBool == false) {
    doTrades(1);
  }
}, 60000);

function nextPriceAbove(price) {
  let a = fromPriceRoundDown(price);
  a++;
  let c = TickHelpers.toPrice(a);
  if (c <= price) {
    a++;
    c = TickHelpers.toPrice(a);
  }
  return c;
}
function nextPriceBelow(price) {
  let a = TickHelpers.fromPriceRoundDown(price);
  a--;
  let c = TickHelpers.toPrice(a);
  return c;
}

function doTrades(marketId) {
  let askPriceToPlace = 0;
  let bidPriceToPlace = 0;
  let currentAsk = markets[marketId].ask;
  let currentBid = markets[marketId].bid;
  let zeroCount = 0;
  if (currentAsk == 0) {
    zeroCount++;
  }
  if (currentBid == 0) {
    zeroCount++;
  }
  if (zeroCount == 2) {
    console.log("No valid orders. Skipping trade placement");
    return;
  }
  if (zeroCount == 1) {
    if (currentAsk == 0) {
      bidPriceToPlace = nextPriceAbove(currentBid);
      askPriceToPlace = nextPriceAbove((currentBid * (BigInt(10000) + BigInt(spreadSize10k))) / BigInt(10000));
    } else {
      askPriceToPlace = nextPriceBelow(currentAsk);
      bidPriceToPlace = nextPriceBelow((currentAsk * (BigInt(10000) - BigInt(spreadSize10k))) / BigInt(10000));
    }
  } else {
    askPriceToPlace = nextPriceBelow(currentAsk);
    bidPriceToPlace = nextPriceAbove(currentBid);
    if (askPriceToPlace <= bidPriceToPlace) {
      return;
    }
  }
  placeDual(marketId, 55, bidPriceToPlace, askPriceToPlace);
  limitBool = true;
}

function placeDual(marketId, durationSeconds, bidPrice, askPrice) {
  placeSignedTX(marketId, durationSeconds, bidPrice, true, nonce);
  placeSignedTX(marketId, durationSeconds, askPrice, false, nonce + BigInt(1));
  nonce += BigInt(2);

  console.log("Prices for spread being placed: ", {
    currentBid: markets[1].bid,
    currentAsk: markets[1].ask,
    myBidPrice: bidPrice,
    myAskPrice: askPrice,
  });
}
async function placeSignedTX(marketId, durationSeconds, price, isBid, nonceScoped) {
  skNetwork.eth.getGasPrice().then((gasPrice) => {
    let inputsArray = [
      skNetwork.eth.defaultAccount.address,
      marketId,
      1,
      isBid ? 0 : 1,
      price,
      amounts[marketId],
      0,
      TIF.GCD,
      true,
      uinxTime() + durationSeconds,
      0,
      0,
    ];
    let encoded = clearingHouseContract.methods.placeLimitOrder(inputsArray).encodeABI();
    var tx = {
      gas: "1000000",
      gasPrice,
      to: "0x04b2b154722310c9B79292c26725B73ebbaf1153",
      data: encoded,
      nonce: nonceScoped,
    };

    skNetwork.eth.accounts.signTransaction(tx, pk).then((signed) => {
      skNetwork.eth.sendSignedTransaction(signed.rawTransaction).on("receipt", console.log);
    });
  });
}

//For normal RPCs (when we migrate to a non-private testnet):
/*
async function placeLimitOrder(marketId, durationSeconds, price, isBid, nonceScoped){
    skNetwork.eth.getGasPrice().then(gasPrice => {
        //{Trader: clientAddress, MarketId: marketId, PositionSubId: 0, Side: side, Price: convToPrice(tick), Size: size, TargetLeverage: 0, TimeInForce: tif, PostOnly: true, Deadline: deadline, TriggerPriceLo: big.NewInt(0), TriggerPriceHi: big.NewInt(0)}

        clearingHouseContract.methods.placeLimitOrder([skNetwork.eth.defaultAccount.address, marketId, 1, isBid ? 0 : 1, price, amounts[marketId], 0, TIF.GCD, true, uinxTime()+durationSeconds,  0, 0]).send({nonce: nonceScoped, from: skNetwork.eth.defaultAccount.address, gas: "1000000", gasPrice: gasPrice*BigInt(2)}).then(result => {
           
            console.log("placed limit " + (isBid ? "bid" : "ask") + " order: ", result)
        })
    })
}
*/
/*
erc20Contract.methods.approve(spender, amount).send({nonce, from: skNetwork.eth.defaultAccount.address, gas:"1000000", gasPrice: gasPrice*BigInt(2)}).then(result => {
            console.log(result, "granted approval: "+amount)
})
*/
