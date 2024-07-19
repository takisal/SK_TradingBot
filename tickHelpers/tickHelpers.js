const FACTOR = BigInt(10000);

const MIN_PRICE_RANGE_EXPONENT = BigInt(18 - 3); // upper endpoint is 10^-3
const MAX_PRICE_RANGE_EXPONENT = BigInt(18 + 9); // upper endpoint is 10^9
const MAX_PRICE_RANGE_INDEX = MAX_PRICE_RANGE_EXPONENT - MIN_PRICE_RANGE_EXPONENT;
const MIN_PRICE_RANGE_UPPER = BigInt(10) ** MIN_PRICE_RANGE_EXPONENT;

const FIRST_PRICE_RANGE_INCREMENT = MIN_PRICE_RANGE_UPPER / FACTOR;

const MIN_TICK_INT = BigInt(1);
const MAX_TICK_INT = (BigInt(1) + MAX_PRICE_RANGE_INDEX * BigInt(9)) * FACTOR;

const MIN_PRICE = MIN_PRICE_RANGE_UPPER / FACTOR;
const MAX_PRICE = BigInt(10) ** MAX_PRICE_RANGE_EXPONENT;

const MIN_PRICEX7 = BigInt(1);
const MAX_PRICEX7 = BigInt(10) ** BigInt(16);
const MIN_PRICEX7_RANGE_UPPER = BigInt(10000);
const FIRST_PRICEX7_RANGE_INCREMENT = BigInt(1);
const TickHelpers = {};
function convertToTickFromX7(priceX7) {
  if (priceX7 < MIN_PRICEX7 || priceX7 > MAX_PRICEX7) {
    console.log("ee");
    return 0;
  } else if (priceX7 <= MIN_PRICEX7_RANGE_UPPER) {
    console.log("gg");
    return Math.floor(priceX7 / FIRST_PRICEX7_RANGE_INCREMENT);
  } else {
    let priceRangeIdx = BigInt(priceX7.toString().length - 1) - BigInt(3); // Guaranteed to be >= 1
    let incrementX7 = BigInt(10) ** (priceRangeIdx - BigInt(1));
    let startX7 = incrementX7 * FACTOR;
    let priceMinusStartX7 = priceX7 - startX7;
    if (priceMinusStartX7 % incrementX7 != BigInt(0)) {
      console.log("hd", { priceMinusStartX7, incrementX7 });
      return 0;
    }
    let tickCount = priceMinusStartX7 / incrementX7;
    let tickRangeStart = (BigInt(1) + (priceRangeIdx - BigInt(1)) * BigInt(9)) * FACTOR;
    return Math.floor(Number(tickRangeStart + tickCount));
  }
}
function fromPriceX18RoundDown(price) {
  let tick = BigInt(0);
  if (price <= MIN_PRICE_RANGE_UPPER) {
    tick = price / FIRST_PRICE_RANGE_INCREMENT;
  } else {
    let priceRangeIdx = BigInt(price.toString().length - 1 - 14);
    let startX10_18 = BigInt(10) ** BigInt(BigInt(14) + priceRangeIdx);
    let incrementX10_18 = BigInt(10) ** (BigInt(10) + priceRangeIdx);
    let priceMinusStartX10_18 = price - startX10_18;
    let tickCount = priceMinusStartX10_18 / incrementX10_18;
    let tickRangeStart = (BigInt(1) + (priceRangeIdx - BigInt(1)) * BigInt(9)) * FACTOR;
    tick = tickRangeStart + tickCount;
  }
  return tick;
}
function toPrice(tick) {
  let tickInt = tick;
  let price = BigInt(0);
  if (tickInt == 0) {
    // noop
  } else if (tickInt < FACTOR) {
    price = tickInt * FIRST_PRICE_RANGE_INCREMENT;
  } else {
    let upperPart = tickInt / FACTOR; // TODO: unchecked
    let priceRangeIdx = (upperPart + BigInt(8)) / BigInt(9); // TODO: unchecked
    let numIncrements = tickInt - (priceRangeIdx * BigInt(9) - BigInt(8)) * FACTOR;

    let startX10_18 = BigInt(10) ** (BigInt(14) + priceRangeIdx);
    let incrementX10_18 = BigInt(10) ** (BigInt(10) + priceRangeIdx);
    price = startX10_18 + incrementX10_18 * numIncrements;
  }
  return price;
}
function toPriceX7(tick) {
  return toPrice(tick) / BigInt(10) ** BigInt(11);
}
TickHelpers.toPrice = toPrice;
TickHelpers.fromPriceX18RoundDown = fromPriceX18RoundDown;
TickHelpers.toPriceX7 = toPriceX7;
TickHelpers.convertToTickFromX7 = convertToTickFromX7;
export default TickHelpers;
