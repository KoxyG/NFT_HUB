export const Nft_Address = '0x63cEd545f1Ee372EB59790AF6D80db814BD43AFE'

export const Nft = [
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "_name",
           "type": "string"
         },
         {
           "internalType": "string",
           "name": "_symbol",
           "type": "string"
         },
         {
           "internalType": "address",
           "name": "_newOwner",
           "type": "address"
         },
         {
           "internalType": "string",
           "name": "baseURI_",
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
       "inputs": [],
       "name": "getBaseURI",
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
       "name": "mint",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "mintingFee",
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
           "internalType": "string",
           "name": "newBaseURI",
           "type": "string"
         }
       ],
       "name": "updateBaseURI",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     }
   ]