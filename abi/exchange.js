const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "SK_ClearingHouseNotInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "tick",
        type: "uint24",
      },
    ],
    name: "SK_InvalidTick",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "roleName",
        type: "string",
      },
    ],
    name: "SK_MissingRole",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "expectedSender",
        type: "address",
      },
    ],
    name: "SK_NotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "feedId",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "SK_OracleDecimalsTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "feedId",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
    ],
    name: "SK_OracleInvalidValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "SK_OracleNotInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ClearingHouseChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "orderbook",
        type: "address",
      },
    ],
    name: "MarketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "oldOracleFeedDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldOracleFeedId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "newOracleFeedDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newOracleFeedId",
        type: "bytes32",
      },
    ],
    name: "OracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "Tick",
        name: "tick",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "size",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "tif",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "deadline",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "postOnly",
        type: "bool",
      },
    ],
    name: "addLimitOrder",
    outputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "side",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "size",
        type: "uint32",
      },
    ],
    name: "addMarketOrder",
    outputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exchangeRequested",
        type: "bool",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccessControl",
    outputs: [
      {
        internalType: "contract IAccessControlUpgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccounting",
    outputs: [
      {
        internalType: "contract IAccounting",
        name: "accounting",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    name: "getBestAndLastPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "bestBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bestAsk",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastAsk",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getClearingHouse",
    outputs: [
      {
        internalType: "contract IClearingHouse",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "getMarketId",
    outputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "feedId",
        type: "bytes32",
      },
    ],
    name: "getMarketIdByOracle",
    outputs: [
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    name: "getMarketInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "Types.MarketId",
            name: "id",
            type: "uint16",
          },
          {
            internalType: "contract IOrderBook",
            name: "orderbook",
            type: "address",
          },
        ],
        internalType: "struct IExchangeTypes.MarketInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMarketInfoByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "Types.MarketId",
            name: "id",
            type: "uint16",
          },
          {
            internalType: "contract IOrderBook",
            name: "orderbook",
            type: "address",
          },
        ],
        internalType: "struct IExchangeTypes.MarketInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    name: "getMidpointPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    name: "getOracleFeed",
    outputs: [
      {
        components: [
          {
            internalType: "contract IOracle",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "feedDecimals",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "feedId",
            type: "bytes32",
          },
        ],
        internalType: "struct IExchangeTypes.OracleInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    name: "getOraclePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "hasMarket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAccessControlUpgradeable",
        name: "acl",
        type: "address",
      },
      {
        internalType: "contract IAccounting",
        name: "accounting",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numMarkets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract IOrderBook",
        name: "orderbook",
        type: "address",
      },
    ],
    name: "registerMarket",
    outputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
    ],
    name: "removeExpiredOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IClearingHouse",
        name: "clearingHouse",
        type: "address",
      },
    ],
    name: "setClearingHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Types.MarketId",
        name: "id",
        type: "uint16",
      },
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "feedId",
        type: "bytes32",
      },
    ],
    name: "setOracleFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export default abi;
