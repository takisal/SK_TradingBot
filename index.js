import Web3 from "web3";
import ISilverKoiABI from "./abi/ISilverKoi.js";
import pk from "./config/pk.js";
import spreadSize10k from "./config/spreadsize.js";
import amounts from "./config/amounts.js";
import strat from "./config/strat.js";
import ERC20abi from "./abi/erc20.js";
import TickHelpers from "./tickHelpers/tickHelpers.js";
const USDCAddress = "0xc3B36d33dc598b3236586f0C09890C43f9D49463";
const TIF = {
  IOC: 0,
  FOK: 1,
  GTC: 2,
  GCD: 3,
};
const makerStrat = strat == 0;
const RPC_SK = "http://testnet-rpc.plumenetwork.xyz/infra-partner-http";

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
const silverKoiContract = new skNetwork.eth.Contract(ISilverKoiABI, "0xc51c95669A69dc14204ddbced6f7721CEB239354");
var nonce = BigInt(0);
skNetwork.eth.getTransactionCount(skNetwork.eth.defaultAccount.address).then((txn) => {
  nonce = txn;
});

const markets = {};
console.log(42);
function getPrices(marketId) {
  silverKoiContract.methods
    .getBestPricesX7(marketId)
    .call()
    .then((result) => {
      markets[parseInt(marketId)].ask = result.bestAskX7;
      markets[parseInt(marketId)].bid = result.bestBidX7;
    });
}
function getInfos(marketId) {
  silverKoiContract.methods
    .getMarketInfo(marketId)
    .call()
    .then((result) => {
      console.log({ result });
      result.ask = 0;
      result.bid = 0;
      markets[parseInt(result.marketId)] = result;
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
for (let i = 1; i <= 3; i++) {
  getInfos(i);
}
console.log(86);
async function checkAmount(tokenAddress) {
  let erc20Contract = new skNetwork.eth.Contract(ERC20abi, tokenAddress);
  let amount = await erc20Contract.methods
    .allowance(skNetwork.eth.defaultAccount.address, "0xc51c95669A69dc14204ddbced6f7721CEB239354")
    .call();

  if (amount >= BigInt("100000000000000000000000")) {
    return true;
  } else {
    return false;
  }
}
let sufficientAmount = await checkAmount(USDCAddress);
if (sufficientAmount == false) {
  grantPermissions(USDCAddress, "1000000000000000000000000", "0xc51c95669A69dc14204ddbced6f7721CEB239354");
}
let traderId = await silverKoiContract.methods.getTraderId(skNetwork.eth.defaultAccount.address).call();
setInterval(() => {
  for (let id in markets) {
    getPrices(parseInt(id));
  }
}, 3000);
let limitBool = false;
setTimeout(() => {
  if (limitBool == false) {
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        doTrades(i);
      }, 5000 * (i - 1));
    }
  }
}, 60000);
function nextPriceAbove(price) {
  let a = BigInt(TickHelpers.convertToTickFromX7(price));
  a += BigInt(1);
  let c = TickHelpers.toPriceX7(a);
  if (c <= price) {
    a += BigInt(1);
    c = TickHelpers.toPriceX7(a);
  }
  return c;
}
function nextPriceBelow(price) {
  let a = BigInt(TickHelpers.convertToTickFromX7(price));
  a -= BigInt(1);
  let c = TickHelpers.toPriceX7(a);
  return c;
}
function nextTickAbove(price) {
  let a = BigInt(TickHelpers.convertToTickFromX7(price));
  a += BigInt(1);
  let c = TickHelpers.toPriceX7(a);
  if (c <= price) {
    a += BigInt(1);
  }
  return a;
}
function nextTickBelow(price) {
  let a = BigInt(TickHelpers.convertToTickFromX7(price));
  a -= BigInt(1);
  return a;
}
function doTrades(marketId) {
  if (makerStrat == true) {
    console.log(153);
    let askTickToPlace = 0;
    let bidTickToPlace = 0;
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
    console.log({ zeroCount, currentAsk, currentBid });
    if (zeroCount == 1) {
      if (currentAsk == 0) {
        bidTickToPlace = nextTickAbove(currentBid);
        askTickToPlace = nextTickAbove((currentBid * (BigInt(10000) + BigInt(spreadSize10k))) / BigInt(10000));
      } else {
        askTickToPlace = nextTickBelow(currentAsk);
        bidTickToPlace = nextTickBelow((currentAsk * (BigInt(10000) - BigInt(spreadSize10k))) / BigInt(10000));
      }
    } else {
      askTickToPlace = nextTickBelow(currentAsk);
      bidTickToPlace = nextTickAbove(currentBid);
      if (askTickToPlace <= bidTickToPlace) {
        console.log("equal", { askTickToPlace, bidTickToPlace });
        return;
      }
    }
    console.log(184);
    placeDual(marketId, 55, bidTickToPlace, askTickToPlace, false);
    limitBool = true;
  } else {
    let currentAsk = markets[marketId].ask;
    let currentBid = markets[marketId].bid;
    let bidTickToPlace = TickHelpers.convertToTickFromX7(currentBid);
    let askTickToPlace = TickHelpers.convertToTickFromX7(currentAsk);
    placeDual(marketId, 55, bidTickToPlace, askTickToPlace, true);
  }
}

function placeDual(marketId, durationSeconds, bidTick, askTick, gtc) {
  if (bidTick != BigInt(0)) {
    placeSignedTX(marketId, durationSeconds, bidTick, true, gtc);
  }

  if (askTick != BigInt(0)) {
    placeSignedTX(marketId, durationSeconds, askTick, false, gtc);
  }

  console.log("Prices for spread being placed: ", {
    currentBid: markets[1].bid,
    currentAsk: markets[1].ask,
    myBidPrice: TickHelpers.toPriceX7(BigInt(bidTick)),
    myAskPrice: TickHelpers.toPriceX7(BigInt(askTick)),
    myBidTick: bidTick,
    myAskTick: askTick,
  });
}
//check position, if exists, use targetLeverage
async function placeSignedTX(marketId, durationSeconds, tick, isBid, gtc) {
  console.log(205);
  skNetwork.eth.getGasPrice().then((gasPrice) => {
    console.log(207);
    let clientOrderId = Math.floor(Math.random() * 14967296);
    let positionSubId = 3;
    let side = isBid ? 0 : 1;
    let sizeX5 = amounts[marketId];
    let tif = TIF.IOC;
    let postOnly = false;
    let reduceOnly = false;
    let deadline = 0;
    let targetLeverageX2 = 100;
    let maintainLeverage = false;
    if (gtc == false) {
      tif = TIF.GCD;
      deadline = uinxTime() + durationSeconds;
    }
    console.log({ tick });
    console.log({ price: TickHelpers.toPriceX7(BigInt(tick)), tick });
    console.log({ traderId, side, isBid });
    silverKoiContract.methods
      .encodePlaceOrderRequest([
        traderId,
        clientOrderId,
        positionSubId,
        side,
        tick,
        sizeX5,
        tif,
        postOnly,
        reduceOnly,
        deadline,
        targetLeverageX2,
        maintainLeverage,
      ])
      .call()
      .then((packedRequest) => {
        let encoded = silverKoiContract.methods.placeOrder(marketId, packedRequest).encodeABI();
        var tx = {
          gas: "1000000",
          gasPrice,
          to: "0xc51c95669A69dc14204ddbced6f7721CEB239354",
          data: encoded,
          nonce: nonce,
        };
        nonce += BigInt(1);
        skNetwork.eth.accounts.signTransaction(tx, pk).then((signed) => {
          console.log({ marketId });

          skNetwork.eth.sendSignedTransaction(signed.rawTransaction).on("receipt for market" + marketId, console.log);
        });
      });
  });
}

//For normal RPCs (when migrated to a non-private testnet):
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
