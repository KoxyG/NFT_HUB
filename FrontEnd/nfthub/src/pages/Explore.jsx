"use client";
import React, { useState, useRef } from "react";
import CardProps from "@/elements/cardDesign";
import NftTag from "@/components/NftTag";
import { motion, useInView } from "framer-motion";



const Nft = [
     {
          id: 1,
          image: "/Images/nft.png", // Example image URL
          title: "1SoundSculptures",
          tag: ["All", "Arts", "Fashion"],
          endTime: "04:40:56",
          currentBid: "0.005 ETH",
          description: "Description for story 1...",
        },
        {
          id: 1,
          image: "/Images/nft.png", // Example image URL
          title: "2SoundSculptures",
          tag: ["All", "Arts"],
          endTime: "04:40:56",
          currentBid: "0.005 ETH",
          description: "Description for story 1...",
        },
        {
          id: 1,
          image: "/Images/Announce.png", // Example image URL
          title: "3SoundSculptures",
          tag: ["All", "Fashion"],
          endTime: "04:40:56",
          currentBid: "0.005 ETH",
          description: "Description for story 1...",
        },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = Nft.filter((nft) =>
    nft.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="container mx-auto px-[50px] bg-black">
      <div className="text-white mx-[50px] bg-black flex flex-row justify-start items-center gap-2 sm:px-[100px] py-6">
        < NftTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        < NftTag 
          onClick={handleTagChange}
          name="Arts"
          isSelected={tag === "Arts"}
        />
        < NftTag 
          onClick={handleTagChange}
          name="Fashion"
          isSelected={tag === "Fashion"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((nft, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            
            <CardProps
              key={nft.id}
              image={nft.image}
              title={nft.title}
              description={nft.description}
              currentBid={nft.currentBid}
              endTime={nft.endTime}
              href={`/Details/${nft.id}`}
            />
         
            
          </motion.li>
        ))}
      </ul>

    </section>
  );
};

export default ProjectsSection;