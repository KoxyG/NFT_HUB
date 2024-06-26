import Button from "@/elements/button";
import { useState, useCallback } from "react";
import Image from "next/image";
import NFTCard from "@/elements/cardDesign";
import ConnectModal from "./connectModal";
import CardProps from "@/elements/cardDesign";
import { NftContext } from "@/Context";
import { useContext } from "react";



const HomeComponet = () => {

  const { connectModal, user, setUser, setConnectModal, walletConnected, setWalletConnected } = useContext(NftContext);

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setConnectModal(true);
  }

  function closeModal() {
    setConnectModal(false);
  }

  const disconnectWallet = useCallback(() => {
    setWalletConnected(false);
    setUser(null);
  }, [setWalletConnected]);


  const Nft = [
    {
      id: 1,
      image: "/Images/nft.png", // Example image URL
      title: "SoundSculptures",
      endTime: "04:40:56",
      currentBid: "0.005 ETH",
      description: "Description for story 1...",
    },
    {
      id: 1,
      image: "/Images/Announce.png", // Example image URL
      title: "SoundSculptures",
      endTime: "04:40:56",
      currentBid: "0.005 ETH",
      description: "Description for story 1...",
    },
  ];

  const firstNft = Nft[0];

  return (
    <>
      <div className="px-[50px] bg-black container mx-auto pb-10  space-y-10 sm:space-y-0 sm:flex sm:justify-between">
        <div className="rounded-md sm:flex sm:justify-between sm:w-4/5 bg-[#ffe5da] ">
          <div className=" px-[30px] pt-[60px] ">
            <h2 className="text-black leading-20 font-bold text-4xl">
              Unlock Your Artistic Potential <br />
              in the Decentralized NFT Universe
            </h2>
            <p className="text-black mt-5 font-medium">
              Showcase, sell and trade unique digital assets <br />
              with transparency and security.{" "}
            </p>

            <div className="flex gap-4 py-8">
              <div>
                {!walletConnected ? ( 
                  <>
                <Button
                  onClick={openModal}
                  style={{
                    boxShadow: "0px 1px 10px #999",
                  }}
                  className="cursor-pointer sm:px-3 sm:py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]"
                >
                  Start Creating
                </Button>
                <ConnectModal isOpen={connectModal} onClose={closeModal} />
                </>
                ) : (
                  <Button
                    onClick={disconnectWallet}
                    style={{
                      boxShadow: "0px 1px 10px #999",
                    }}
                    className="cursor-pointer sm:px-3 sm:py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]"
                  >
                    Disconnect
                  </Button>
                )}
              </div>
              <Button
                style={{
                  boxShadow: "0px 1px 10px #999",
                }}
                className="border-2 cursor-pointer sm:px-3 text-black sm:py-3 rounded-lg border-[#faad89]"
              >
                Explore Now
              </Button>
            </div>
          </div>
          <div className="">
            <Image src="/Images/side.png" alt="hero" width={500} height={500} />
          </div>
        </div>

        <div className="sm:pl-5 hidden sm:block">
          <CardProps
            key={firstNft.id}
            image={firstNft.image}
            title={firstNft.title}
            description={firstNft.description}
            currentBid={firstNft.currentBid}
            endTime={firstNft.endTime}
            href={`/Details/${firstNft.id}`}
          />
        </div>
      </div>
    </>
  );
};

export default HomeComponet;
