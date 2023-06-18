const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "errorCode",
        type: "int256",
      },
    ],
    name: "ActorError",
    type: "error",
  },
  {
    inputs: [],
    name: "ActorNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "FailToCallActor",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "InvalidCodec",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidResponseLength",
    type: "error",
  },
  {
    inputs: [],
    name: "NegativeValueNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "size",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "verified",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "DealProposalCreate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "received",
        type: "string",
      },
    ],
    name: "ReceivedDataCap",
    type: "event",
  },
  {
    inputs: [],
    name: "AUTHENTICATE_MESSAGE_METHOD_NUM",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DATACAP_ACTOR_ETH_ADDRESS",
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
    name: "DATACAP_RECEIVER_HOOK_METHOD_NUM",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MARKET_ACTOR_ETH_ADDRESS",
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
    name: "MARKET_NOTIFY_DEAL_METHOD_NUM",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "addBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "dealRequestIdx",
    outputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dealRequests",
    outputs: [
      {
        internalType: "bytes",
        name: "piece_cid",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "piece_size",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "verified_deal",
        type: "bool",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
      {
        internalType: "int64",
        name: "start_epoch",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "end_epoch",
        type: "int64",
      },
      {
        internalType: "uint256",
        name: "storage_price_per_epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "provider_collateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "client_collateral",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "extra_params_version",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "string",
            name: "location_ref",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "car_size",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "skip_ipni_announce",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "remove_unsealed_copy",
            type: "bool",
          },
        ],
        internalType: "struct ExtraParamsV1",
        name: "extra_params",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dealsLength",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getDealByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "piece_cid",
            type: "bytes",
          },
          {
            internalType: "uint64",
            name: "piece_size",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "verified_deal",
            type: "bool",
          },
          {
            internalType: "string",
            name: "label",
            type: "string",
          },
          {
            internalType: "int64",
            name: "start_epoch",
            type: "int64",
          },
          {
            internalType: "int64",
            name: "end_epoch",
            type: "int64",
          },
          {
            internalType: "uint256",
            name: "storage_price_per_epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "provider_collateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "client_collateral",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "extra_params_version",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "string",
                name: "location_ref",
                type: "string",
              },
              {
                internalType: "uint64",
                name: "car_size",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "skip_ipni_announce",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "remove_unsealed_copy",
                type: "bool",
              },
            ],
            internalType: "struct ExtraParamsV1",
            name: "extra_params",
            type: "tuple",
          },
        ],
        internalType: "struct DealRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
    ],
    name: "getDealProposal",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalId",
        type: "bytes32",
      },
    ],
    name: "getExtraParams",
    outputs: [
      {
        internalType: "bytes",
        name: "extra_params",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "cid",
        type: "bytes",
      },
    ],
    name: "getProposalIdSet",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "requestId",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
        ],
        internalType: "struct RequestId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "cid",
        type: "bytes",
      },
    ],
    name: "getProviderSet",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "provider",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
        ],
        internalType: "struct ProviderSet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "method",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "handle_filecoin_method",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
            internalType: "bytes",
            name: "piece_cid",
            type: "bytes",
          },
          {
            internalType: "uint64",
            name: "piece_size",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "verified_deal",
            type: "bool",
          },
          {
            internalType: "string",
            name: "label",
            type: "string",
          },
          {
            internalType: "int64",
            name: "start_epoch",
            type: "int64",
          },
          {
            internalType: "int64",
            name: "end_epoch",
            type: "int64",
          },
          {
            internalType: "uint256",
            name: "storage_price_per_epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "provider_collateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "client_collateral",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "extra_params_version",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "string",
                name: "location_ref",
                type: "string",
              },
              {
                internalType: "uint64",
                name: "car_size",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "skip_ipni_announce",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "remove_unsealed_copy",
                type: "bool",
              },
            ],
            internalType: "struct ExtraParamsV1",
            name: "extra_params",
            type: "tuple",
          },
        ],
        internalType: "struct DealRequest",
        name: "deal",
        type: "tuple",
      },
    ],
    name: "makeDealProposal",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "pieceDeals",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "pieceProviders",
    outputs: [
      {
        internalType: "bytes",
        name: "provider",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "pieceRequests",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "pieceStatus",
    outputs: [
      {
        internalType: "enum DaoDealClient.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pieceCid",
        type: "bytes",
      },
    ],
    name: "updateActivationStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "client",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdrawBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export default _abi;

const extraParamsV1 = [
  "https://data-depot.lighthouse.storage/api/download/download_car?fileId=65e0bdfa-5fd3-4de7-ade1-045a8c7b353c.car",
  1439273,
  "true",
  "false",
];

export const DealRequestStruct = [
  "0x000181e20392202007554549d24e42b38403cbd9d30d30299010c75e8473c4a131c6fa5b04267220",
  2097152,
  false,
  "bafybeicxcclvlid2ocrksh52lub3ny6vd3muic5etjppd2r7g6pcfdxufm",
  270000,
  700000,
  0,
  0,
  0,
  1,
  extraParamsV1,
];
