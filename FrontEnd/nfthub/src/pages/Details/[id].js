import classNames from "classnames";
import { FontAwesomeIcon, faArrowTrendUp, faEllipsis, faInfoCircle } from "@fortawesome/react-fontawesome";
import Accordion from "@/elements/accordion";
import ListItem from "@/elements/listitem";

import { useContext } from "react";

import { NftContext } from "@/Context";
import Card from "../Card";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const Details = () => {

  const router = useRouter()
  const { id } = router.query;
  const { setModal, setShowModal } = useContext(NftContext);


  const NFTDetails = [
     {
          id: 1,
          image: "/Images/nft.png", // Example image URL
          title: "1SoundSculptures",
          endTime: "04:40:56",
          totalShares: "333",
          currentBid: "0.005 ETH",
          description: "Dive into a captivating realm of digital art with the DigitalSpectrum NFT collection. This extraordinary collection showcases a wide range of vibrant and visually stunning artworks, each crafted with meticulous detail and artistic flair. From abstract compositions to mesmerizing patterns, every piece in the DigitalSpectrum collection is a testament to the limitless possibilities of digital creativity. Immerse yourself in a symphony of colors, explore intricate designs that defy convention, and own a piece of this ever-evolving digital art movement that celebrates the beauty of the digital spectrum",
        },
        {
          id: 1,
          image: "/Images/nft.png", // Example image URL
          title: "2SoundSculptures",
          tag: ["All", "Arts"],
          endTime: "04:40:56",
          totalShares: "333",
          currentBid: "0.005 ETH",
          description: "Dive into a captivating realm of digital art with the DigitalSpectrum NFT collection. This extraordinary collection showcases a wide range of vibrant and visually stunning artworks, each crafted with meticulous detail and artistic flair. From abstract compositions to mesmerizing patterns, every piece in the DigitalSpectrum collection is a testament to the limitless possibilities of digital creativity. Immerse yourself in a symphony of colors, explore intricate designs that defy convention, and own a piece of this ever-evolving digital art movement that celebrates the beauty of the digital spectrum",

        },
        {
          id: 1,
          image: "/Images/Announce.png", // Example image URL
          title: "3SoundSculptures",
          tag: ["All", "Fashion"],
          endTime: "04:40:56",
          totalShares: "333",
          currentBid: "0.005 ETH",
          description: "Dive into a captivating realm of digital art with the DigitalSpectrum NFT collection. This extraordinary collection showcases a wide range of vibrant and visually stunning artworks, each crafted with meticulous detail and artistic flair. From abstract compositions to mesmerizing patterns, every piece in the DigitalSpectrum collection is a testament to the limitless possibilities of digital creativity. Immerse yourself in a symphony of colors, explore intricate designs that defy convention, and own a piece of this ever-evolving digital art movement that celebrates the beauty of the digital spectrum",
        },
];

const selectedNFT = NFTDetails.find(nft => nft.id === parseInt(id));

  if (!selectedNFT) {
    return <div>NFT not found</div>;
  }


  const openModal = () => {
    setModal(true);
  };

  const closeAuction = () => {
    setShowModal(fals);
  };

  

  return (
    <div className="flex flex-col bg-black text-white p-[50px] xl:p-[70px] laptop:p-[100px] gap-[50px] xl:gap-[100px] h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[50px] xl:gap-[100px] h-full">
        <div className="max-w-[523px] w-full h-[617px] lg:h-full bg-cover bg-center border-x-2 border-white-500 rounded-lg">
          <Image src={selectedNFT?.image} width={550} height={150} alt="image details" />
        </div>

        <div className="flex flex-col gap-6 max-w-[617px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            
            <FontAwesomeIcon icon={faEllipsis} size="lg" className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-extrabold text-2xl pb-3">{selectedNFT.title}</h3>
            <h5 className="text-lg">{selectedNFT.description}</h5>
          </div>
          <Card className="flex flex-col">
            <div className="bg-gradient-to-r from-[#56565a] to-[#4a497e] rounded-md  border border-white flex flex-col p-6 gap-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h4 className="font-extrabold">Ends in</h4>
                  <p className="text-base/[22px]">{selectedNFT?.endTime}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h7 className="font-extrabold">Highest floor bid</h7>
                  <p className="text-base/[22px] text-end">{selectedNFT?.currentBid}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button onClick={openModal} variant="primary" className="bg-[#ffa37d] font-bold py-5 rounded-md basis-full !flex justify-center">
                  Place bid
                </button>

               

                {/* <Modal>
                  {/* <h7 className="text-center !text-slate-900 font-normal leading-snug">
                    Place Bid <span>{details.title}</span>
                  <h7> */}
                  {/* <p
                    className="text-black 
                  text-center"
                  >
                    Review the information below to ensure it is what you want
                  </p> */}

                  {/** placeing a bid */}
                  {/* <div className="text-black pt-5  flex  justify-between">
                    <p className="text-slate-700 text-base font-semibold leading-snug">Current Bid</p>
                    <p className="text-slate-900 text-base font-semibold leading-snug">details.price</p>
                  </div>
                  <div className="text-black pt-2 pb-5  flex  justify-between">
                    <p className="text-slate-700 text-base font-semibold leading-snug">Minimum Markup</p>
                    <p className="text-slate-900 text-base font-semibold leading-snug">0 ETH</p>
                  </div> */}

                  {/* <hr style={{ borderColor: "gray" }} /> */}
{/* 
                  <p className="py-3 flex justify-end  py-2 text-slate-900 text-base font-semibold leading-snug">
                    Available balance: <span>739.65 ETH</span>
                  </p> */}

                  {/**button */}
                  {/* <button  className="!flex justify-center">Bid Now</button> */}
                {/* </Modal>  */}
               
              </div>
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
};
export default Details

