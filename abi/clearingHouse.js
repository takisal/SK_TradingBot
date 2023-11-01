const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "priceX10_18",
        type: "uint256",
      },
    ],
    name: "SK_InvalidTickPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "insuranceFund",
        type: "address",
      },
    ],
    name: "SK_Liquidate_InsuranceFundCannotBeLiquidator",
    type: "error",
  },
  {
    inputs: [],
    name: "SK_Math_InversionOverflowUnderflow",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "SK_NotContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
      {
        internalType: "uint24",
        name: "marginRequirementRatio",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "missingAmount",
        type: "uint256",
      },
    ],
    name: "SK_NotEnoughFreeCollateral",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
    ],
    name: "SK_NotLiquidatable",
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
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "fundingPayment",
        type: "int256",
      },
    ],
    name: "FundingPaymentSettled",
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
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "baseAmount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "quoteAmount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "liquidity",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "LiquidityChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "Types.PositionSubId",
        name: "liquidatorPositionSubId",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "closedPositionSize",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "closedPositionNotional",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "takeoverPositionSize",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "takeoverPositionNotional",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidationFee",
        type: "uint256",
      },
    ],
    name: "PositionLiquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
        components: [
          {
            internalType: "Types.OrderId",
            name: "orderId",
            type: "uint64",
          },
        ],
        internalType: "struct IClearingHouseTypes.CancelOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "Types.OrderId",
            name: "orderId",
            type: "uint64",
          },
        ],
        internalType: "struct IClearingHouseTypes.CancelOrderParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "cancelOrderBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "Types.OrderId",
            name: "orderId",
            type: "uint64",
          },
        ],
        internalType: "struct IClearingHouseTypes.CancelOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "cancelOrderByExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.DepositCollateralParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "depositCollateral",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tradeFee",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "oldPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "newPosition",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseTypes.TransactionResult",
        name: "result",
        type: "tuple",
      },
    ],
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
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundDown",
        type: "bool",
      },
    ],
    name: "getClosestTickPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "tickPrice",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        internalType: "contract IConfig",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getExchange",
    outputs: [
      {
        internalType: "contract IExchange",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFunding",
    outputs: [
      {
        internalType: "contract IFunding",
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
    inputs: [],
    name: "getInsuranceFund",
    outputs: [
      {
        internalType: "contract IInsuranceFund",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSettlementToken",
    outputs: [
      {
        internalType: "contract IERC20MetadataUpgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
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
        internalType: "contract IAccessControlUpgradeable",
        name: "acl",
        type: "address",
      },
      {
        internalType: "contract IConfig",
        name: "config",
        type: "address",
      },
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
      {
        internalType: "contract IExchange",
        name: "exchange",
        type: "address",
      },
      {
        internalType: "contract IAccounting",
        name: "accounting",
        type: "address",
      },
      {
        internalType: "contract IInsuranceFund",
        name: "insuranceFund",
        type: "address",
      },
      {
        internalType: "contract IFunding",
        name: "funding",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "Types.MarketId",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "Types.PositionSubId",
        name: "positionSubId",
        type: "uint8",
      },
    ],
    name: "isLiquidatable",
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
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "Types.PositionSubId",
            name: "liquidatorPositionSubId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "priceLowerLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceUpperLimit",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.LiquidatePositionParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "liquidatePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "enum Types.OrderSide",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "size",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "targetLeverage",
            type: "uint32",
          },
          {
            internalType: "enum Types.TimeInForce",
            name: "timeInForce",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "postOnly",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "deadline",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "triggerPriceLo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "triggerPriceHi",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.PlaceLimitOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "placeLimitOrder",
    outputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tradeFee",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "oldPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "newPosition",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseTypes.TransactionResult",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "enum Types.OrderSide",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "size",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "targetLeverage",
            type: "uint32",
          },
          {
            internalType: "enum Types.TimeInForce",
            name: "timeInForce",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "postOnly",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "deadline",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "triggerPriceLo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "triggerPriceHi",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.PlaceLimitOrderParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "placeLimitOrderBatch",
    outputs: [
      {
        internalType: "Types.OrderId[]",
        name: "orderIds",
        type: "uint64[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "enum Types.OrderSide",
            name: "side",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "size",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "targetLeverage",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "triggerPriceLo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "triggerPriceHi",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.PlaceMarketOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "placeMarketOrder",
    outputs: [
      {
        internalType: "Types.OrderId",
        name: "orderId",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tradeFee",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "oldPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "newPosition",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseTypes.TransactionResult",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "Types.OrderId",
            name: "orderId",
            type: "uint64",
          },
        ],
        internalType: "struct IClearingHouseTypes.RemoveExpiredOrderParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "removeExpiredOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "Types.MarketId",
            name: "marketId",
            type: "uint16",
          },
          {
            internalType: "Types.PositionSubId",
            name: "positionSubId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IClearingHouseTypes.WithdrawCollateralParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "withdrawCollateral",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tradeFee",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "oldPosition",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "openInterestSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openInterestValue",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "size",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openNotional",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "collateral",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "conservativeAccountValue",
                type: "int256",
              },
            ],
            internalType: "struct Types.SlimPosition",
            name: "newPosition",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseTypes.TransactionResult",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export default abi;
