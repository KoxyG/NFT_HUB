import { useCallback, useRef, useContext, useState } from "react";
import { NftContext } from "@/context";
import { Contract, providers } from "ethers";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

///Commencing the code
export const companyName = "NftHub"
export const CHAIN_ID = 11155111;
export const NETWORK_NAME = "Sepolia";




export const NODE_URL = "wss://ethereum-mainnet.core.chainstack.com/ws/673e14e04acb090649b2f13d15a74b34";

export const domainName = "http://localhost:3000"


export const getProvider = (async () => {

  const web3ModalRef = useRef(() => new Web3Modal());

  const {
    walletConnected,
    setWalletConnected,
    account,
    setAccount,
    vested,
    setVested,
  } = useContext(NftContext);

  const provider = await web3ModalRef.current.connect();
  const web3Provider = new provider.WebSocketProvider(NODE_URL)
  const getSigner = web3Provider.getSigner();

  const { chainId } = await web3Provider.getNetwork();

  setAccount(await getSigner.getAddress());
  setWalletConnected(true);

  if (chainId !== CHAIN_ID) {
    alert(`Please switch to the ${NETWORK_NAME} network!`);
    throw new Error(`Please switch to the ${NETWORK_NAME} network`);
  }
  setProvider(web3Provider);
}, []);

export const getSigner = (async () => {
  try {
    if (typeof window.ethereum === "undefined") {
      alert("pls install metamask to use this feature");
      return;
    }
    // Initialize Web3Provider with window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Request access to the user's MetaMask accounts
    await provider.send("eth_requestAccounts", []);

    // Get the chain ID from the connected network
    const { chainId } = await provider.getNetwork();

    // Check if the chain ID matches your desired network
    if (chainId !== CHAIN_ID) {
      alert(`Please switch to the ${NETWORK_NAME} network!`);
      throw new Error(`Please switch to the ${NETWORK_NAME} network`);
    }

    // Get the signer instance
    const signer = await provider.getSigner();

    // Log the signer's address
    const address = await signer.getAddress();
    console.log("Signer address:", address);

    return signer;
  } catch (error) {
    console.error("Error fetching signer:", error);
    // Handle errors appropriately
    throw error;
  }
}, []);

///This function connects Metamask wallet
export const connectMetamask = async () => {
  const {
    walletConnected,
    setWalletConnected,
    account,
    setAccount
  } = useContext(NftContext);

    if (window.ethereum) {
     
      const provider = new ethers.BrowserProvider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
  
      // const { identity } = await db.createTempAddress();
   
      // setOwner(identity);
  
      // setUser({
      //   privateKey: identity.privateKey,
      // });
      setWalletConnected(true)
        console.log('Connected to Metamask');
    } else {
        // Metamask not detected
        console.error('Metamask not detected');
        alert("pls install metamask");
    }
}

///This function connects Coinbase wallet
export const connectCoinbase = () => {
    if (window.coinbase) {
        // Coinbase Wallet is installed
        console.log('Connected to Coinbase Wallet');
    } else {
        console.error('Coinbase Wallet not detected');
    }
}

///This function connects Trust wallet
export const connectTrust = () => {
    if (window.ethereum && window.ethereum.isTrust) {
        // Trust Wallet is installed
        console.log('Connected to Trust Wallet');
    } else {
        console.error('Trust Wallet not detected');
    }
}

