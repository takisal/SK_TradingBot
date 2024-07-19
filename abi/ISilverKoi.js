const abi = [
  {
    "type": "function",
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "name": "",
        "internalType": "bytes32",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "cancelOrder",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequests",
        "internalType": "uint256[]",
        "type": "uint256[]"
      }
    ],
    "name": "cancelOrderBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "cancelTrigger",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "createTrigger",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodeCancelOrderRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct CancelOrderRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodeCancelTriggerRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct CancelTriggerRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodeCreateTriggerRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct CreateTriggerRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodeDepositCollateralRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct DepositCollateralRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "amountX6",
            "internalType": "uint56",
            "type": "uint56"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodePlaceOrderRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct PlaceOrderRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "deadline",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "decodeWithdrawCollateralRequest",
    "outputs": [
      {
        "name": "",
        "internalType": "struct WithdrawCollateralRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "amountX6",
            "internalType": "uint56",
            "type": "uint56"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionIds",
        "internalType": "PositionId[]",
        "type": "uint40[]"
      }
    ],
    "name": "deleveragePositions",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "depositCollateral",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct CancelOrderRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          }
        ]
      }
    ],
    "name": "encodeCancelOrderRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct CancelTriggerRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          }
        ]
      }
    ],
    "name": "encodeCancelTriggerRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct CreateTriggerRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "name": "encodeCreateTriggerRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct DepositCollateralRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "amountX6",
            "internalType": "uint56",
            "type": "uint56"
          }
        ]
      }
    ],
    "name": "encodeDepositCollateralRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct PlaceOrderRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "deadline",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "name": "encodePlaceOrderRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "request",
        "internalType": "struct WithdrawCollateralRequest",
        "type": "tuple",
        "components": [
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "amountX6",
            "internalType": "uint56",
            "type": "uint56"
          }
        ]
      }
    ],
    "name": "encodeWithdrawCollateralRequest",
    "outputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getActiveOrderIds",
    "outputs": [
      {
        "name": "",
        "internalType": "OrderId[]",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "getActiveOrderIdsForPosition",
    "outputs": [
      {
        "name": "",
        "internalType": "OrderId[]",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getActiveTriggerIds",
    "outputs": [
      {
        "name": "",
        "internalType": "TriggerId[]",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "getActiveTriggerIdsForPosition",
    "outputs": [
      {
        "name": "",
        "internalType": "TriggerId[]",
        "type": "uint64[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getAdlState",
    "outputs": [
      {
        "name": "",
        "internalType": "struct AdlState",
        "type": "tuple",
        "components": [
          {
            "name": "inAdlState",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "liquidatedPositionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "takeoverPositionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "bankruptcyPriceX7",
            "internalType": "uint56",
            "type": "uint56"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getAllMarketInfos",
    "outputs": [
      {
        "name": "infos",
        "internalType": "struct MarketInfo[]",
        "type": "tuple[]",
        "components": [
          {
            "name": "marketAddress",
            "internalType": "address",
            "type": "address"
          },
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "__gap",
            "internalType": "uint80",
            "type": "uint80"
          },
          {
            "name": "symbol",
            "internalType": "ShortString20",
            "type": "bytes20"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getBestPricesX7",
    "outputs": [
      {
        "name": "bestBidX7",
        "internalType": "uint56",
        "type": "uint56"
      },
      {
        "name": "bestAskX7",
        "internalType": "uint56",
        "type": "uint56"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getDefaultMaxOpenOrders",
    "outputs": [
      {
        "name": "limit",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getDefaultMaxOrderSize",
    "outputs": [
      {
        "name": "limitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getDefaultMaxPositionSize",
    "outputs": [
      {
        "name": "limitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getDefaultTakerAndMakerFeeRatio",
    "outputs": [
      {
        "name": "takerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      },
      {
        "name": "makerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "numPriceLevels",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "priceStepX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "getDiscretizedBook",
    "outputs": [
      {
        "name": "",
        "internalType": "struct DiscretizedBook",
        "type": "tuple",
        "components": [
          {
            "name": "bids",
            "internalType": "struct DiscretizedBookPriceLevel[]",
            "type": "tuple[]",
            "components": [
              {
                "name": "priceX18",
                "internalType": "uint256",
                "type": "uint256"
              },
              {
                "name": "sizeX5",
                "internalType": "uint256",
                "type": "uint256"
              }
            ]
          },
          {
            "name": "bidsLength",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "asks",
            "internalType": "struct DiscretizedBookPriceLevel[]",
            "type": "tuple[]",
            "components": [
              {
                "name": "priceX18",
                "internalType": "uint256",
                "type": "uint256"
              },
              {
                "name": "sizeX5",
                "internalType": "uint256",
                "type": "uint256"
              }
            ]
          },
          {
            "name": "asksLength",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "marginRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "getFreeCollateralX6",
    "outputs": [
      {
        "name": "freeCollateralX6",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getFundingDetail",
    "outputs": [
      {
        "name": "detail",
        "internalType": "struct FundingDetail",
        "type": "tuple",
        "components": [
          {
            "name": "longYearlyRateX6",
            "internalType": "int24",
            "type": "int24"
          },
          {
            "name": "shortYearlyRateX6",
            "internalType": "int24",
            "type": "int24"
          },
          {
            "name": "longScaledAccumulatorX14",
            "internalType": "int104",
            "type": "int104"
          },
          {
            "name": "shortScaledAccumulatorX14",
            "internalType": "int104",
            "type": "int104"
          },
          {
            "name": "lastDistributeTimestamp",
            "internalType": "uint32",
            "type": "uint32"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getImpactMarginNotional",
    "outputs": [
      {
        "name": "impactMarginNotionalX0",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getImpactNotionalX12",
    "outputs": [
      {
        "name": "impactNotionalX12",
        "internalType": "uint80",
        "type": "uint80"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "impactNotionalX12",
        "internalType": "uint80",
        "type": "uint80"
      }
    ],
    "name": "getImpactPricesX10",
    "outputs": [
      {
        "name": "impactBidX10",
        "internalType": "uint64",
        "type": "uint64"
      },
      {
        "name": "impactAskX10",
        "internalType": "uint64",
        "type": "uint64"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getInterestRates",
    "outputs": [
      {
        "name": "baseYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24"
      },
      {
        "name": "quoteYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarginRatios",
    "outputs": [
      {
        "name": "imRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      },
      {
        "name": "mmRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarket",
    "outputs": [
      {
        "name": "market",
        "internalType": "contract IMarket",
        "type": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "market",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "getMarketId",
    "outputs": [
      {
        "name": "",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "symbol",
        "internalType": "string",
        "type": "string"
      }
    ],
    "name": "getMarketIdBySymbol",
    "outputs": [
      {
        "name": "",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarketInfo",
    "outputs": [
      {
        "name": "info",
        "internalType": "struct MarketInfo",
        "type": "tuple",
        "components": [
          {
            "name": "marketAddress",
            "internalType": "address",
            "type": "address"
          },
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "__gap",
            "internalType": "uint80",
            "type": "uint80"
          },
          {
            "name": "symbol",
            "internalType": "ShortString20",
            "type": "bytes20"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarketPriceTwapInterval",
    "outputs": [
      {
        "name": "intervalSeconds",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarketPriceX10",
    "outputs": [
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMarketSnapshot",
    "outputs": [
      {
        "name": "snapshot",
        "internalType": "struct MarketSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "imRatioX6",
            "internalType": "uint24",
            "type": "uint24"
          },
          {
            "name": "mmRatioX6",
            "internalType": "uint24",
            "type": "uint24"
          },
          {
            "name": "twapInterval",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "impactNotionalX12",
            "internalType": "uint80",
            "type": "uint80"
          },
          {
            "name": "bestBidTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "bestAskTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "bestBidX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bestAskX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "marketPriceX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "twapMarketPriceX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "impactBidX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "impactAskX18",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "oraclePriceX18",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getMaxFundingRate",
    "outputs": [
      {
        "name": "rateX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getMaxOpenOrdersForTrader",
    "outputs": [
      {
        "name": "limit",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getMaxOrderSizeForTrader",
    "outputs": [
      {
        "name": "limitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getMaxPositionSizeForTrader",
    "outputs": [
      {
        "name": "limitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getNextMarketId",
    "outputs": [
      {
        "name": "",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getNextTraderId",
    "outputs": [
      {
        "name": "",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getOraclePriceX10",
    "outputs": [
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "getOrder",
    "outputs": [
      {
        "name": "",
        "internalType": "struct Order",
        "type": "tuple",
        "components": [
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "orderIndex",
            "internalType": "OrderIndex",
            "type": "uint8"
          },
          {
            "name": "packed1",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "executedSizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "deadline",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "executedNotionalX12",
            "internalType": "uint80",
            "type": "uint80"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "clientOrderId",
        "internalType": "ClientOrderId",
        "type": "uint32"
      }
    ],
    "name": "getOrderByClientOrderId",
    "outputs": [
      {
        "name": "",
        "internalType": "struct Order",
        "type": "tuple",
        "components": [
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "orderIndex",
            "internalType": "OrderIndex",
            "type": "uint8"
          },
          {
            "name": "packed1",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "executedSizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "deadline",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "executedNotionalX12",
            "internalType": "uint80",
            "type": "uint80"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "getOrderSnapshot",
    "outputs": [
      {
        "name": "snapshot",
        "internalType": "struct OrderSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "orderId",
            "internalType": "OrderId",
            "type": "uint64"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "sizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "priceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "state",
            "internalType": "enum OrderState",
            "type": "uint8"
          },
          {
            "name": "deadline",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "remainingSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "executedSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "executedNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "isBid",
        "internalType": "bool",
        "type": "bool"
      },
      {
        "name": "startOrderId",
        "internalType": "OrderId",
        "type": "uint64"
      },
      {
        "name": "count",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "getOrdersForSide",
    "outputs": [
      {
        "name": "orders",
        "internalType": "struct BookOrder[]",
        "type": "tuple[]",
        "components": [
          {
            "name": "orderId",
            "internalType": "OrderId",
            "type": "uint64"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "remainingSizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "tick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "priceX7",
            "internalType": "uint56",
            "type": "uint56"
          },
          {
            "name": "deadline",
            "internalType": "uint32",
            "type": "uint32"
          }
        ]
      },
      {
        "name": "ordersLength",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "nextOrderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "getPosition",
    "outputs": [
      {
        "name": "",
        "internalType": "struct Position",
        "type": "tuple",
        "components": [
          {
            "name": "sizeX5",
            "internalType": "int48",
            "type": "int48"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int88",
            "type": "int88"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int56",
            "type": "int56"
          },
          {
            "name": "__gap0",
            "internalType": "uint64",
            "type": "uint64"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint80",
            "type": "uint80"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint80",
            "type": "uint80"
          },
          {
            "name": "__gap1",
            "internalType": "uint32",
            "type": "uint32"
          },
          {
            "name": "fundingScaledAccumulatorOffsetX14",
            "internalType": "int104",
            "type": "int104"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint56",
            "type": "uint56"
          },
          {
            "name": "__gap2",
            "internalType": "uint96",
            "type": "uint96"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "getPositionSnapshot",
    "outputs": [
      {
        "name": "snapshot",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "name": "",
        "internalType": "bytes32",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getSettlementToken",
    "outputs": [
      {
        "name": "",
        "internalType": "contract IERC20Metadata",
        "type": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getTakerAndMakerFeeRatioForTrader",
    "outputs": [
      {
        "name": "takerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      },
      {
        "name": "makerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "getTrader",
    "outputs": [
      {
        "name": "",
        "internalType": "address",
        "type": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "trader",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "getTraderId",
    "outputs": [
      {
        "name": "",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "getTrigger",
    "outputs": [
      {
        "name": "",
        "internalType": "struct Trigger",
        "type": "tuple",
        "components": [
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "clientOrderId",
        "internalType": "ClientOrderId",
        "type": "uint32"
      }
    ],
    "name": "getTriggerByClientOrderId",
    "outputs": [
      {
        "name": "",
        "internalType": "struct Trigger",
        "type": "tuple",
        "components": [
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "side",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "uint8",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "sizeX5",
            "internalType": "uint48",
            "type": "uint48"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "getTriggerSnapshot",
    "outputs": [
      {
        "name": "snapshot",
        "internalType": "struct TriggerSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "triggerId",
            "internalType": "TriggerId",
            "type": "uint64"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "intervalSeconds",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "getTwapMarketPriceX10",
    "outputs": [
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "getTwapMarketPriceX10ForDefaultTwapInterval",
    "outputs": [
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "intervalSeconds",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "getTwapOraclePriceX10",
    "outputs": [
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "getUnsettledFundingX6",
    "outputs": [
      {
        "name": "fundingX6",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getVault",
    "outputs": [
      {
        "name": "",
        "internalType": "contract IVault",
        "type": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "account",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "accounts",
        "internalType": "address[]",
        "type": "address[]"
      }
    ],
    "name": "grantRoleBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "account",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "name": "",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "liquidatePosition",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "numMarkets",
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "orderIsOnBook",
    "outputs": [
      {
        "name": "",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketIds",
        "internalType": "MarketId[]",
        "type": "uint16[]"
      }
    ],
    "name": "performKeeperDuties",
    "outputs": [
      {
        "name": "hasWork",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "placeOrder",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequests",
        "internalType": "uint256[]",
        "type": "uint256[]"
      }
    ],
    "name": "placeOrderBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "priceX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "roundDown",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "name": "priceX18ToClosestTick",
    "outputs": [
      {
        "name": "tick",
        "internalType": "Tick",
        "type": "uint24"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "priceX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "roundDown",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "name": "priceX18ToClosestTickPriceX18",
    "outputs": [
      {
        "name": "tickPriceX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "priceX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "priceX18ToTick",
    "outputs": [
      {
        "name": "tick",
        "internalType": "Tick",
        "type": "uint24"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "marketAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "registerMarket",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [],
    "name": "registerMsgSender",
    "outputs": [
      {
        "name": "",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "trader",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "registerTrader",
    "outputs": [
      {
        "name": "",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "callerConfirmation",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedCancelOrderRequests",
        "internalType": "uint256[]",
        "type": "uint256[]"
      },
      {
        "name": "packedPlaceOrderRequests",
        "internalType": "uint256[]",
        "type": "uint256[]"
      }
    ],
    "name": "replaceOrderBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedCancelTriggerRequest",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "packedCreateTriggerRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "replaceTrigger",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "account",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "accounts",
        "internalType": "address[]",
        "type": "address[]"
      }
    ],
    "name": "revokeRoleBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "makerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setDefaultMakerFeeRatio",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newLimit",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "name": "setDefaultMaxOpenOrders",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newLimitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "name": "setDefaultMaxOrderSize",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newLimitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "name": "setDefaultMaxPositionSize",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "takerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setDefaultTakerFeeRatio",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newImpactMarginNotionalX0",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "setImpactMarginNotional",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "baseYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24"
      },
      {
        "name": "quoteYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24"
      }
    ],
    "name": "setInterestRates",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "makerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setMakerFeeRatioForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "imRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      },
      {
        "name": "mmRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setMarginRatios",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newIntervalSeconds",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "setMarketPriceTwapInterval",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "newRateX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setMaxFundingRate",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "newLimit",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "name": "setMaxOpenOrdersForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "newLimitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "name": "setMaxOrderSizeForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "newLimitX5",
        "internalType": "uint48",
        "type": "uint48"
      }
    ],
    "name": "setMaxPositionSizeForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "oraclePriceX10",
        "internalType": "uint64",
        "type": "uint64"
      }
    ],
    "name": "setOraclePriceX10",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId[]",
        "type": "uint16[]"
      },
      {
        "name": "oraclePriceX10",
        "internalType": "uint64[]",
        "type": "uint64[]"
      }
    ],
    "name": "setOraclePriceX10Batch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32"
      },
      {
        "name": "adminRole",
        "internalType": "bytes32",
        "type": "bytes32"
      }
    ],
    "name": "setRoleAdmin",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "takerFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "setTakerFeeRatioForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "newAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "setVault",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simCancelOrder",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "enqueued",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simCancelTrigger",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simCreateTrigger",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "trigger",
        "internalType": "struct TriggerSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "triggerId",
            "internalType": "TriggerId",
            "type": "uint64"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simDepositCollateral",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simPlaceOrder",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "enqueued",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedCancelTriggerRequest",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "packedCreateTriggerRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simReplaceTrigger",
    "outputs": [
      {
        "name": "oldTrigger",
        "internalType": "struct TriggerSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "triggerId",
            "internalType": "TriggerId",
            "type": "uint64"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      },
      {
        "name": "newTrigger",
        "internalType": "struct TriggerSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "triggerId",
            "internalType": "TriggerId",
            "type": "uint64"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "clientOrderId",
            "internalType": "ClientOrderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowTriggerTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromBelowLimitTick",
            "internalType": "Tick",
            "type": "uint24"
          },
          {
            "name": "fromAboveTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowTriggerPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromAboveLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "fromBelowLimitPriceX7",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "side",
            "internalType": "enum OrderSide",
            "type": "uint8"
          },
          {
            "name": "tif",
            "internalType": "enum TimeInForce",
            "type": "uint8"
          },
          {
            "name": "postOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "reduceOnly",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "targetLeverageX2",
            "internalType": "uint16",
            "type": "uint16"
          },
          {
            "name": "maintainLeverage",
            "internalType": "bool",
            "type": "bool"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "simWithdrawCollateral",
    "outputs": [
      {
        "name": "oldPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "newPosition",
        "internalType": "struct PositionSnapshot",
        "type": "tuple",
        "components": [
          {
            "name": "marketId",
            "internalType": "MarketId",
            "type": "uint16"
          },
          {
            "name": "traderId",
            "internalType": "TraderId",
            "type": "uint32"
          },
          {
            "name": "positionId",
            "internalType": "PositionId",
            "type": "uint40"
          },
          {
            "name": "positionSubId",
            "internalType": "PositionSubId",
            "type": "uint8"
          },
          {
            "name": "sizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "openNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "positionNotionalX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "longOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "longOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "shortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "openInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "vaultBalanceX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unsettledFundingX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "unrealizedPnlX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "badDebtX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeAccountValueX12",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "collateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "imFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "mmFreeCollateralX6",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "conservativeLiquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeLiquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liquidationPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "liquidationPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "conservativeBankruptcyPriceFlag",
            "internalType": "enum LiquidationPriceFlag",
            "type": "uint8"
          },
          {
            "name": "conservativeBankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "bankruptcyPriceDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "bankruptcyPriceX10",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveMarginRatioDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveMarginRatioX6",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "effectiveLeverageDefined",
            "internalType": "bool",
            "type": "bool"
          },
          {
            "name": "effectiveLeverageX2",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "pendingNetExecutionSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "pendingAbsExecutionSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveSizeX5",
            "internalType": "int256",
            "type": "int256"
          },
          {
            "name": "liveLongOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveLongOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveShortOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestSizeX5",
            "internalType": "uint256",
            "type": "uint256"
          },
          {
            "name": "liveOpenInterestNotionalX12",
            "internalType": "uint256",
            "type": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "tick",
        "internalType": "Tick",
        "type": "uint24"
      }
    ],
    "name": "tickToPriceX18",
    "outputs": [
      {
        "name": "priceX19",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "trader",
        "internalType": "address[]",
        "type": "address[]"
      }
    ],
    "name": "tryRegisterTraderBatch",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "unsetMakerFeeRatioForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "unsetTakerFeeRatioForTrader",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "withdrawCollateral",
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": true
      },
      {
        "name": "previousAdminRole",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": true
      },
      {
        "name": "newAdminRole",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": true
      }
    ],
    "name": "AccessControl_RoleAdminChanged"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": true
      },
      {
        "name": "account",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "sender",
        "internalType": "address",
        "type": "address",
        "indexed": true
      }
    ],
    "name": "AccessControl_RoleGranted"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "role",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": true
      },
      {
        "name": "account",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "sender",
        "internalType": "address",
        "type": "address",
        "indexed": true
      }
    ],
    "name": "AccessControl_RoleRevoked"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "owner",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "spender",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "value",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Approval"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_DefaultMakerFeeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldLimit",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimit",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_DefaultMaxOpenOrdersUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_DefaultMaxOrderSizeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_DefaultMaxPositionSizeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_DefaultTakerFeeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldImpactMarginNotionalX0",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newImpactMarginNotionalX0",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_ImpactMarginNotionalUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_InitialMarginUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_MaintenanceMarginUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldIntervalSeconds",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newIntervalSeconds",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_MarketPriceTwapIntervalUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldRateX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newRateX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_MaxFundingRateUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "oldFeeRatioX6Defined",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "oldFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6Defined",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_TraderMakerFeeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "oldLimit",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimit",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_TraderMaxOpenOrdersUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "oldLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_TraderMaxOrderSizeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "oldLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newLimitX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Config_TraderMaxPositionSizeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "oldFeeRatioX6Defined",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "oldFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6Defined",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "newFeeRatioX6",
        "internalType": "uint24",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Config_TraderTakerFeeUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "_diamondCut",
        "internalType": "struct IDiamond.FacetCut[]",
        "type": "tuple[]",
        "components": [
          {
            "name": "facetAddress",
            "internalType": "address",
            "type": "address"
          },
          {
            "name": "action",
            "internalType": "enum IDiamond.FacetCutAction",
            "type": "uint8"
          },
          {
            "name": "functionSelectors",
            "internalType": "bytes4[]",
            "type": "bytes4[]"
          }
        ],
        "indexed": false
      },
      {
        "name": "_init",
        "internalType": "address",
        "type": "address",
        "indexed": false
      },
      {
        "name": "_calldata",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "DiamondCut"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldLongScaledAccumulatorX14",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "oldShortScaledAccumulatorX14",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newLongScaledAccumulatorX14",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newShortScaledAccumulatorX14",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "Funding_AccumulatorUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldBaseYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24",
        "indexed": false
      },
      {
        "name": "oldQuoteYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24",
        "indexed": false
      },
      {
        "name": "newBaseYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24",
        "indexed": false
      },
      {
        "name": "newQuoteYearlyInterestRateX6",
        "internalType": "int24",
        "type": "int24",
        "indexed": false
      }
    ],
    "name": "Funding_InterestRateUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldLongYearlyRateX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "oldShortYearlyRateX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newLongYearlyRateX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newShortYearlyRateX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "Funding_RateUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "takeoverPositionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      }
    ],
    "name": "Liquidation_AdlEnded"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "takeoverPositionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "bankruptcyPriceX7",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "bankruptcyTick",
        "internalType": "Tick",
        "type": "uint24",
        "indexed": false
      }
    ],
    "name": "Liquidation_AdlStarted"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "reason",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "Liquidation_OrderFailed"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "liquidatedPositionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": false
      },
      {
        "name": "takeoverPositionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": false
      },
      {
        "name": "deltaSizeX5",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "deltaNotionalX12",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "Liquidation_PositionDeleveraged"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      }
    ],
    "name": "Liquidation_PositionLiquidated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldState",
        "internalType": "enum MarketState",
        "type": "uint8",
        "indexed": false
      },
      {
        "name": "newState",
        "internalType": "enum MarketState",
        "type": "uint8",
        "indexed": false
      }
    ],
    "name": "MarketMeta_MarketStateUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16",
        "indexed": true
      },
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "oldCumulativePriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newCumulativePriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "MarketPrice_TwapObservationAdded"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16",
        "indexed": true
      },
      {
        "name": "marketAddress",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "symbol",
        "internalType": "string",
        "type": "string",
        "indexed": false
      }
    ],
    "name": "MarketRegistered"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "reason",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "Operation_OperationFailed"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64",
        "indexed": true
      }
    ],
    "name": "Operation_TriggerActivated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64",
        "indexed": true
      },
      {
        "name": "reason",
        "internalType": "enum RemoveReason",
        "type": "uint8",
        "indexed": false
      }
    ],
    "name": "Operation_TriggerCanceled"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64",
        "indexed": true
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Operation_TriggerCreated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "triggerId",
        "internalType": "TriggerId",
        "type": "uint64",
        "indexed": true
      },
      {
        "name": "reason",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "Operation_TriggerFailed"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16",
        "indexed": true
      },
      {
        "name": "priceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "oldCumulativePriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newCumulativePriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "OraclePrice_TwapObservationAdded"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "marketId",
        "internalType": "MarketId",
        "type": "uint16",
        "indexed": true
      },
      {
        "name": "oldPriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newPriceX10",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "OraclePrice_Updated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": false
      },
      {
        "name": "positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8",
        "indexed": false
      },
      {
        "name": "isBid",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "executedSizeX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "executedNotionalX12",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "takerOrderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": false
      },
      {
        "name": "removed",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      }
    ],
    "name": "OrderBook_MakerOrderFilled"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": false
      },
      {
        "name": "positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8",
        "indexed": false
      },
      {
        "name": "isBid",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "priceX18",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "sizeX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "OrderBook_OrderAdded"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": false
      },
      {
        "name": "positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8",
        "indexed": false
      },
      {
        "name": "reason",
        "internalType": "enum RemoveReason",
        "type": "uint8",
        "indexed": false
      }
    ],
    "name": "OrderBook_OrderRemoved"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": false
      },
      {
        "name": "positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8",
        "indexed": false
      },
      {
        "name": "isBid",
        "internalType": "bool",
        "type": "bool",
        "indexed": false
      },
      {
        "name": "executedSizeX5",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "executedNotionalX12",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "OrderBook_TakerOrderFilled"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "previousOwner",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "newOwner",
        "internalType": "address",
        "type": "address",
        "indexed": true
      }
    ],
    "name": "OwnershipTransferred"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "oldBadDebtX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newBadDebtX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "PositionManager_BadDebtUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "fundingX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "PositionManager_FundingSettled"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "internalType": "OrderId",
        "type": "uint64",
        "indexed": true
      },
      {
        "name": "packedRequest",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "PositionManager_OrderCreated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "oldSizeX5",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "oldOpenNotionalX12",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newSizeX5",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newOpenNotionalX12",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "PositionManager_PositionUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "realizedPnlX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "PositionManager_RealizedPnlSettled"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "positionId",
        "internalType": "PositionId",
        "type": "uint40",
        "indexed": true
      },
      {
        "name": "oldVaultBalanceX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "newVaultBalanceX6",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "PositionManager_VaultBalanceUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "RequestQueue_MessageDequeued"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "data",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "RequestQueue_MessageEnqueued"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldAddress",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "newAddress",
        "internalType": "address",
        "type": "address",
        "indexed": true
      }
    ],
    "name": "SilverKoiUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "who",
        "internalType": "address",
        "type": "address",
        "indexed": false
      },
      {
        "name": "fsig",
        "internalType": "bytes4",
        "type": "bytes4",
        "indexed": false
      },
      {
        "name": "keysHash",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": false
      },
      {
        "name": "slot",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "SlotFound"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "traderId",
        "internalType": "TraderId",
        "type": "uint32",
        "indexed": true
      },
      {
        "name": "trader",
        "internalType": "address",
        "type": "address",
        "indexed": true
      }
    ],
    "name": "TraderRegistered"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "from",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "to",
        "internalType": "address",
        "type": "address",
        "indexed": true
      },
      {
        "name": "value",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Transfer"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldAddress",
        "internalType": "address",
        "type": "address",
        "indexed": false
      },
      {
        "name": "newAddress",
        "internalType": "address",
        "type": "address",
        "indexed": false
      }
    ],
    "name": "VaultAddressUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "oldCollateralBalanceX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "oldInsuranceFundBalanceX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newCollateralBalanceX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "newInsuranceFundBalanceX6",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "Vault_BalancesUpdated"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "who",
        "internalType": "address",
        "type": "address",
        "indexed": false
      },
      {
        "name": "slot",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "WARNING_UninitedSlot"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "string",
        "type": "string",
        "indexed": false
      }
    ],
    "name": "log"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "address",
        "type": "address",
        "indexed": false
      }
    ],
    "name": "log_address"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "val",
        "internalType": "address[]",
        "type": "address[]",
        "indexed": false
      }
    ],
    "name": "log_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "val",
        "internalType": "int256[]",
        "type": "int256[]",
        "indexed": false
      }
    ],
    "name": "log_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "val",
        "internalType": "uint256[]",
        "type": "uint256[]",
        "indexed": false
      }
    ],
    "name": "log_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "log_bytes"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": false
      }
    ],
    "name": "log_bytes32"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "log_int"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "address",
        "type": "address",
        "indexed": false
      }
    ],
    "name": "log_named_address"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "address[]",
        "type": "address[]",
        "indexed": false
      }
    ],
    "name": "log_named_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "int256[]",
        "type": "int256[]",
        "indexed": false
      }
    ],
    "name": "log_named_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "uint256[]",
        "type": "uint256[]",
        "indexed": false
      }
    ],
    "name": "log_named_array"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "log_named_bytes"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "bytes32",
        "type": "bytes32",
        "indexed": false
      }
    ],
    "name": "log_named_bytes32"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      },
      {
        "name": "decimals",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "log_named_decimal_int"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "decimals",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "log_named_decimal_uint"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "int256",
        "type": "int256",
        "indexed": false
      }
    ],
    "name": "log_named_int"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "string",
        "type": "string",
        "indexed": false
      }
    ],
    "name": "log_named_string"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "key",
        "internalType": "string",
        "type": "string",
        "indexed": false
      },
      {
        "name": "val",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "log_named_uint"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "string",
        "type": "string",
        "indexed": false
      }
    ],
    "name": "log_string"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256",
        "indexed": false
      }
    ],
    "name": "log_uint"
  },
  {
    "type": "event",
    "anonymous": false,
    "inputs": [
      {
        "name": "",
        "internalType": "bytes",
        "type": "bytes",
        "indexed": false
      }
    ],
    "name": "logs"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_msgSender",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_callerConfirmation",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "AccessControl_BadConfirmation"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_account",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_role",
        "internalType": "bytes32",
        "type": "bytes32"
      }
    ],
    "name": "AccessControl_UnauthorizedAccount"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "target",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "account",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "AddressInsufficientBalance"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "BitMath_BitmapCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_pos",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "BitMath_PositionTooLarge"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_imRatioX6",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_maxRatioX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Config_ImRatioTooLarge"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_ImpactMarginNotionalCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_valueX0",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_limitX0",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Config_ImpactMarginNotionalTooLarge"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_MarginRatioCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_MarketPriceTwapIntervalCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_MaxOpenOrdersCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_MaxOrderSizeCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Config_MaxPositionSizeCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_imRatioX6",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_mmRatioX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Config_MmRatioNotLessThanImRatio"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotAddSelectorThatAlreadyExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selectors",
        "internalType": "bytes4[]",
        "type": "bytes4[]"
      }
    ],
    "name": "Diamond_CannotAddSelectorsFromZeroAddress"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotRemoveImmutableFunction"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotRemoveSelectorThatDoesNotExist"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotReplaceImmutableFunction"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotReplaceSelectorFromSameFacet"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_CannotReplaceSelectorThatDoesNotExist"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selectors",
        "internalType": "bytes4[]",
        "type": "bytes4[]"
      }
    ],
    "name": "Diamond_CannotReplaceSelectorsWithZeroAddress"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_selector",
        "internalType": "bytes4",
        "type": "bytes4"
      }
    ],
    "name": "Diamond_FunctionNotFound"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_initializationContractAddress",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_calldata",
        "internalType": "bytes",
        "type": "bytes"
      }
    ],
    "name": "Diamond_InitializationFunctionReverted"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_action",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "name": "Diamond_InvalidFacetCutAction"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_address",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Diamond_NoBytecodeAtAddress"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_facetAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Diamond_NoSelectorsProvidedForFacetForCut"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_facetAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Diamond_RemoveFacetAddressMustBeZeroAddress"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_user",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_owner",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "ERC173_NotContractOwner"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "FailedInnerCall"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_timestamp",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "LibTime_BlockTimestampPastMaxUint32"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_positionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "_traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "_liquidatorId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "Liquidation_CannotLiquidateSelf"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_targetPositionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "_takeoverPositionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "_targetPositionSizeX5",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_takeoverPositionSizeX5",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Liquidation_DeleveragingPositionHasWrongDirection"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Liquidation_InAdlState"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Liquidation_NotInAdlState"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_positionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "_pendingNetExecutionSizeX5",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_pendingAbsExecutionSizeX5",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Liquidation_PositionCannotHavePendingExecution"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_caller",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "MarketCallee_CallerIsNotMarket"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "MathOverflowedMulDiv"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_a",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_b",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Math_SSMulDivByZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_a",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_b",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Math_SUMulDivByZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_a",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Math_SignedDivideByZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_x",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Math_SignedInversionOverflow"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_x",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Math_UnsignedInversionUnderflow"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_sender",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "NotFaucet"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_chainId",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "NotTestnet"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_fromAbove",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "name": "Operation_CannotSetLimitTickIfTriggerTickIsZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_collateralX6",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Operation_CollateralDiffNotZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "Operation_ExpiredOrderNotRemoved"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_executedSize",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_remainingSize",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_FokOrderNotFullyExecuted"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Operation_GtdNotSupportedForTrigger"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_deadline",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_blockTimestamp",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_minDeadline",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_GtdOrderHasInvalidDeadline"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_clientOrderId",
        "internalType": "ClientOrderId",
        "type": "uint32"
      }
    ],
    "name": "Operation_InvalidClientOrderId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_leverageX2",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_minLeverageX2",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_maxLeverageX2",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_InvalidLeverage"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8"
      },
      {
        "name": "_minId",
        "internalType": "PositionSubId",
        "type": "uint8"
      },
      {
        "name": "_maxId",
        "internalType": "PositionSubId",
        "type": "uint8"
      }
    ],
    "name": "Operation_InvalidPositionSubId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_deadline",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_MarketOrderCannotHaveDeadline"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_tif",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_MarketOrderHasInvalidTimeInForce"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_limit",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_MaxOpenOrdersAndTriggersExceeded"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_currentSizeX5",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_orderSizeX5",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_maxSizeX5",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_MaxPositionSizeExceeded"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Operation_NoTriggerPricesSet"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Operation_OrderCannotBePostOnly"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_tif",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_deadline",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_OrderCannotHaveDeadline"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "Operation_OrderIdNotInExpiryQueue"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Operation_OrderSizeCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_sizeX5",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_maxSizeX5",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_OrderSizeTooLarge"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_positionId",
        "internalType": "PositionId",
        "type": "uint40"
      }
    ],
    "name": "Operation_PositionHasBadDebt"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_oldPositionSizeX5",
        "internalType": "int256",
        "type": "int256"
      },
      {
        "name": "_newPositionSizeX5",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "Operation_ReduceOnlyOrderDoesNotReducePosition"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_tradeFeeX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_TradeFeeNotZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_fromAbove",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "name": "Operation_TriggerLimitPriceOnWrongSideOfTriggerPrice"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "Operation_TriggerOrderReduceOnlyViolation"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_fromAbove",
        "internalType": "bool",
        "type": "bool"
      },
      {
        "name": "_triggerPriceX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_bestBidX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_bestAskX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_TriggerPriceViolatesBestPrice"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_packedRequest",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Operation_UnknownMessageType"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Operation_UnsizedTriggerMustBeReduceOnly"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "Operation_UnsizedTriggerOrderIsNotReduceOnly"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_id",
        "internalType": "uint64",
        "type": "uint64"
      }
    ],
    "name": "OrderBookRedBlackTree_IdAlreadyExists"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBookRedBlackTree_IdCannotBeNull"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_id",
        "internalType": "uint64",
        "type": "uint64"
      }
    ],
    "name": "OrderBookRedBlackTree_IdDoesNotExist"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBookRedBlackTree_KeyCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBookRedBlackTree_PriceCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBookRedBlackTree_SizeCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_context",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "OrderBookRedBlackTree_Unreachable"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBook_ExecutionQueueCapacityReached"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "OrderBook_ExpiredOrderOnBook"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "OrderBook_NumPriceLevelsMustBePositive"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      },
      {
        "name": "_isBid",
        "internalType": "bool",
        "type": "bool"
      },
      {
        "name": "_orderPriceX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_bestOppPriceX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "OrderBook_OrderCrossesBook"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      },
      {
        "name": "_side",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_expectedSide",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "OrderBook_OrderHasIncorrectSide"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "owner",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "account",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_existingTriggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      },
      {
        "name": "_newTriggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "PositionManager_CannotHaveMultipleFullTriggers"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_clientOrderId",
        "internalType": "ClientOrderId",
        "type": "uint32"
      }
    ],
    "name": "PositionManager_ClientOrderIdAlreadyExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_expected",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_actual",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "PositionManager_InconsistentActiveOrderIdsCount"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_expected",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_actual",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "PositionManager_InconsistentActiveTriggersCount"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_positionId",
        "internalType": "PositionId",
        "type": "uint40"
      },
      {
        "name": "_marginRatio",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_missingAmountX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "PositionManager_NotEnoughFreeCollateral"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_value",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_delta",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "PositionManager_OpenInterestSizeUnderflow"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_value",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_delta",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "PositionManager_OpenInterestValueUnderflow"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_orderId",
        "internalType": "OrderId",
        "type": "uint64"
      }
    ],
    "name": "PositionManager_OrderDoesNotExist"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "_positionSubId",
        "internalType": "PositionSubId",
        "type": "uint8"
      }
    ],
    "name": "PositionManager_OrderIdsExhausted"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "PositionManager_TriggerDoesNotExist"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "ReentrancyGuard_ReentrantCall"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Registry_AddressCannotBeZero"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_marketAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Registry_MarketAddressAlreadyExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_symbol",
        "internalType": "string",
        "type": "string"
      }
    ],
    "name": "Registry_MarketSymbolAlreadyExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_trader",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "Registry_TraderAlreadyRegistered"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_trader",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Registry_TraderNotRegistered"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_marketId",
        "internalType": "MarketId",
        "type": "uint16"
      },
      {
        "name": "_expectedMarketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "Registry_UnexpectedMarketId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_actualAddress",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_expectedAddress",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "Registry_UnexpectedSilverKoiAddress"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_marketId",
        "internalType": "MarketId",
        "type": "uint16"
      }
    ],
    "name": "Registry_UnknownMarketId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_traderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "Registry_UnknownTraderId"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Registry_VaultNotInitialized"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "RequestQueue_CapacityReached"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "SKOperation_BatchRequestIsEmpty"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_traderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "_otherTraderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "SKOperation_InconsistentTraderId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_messageType",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SKOperation_InvalidBatchMessageType"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_providedMessageType",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_expectedMessageType",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SKOperation_InvalidMessageType"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_trader",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_providedTraderId",
        "internalType": "TraderId",
        "type": "uint32"
      },
      {
        "name": "_expectedTraderId",
        "internalType": "TraderId",
        "type": "uint32"
      }
    ],
    "name": "SKOperation_InvalidTraderId"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_expectedLength",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_actualLength",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SKPrice_ArrayLengthMismatch"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "bits",
        "internalType": "uint8",
        "type": "uint8"
      },
      {
        "name": "value",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "SafeCastOverflowedIntDowncast"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "value",
        "internalType": "int256",
        "type": "int256"
      }
    ],
    "name": "SafeCastOverflowedIntToUint"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "bits",
        "internalType": "uint8",
        "type": "uint8"
      },
      {
        "name": "value",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SafeCastOverflowedUintDowncast"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "value",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SafeCastOverflowedUintToInt"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "spender",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "currentAllowance",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "requestedDecrease",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "SafeERC20FailedDecreaseAllowance"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "token",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_caller",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_self",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "SelfCallee_CallerIsNotSelf"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_data",
        "internalType": "bytes20",
        "type": "bytes20"
      },
      {
        "name": "_decodedLength",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "ShortString_InvalidShortString20Length"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_string",
        "internalType": "string",
        "type": "string"
      },
      {
        "name": "_maxLength",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "ShortString_StringTooLong"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_caller",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_silverKoi",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "SilverKoiCallee_CallerIsNotSilverKoi"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_id",
        "internalType": "uint64",
        "type": "uint64"
      }
    ],
    "name": "SlidingWindowExpiryQueue_IdExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_expiry",
        "internalType": "uint32",
        "type": "uint32"
      },
      {
        "name": "_currentTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      },
      {
        "name": "_maxTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "SlidingWindowExpiryQueue_InvalidExpiry"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "value",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "length",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "StringsInsufficientHexLength"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_trader",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_balance",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_minAmount",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "TestnetFaucet_HasEnough"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_trader",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "_totalReceived",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_maxTotalAmount",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "TestnetFaucet_TooMuch"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_tick",
        "internalType": "uint24",
        "type": "uint24"
      }
    ],
    "name": "Tick_InvalidTick"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_priceX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Tick_InvalidTickPriceX18"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_priceX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_lowerX18",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_upperX18",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Tick_PriceX18OutOfRange"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_triggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "TriggerQueue_AlreadyExists"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_existingTriggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      },
      {
        "name": "_otherTriggerId",
        "internalType": "TriggerId",
        "type": "uint64"
      }
    ],
    "name": "TriggerQueue_IdCollision"
  },
  {
    "type": "error",
    "inputs": [],
    "name": "Twap_AlreadyInitialized"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_interval",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "Twap_InvalidTwapInterval"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_currentTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      },
      {
        "name": "_latestTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "Twap_ObservationTimeEarlierThanLatest"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_targetTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      },
      {
        "name": "_earliestTimestamp",
        "internalType": "uint32",
        "type": "uint32"
      }
    ],
    "name": "Twap_RequestedObservationTimeTooEarly"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_vaultBalanceX6",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_insuranceFundBalanceX6",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_withdrawAmountX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Vault_InsufficientBalance"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_insuranceFundBalanceX6",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_withdrawAmountX6",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Vault_InsufficientInsuranceFundBalance"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_amountXS",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_allowanceXS",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Vault_InsufficientSettlementTokenAllowance"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_decimals",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Vault_InvalidSettlementDecimals"
  },
  {
    "type": "error",
    "inputs": [
      {
        "name": "_decimals",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_minDecimals",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Vault_InvalidSettlementTokenDecimals"
  }
]

export default abi;
