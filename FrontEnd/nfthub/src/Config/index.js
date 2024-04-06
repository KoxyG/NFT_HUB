import { Nft_Address, Nft } from "@/Abi/Nft";
import { Marketplace_Address, marketplace } from "@/Abi/Marketplace";
import { useCallback } from "react";
import { Contract} from "ethers";



export const getNftContractInstance = async(provider) => {
  try {
    return new Contract(Nft_Address, Nft, provider);
  } catch (error) {
    console.error("Error creating vesting contract instance:", error);
  }
};

export const getMarketplaceContractInstance = async(provider) => {
  try {
    return new Contract(Marketplace_Address, marketplace, provider);
  } catch (error) {
    console.error("Error creating marketplace contract instance:", error);
  }
};
