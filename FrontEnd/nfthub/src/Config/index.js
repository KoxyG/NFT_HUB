import { Nft_Address, Nft } from "@/Abi/Nft";
import { Marketplace_Address, marketplace } from "@/Abi/Marketplace";
import { useCallback } from "react";
import { Contract} from "ethers";



export const getNftContractInstance = async (signer) => {
  try {
    return new Contract(Nft_Address, Nft, signer);
  } catch (error) {
    console.error("Error creating NftContract instance:", error);
  }
};

export const getMarketplaceContractInstance = async(signer) => {
  try {
    return new Contract(Marketplace_Address, marketplace, provider);
  } catch (error) {
    console.error("Error creating token contract instance:", error);
    return null;
  }
};
