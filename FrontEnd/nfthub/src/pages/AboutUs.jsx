import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-[50px] bg-black">
      <h2 className="text-white  pt-[100px] text-center py-8 font-bold text-4xl">About us</h2>
      <div className="text-white pb-[100px] gap-8 sm:flex">
        <h3 className="text-2xl font-bold sm:w-4/5">What is NftHub?</h3>
        <div className="leading-6 font-normal">
          <p className="pb-6">
            At NftHub, we are committed to creating a decentralized and
            inclusive ecosystem where artists can directly mint, sell, and trade
            their NFTs without the need for intermediaries. We understand the
            challenges that artists face in the traditional art market,
            including limited control over their creations and the reliance on
            third-party platforms. Therefore, our platform aims to provide a
            user-friendly interface that gives artists full ownership and
            autonomy over their digital artwork.
          </p>

          <p className="pb-6">
            We value transparency, fairness, and community engagement. We
            prioritize the interests and rights of artists, ensuring transparent
            information about fees, royalties, and ownership rights. By
            fostering a vibrant community, we encourage collaboration,
            networking, and the growth of artists within the NFT space.
          </p>

          <p className="pb-6">
            Through our platform, we strive to redefine the concept of ownership
            in the digital era, enabling artists to unleash their creativity,
            experiment with new digital frontiers, and establish direct
            connections with their audience. We are dedicated to providing a
            secure, user-friendly, and artist-centric platform that empowers
            creators and paves the way for the future of digital art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
