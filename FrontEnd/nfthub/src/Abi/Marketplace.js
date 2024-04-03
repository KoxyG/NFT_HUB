export const Marketplace_Address = '0xA87b6d1caB49d7963fd71bb1861B6E42A50B5723'

export const marketplace = [
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "internalType": "string",
           "name": "symbol",
           "type": "string"
         },
         {
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
         },
         {
           "internalType": "string",
           "name": "baseURI",
           "type": "string"
         }
       ],
       "stateMutability": "nonpayable",
       "type": "constructor"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "sender",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "ERC721IncorrectOwner",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "ERC721InsufficientApproval",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "approver",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidApprover",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidOperator",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidOwner",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "receiver",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidReceiver",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "sender",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidSender",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "ERC721NonexistentToken",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "OwnableInvalidOwner",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "account",
           "type": "address"
         }
       ],
       "name": "OwnableUnauthorizedAccount",
       "type": "error"
     },
     {
       "inputs": [],
       "name": "ReentrancyGuardReentrantCall",
       "type": "error"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "owner",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "approved",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "Approval",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "owner",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "operator",
           "type": "address"
         },
         {
           "indexed": false,
           "internalType": "bool",
           "name": "approved",
           "type": "bool"
         }
       ],
       "name": "ApprovalForAll",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_fromTokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_toTokenId",
           "type": "uint256"
         }
       ],
       "name": "BatchMetadataUpdate",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "bidder",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "BidPlaced",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "bidder",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "BidWithdrawn",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_tokenId",
           "type": "uint256"
         }
       ],
       "name": "MetadataUpdate",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "price",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "string",
           "name": "tokenURI",
           "type": "string"
         }
       ],
       "name": "NFTListed",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "buyer",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "seller",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "price",
           "type": "uint256"
         }
       ],
       "name": "NFTSold",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "previousOwner",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
         }
       ],
       "name": "OwnershipTransferred",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "destinationBlockchain",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "string",
           "name": "destinationTokenId",
           "type": "string"
         }
       ],
       "name": "TokenBridged",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "from",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "Transfer",
       "type": "event"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "approve",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "balanceOf",
       "outputs": [
         {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "internalType": "address",
           "name": "destinationBlockchain",
           "type": "address"
         },
         {
           "internalType": "string",
           "name": "destinationTokenId",
           "type": "string"
         }
       ],
       "name": "bridgeToken",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "destinationBlockchain",
           "type": "address"
         },
         {
           "internalType": "string",
           "name": "destinationTokenId",
           "type": "string"
         }
       ],
       "name": "bridgeTokenTo",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "buyNFT",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "tokenURI",
           "type": "string"
         },
         {
           "internalType": "uint256",
           "name": "price",
           "type": "uint256"
         }
       ],
       "name": "createToken",
       "outputs": [
         {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
         }
       ],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "getApproved",
       "outputs": [
         {
           "internalType": "address",
           "name": "",
           "type": "address"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "user",
           "type": "address"
         }
       ],
       "name": "getPersonalizedRecommendations",
       "outputs": [
         {
           "internalType": "uint256[]",
           "name": "",
           "type": "uint256[]"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "user",
           "type": "address"
         }
       ],
       "name": "getUserPreferences",
       "outputs": [
         {
           "internalType": "string",
           "name": "",
           "type": "string"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         },
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         }
       ],
       "name": "isApprovedForAll",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "listPrice",
       "outputs": [
         {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "name",
       "outputs": [
         {
           "internalType": "string",
           "name": "",
           "type": "string"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "owner",
       "outputs": [
         {
           "internalType": "address",
           "name": "",
           "type": "address"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "ownerOf",
       "outputs": [
         {
           "internalType": "address",
           "name": "",
           "type": "address"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "placeBid",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "renounceOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "from",
           "type": "address"
         },
         {
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "from",
           "type": "address"
         },
         {
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "internalType": "bytes",
           "name": "data",
           "type": "bytes"
         }
       ],
       "name": "safeTransferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         },
         {
           "internalType": "bool",
           "name": "approved",
           "type": "bool"
         }
       ],
       "name": "setApprovalForAll",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "newPrice",
           "type": "uint256"
         }
       ],
       "name": "setListPrice",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "category",
           "type": "string"
         },
         {
           "internalType": "uint256",
           "name": "maxPrice",
           "type": "uint256"
         },
         {
           "internalType": "bool",
           "name": "allowAuctions",
           "type": "bool"
         },
         {
           "internalType": "uint256[]",
           "name": "preferredTokenIds",
           "type": "uint256[]"
         }
       ],
       "name": "setUserPreferences",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "bytes4",
           "name": "interfaceId",
           "type": "bytes4"
         }
       ],
       "name": "supportsInterface",
       "outputs": [
         {
           "internalType": "bool",
           "name": "",
           "type": "bool"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "symbol",
       "outputs": [
         {
           "internalType": "string",
           "name": "",
           "type": "string"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "tokenURI",
       "outputs": [
         {
           "internalType": "string",
           "name": "",
           "type": "string"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "from",
           "type": "address"
         },
         {
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "transferFrom",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
         }
       ],
       "name": "transferOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "_listPrice",
           "type": "uint256"
         }
       ],
       "name": "updateListPrice",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "withdrawBid",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "withdrawFunds",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     }
   ]