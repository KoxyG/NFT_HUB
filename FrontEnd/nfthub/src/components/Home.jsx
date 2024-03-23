import Button from "@/elements/button";
import { useState } from "react";
import Image from "next/image";
import NFTCard from "@/elements/cardDesign";
import CardProps from "@/elements/cardDesign";

const HomeComponet = () => {
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
      <div className="container mx-auto  space-y-10 sm:space-y-0 sm:flex sm:justify-between">
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
              <Button className="cursor-pointer px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]">
                Start Creating
              </Button>
              <Button className="border-4 cursor-pointer px-3 text-black py-3 rounded-lg border-[#faad89]">
                Explore Now
              </Button>
            </div>
          </div>
          <div className="">
            <Image src="/Images/side.png" alt="hero" width={500} height={500} />
          </div>
        </div>

        <div className="sm:w-1/5 sm:pl-5">
        <CardProps
            key={firstNft.id}
            image={firstNft.image}
            title={firstNft.title}
            description={firstNft.description}
            currentBid={firstNft.currentBid}
            endTime={firstNft.endTime}
          />

        </div>
      </div>
    </>
  );
};

export default HomeComponet;