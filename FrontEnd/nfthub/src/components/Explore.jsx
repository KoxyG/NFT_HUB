"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import NftTag from "./nftTag";
import { motion, useInView } from "framer-motion";



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

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        < NftTag Tag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        < NftTag 
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        < NftTag 
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            {Nft.map((nft) => (
            <CardProps
              key={nft.id}
              image={nft.image}
              title={nft.title}
              description={nft.description}
              currentBid={nft.currentBid}
              endTime={nft.endTime}
            />
          ))}
            
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;