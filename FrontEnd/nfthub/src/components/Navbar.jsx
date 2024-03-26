import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "@/elements/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="bg-black
         to-slate-950 sticky top-0 z-40"
    >
      <nav className="container mx-auto flex items-center justify-between py-4 ">
        <div className="flex items-center cursor-pointer">

          <Image width={140} height={140} className="" src="/Images/logo.png" alt="logo" />
        
        </div>

        <div className="hidden md:flex justify-between gap-6">
          <Link href="/">
            <button variant="secondary">Home</button>
          </Link>
          <Link href="/Explore">
            <button variant="secondary">Explore</button>
          </Link>
          <Link href="/AboutUs">
            <button variant="secondary">About us</button>
          </Link>
          <Link href="/Create">
            <button variant="secondary">Create</button>
          </Link>
          
        </div>

        <div className="hidden md:flex items-center md:pb-4">
          <button className="px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]">Connect Wallet</button>
        </div>

        <div className="md:hidden">
          <Button className="text-white" onClick={toggleMenu}>
            {isOpen ? "" : <FaBars className="text-2xl" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="bg-black fixed top-0  right-0 bottom-0 left-0 bg-dark
         flex flex-col items-center justify-center"
        >
          <Button className="text-white absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes className="text-2xl" />
          </Button>

          <Button className="cursor-pointer px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]">Connect Wallet</Button>
          

          
          <div className="grid pt-6 gap-2 text-center">

          <Link href="/">
            <button variant="secondary">Home</button>
          </Link>
          <Link href="/Explore">
            <button variant="secondary">Explore</button>
          </Link>
          <Link href="/AboutUs">
            <button variant="secondary">About us</button>
          </Link>
          <Link href="/Create">
            <button variant="secondary">Create</button>
          </Link>

          </div>


        </div>
      )}
    </header>
  );
};

export default Navbar;