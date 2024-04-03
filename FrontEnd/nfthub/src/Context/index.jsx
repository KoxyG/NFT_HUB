import React, { useState, createContext } from "react";


export const NftContext = createContext();
export function NftProvider(props) {
  
  const [tokenID, setTokenID] = useState();
  const [db, setDb] = useState(null);
  const [user, setUser] = useState(null);
  const [connectModal, setConnectModal] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [initDb, setInitDb] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nftDetails, setNFTDetails] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [minting, setMinting] = useState(false);
  
  

  return (
    <div>
      <NftContext.Provider
        value={{
          minting,
          setMinting,
          tokenID,
          connectModal,
          walletConnected,
          setWalletConnected,
          provider,
          setProvider,
          setTokenID,
          setConnectModal,
          nftDetails,
          setNFTDetails,
          db,
          user,
          setUser,
          setDb,
          initDb,
          setInitDb,
          showModal,
          setShowModal,
        }}
      >
        {props.children}
      </NftContext.Provider>
    </div>
  );
}