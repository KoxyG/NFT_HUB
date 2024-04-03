import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "@/elements/button";
import ConnectModal from "./connectModal";
import { NftContext } from "@/Context";
import { useContext } from "react";

const Navbar = () => {
  const { connectModal, user, setAccount, setUser, setConnectModal, walletConnected, setWalletConnected } = useContext(NftContext);

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setConnectModal(true);
  }

  function closeModal() {
    setConnectModal(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const disconnectWallet = useCallback(() => {
    setWalletConnected(false);
    setUser(null);
  }, [setWalletConnected]);

  return (
    <header className="bg-black sticky top-0 z-40">
      <div className="bg-black">
        <nav className="px-[50px] container mx-auto flex items-center justify-between py-4 ">
          <div className="flex items-center cursor-pointer">
            <Image
              width={140}
              height={140}
              className=""
              src="/Images/logo.png"
              alt="logo"
            />
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
            {/* <Link href="/Create">
              <button variant="secondary">Create</button>
            </Link> */}
          </div>

          {!walletConnected ? (
              <div className="hidden md:flex items-center md:pb-4">
              <button
              autoFocus
                onClick={openModal}
                className="px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]"
              >
                Connect Wallet
              </button>
              {connectModal && (
                <ConnectModal isOpen={connectModal} onClose={closeModal} />
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center md:pb-4">
            <button
              onClick={disconnectWallet}
              className="px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]"
            >
              Disconnect
            </button>
            {connectModal && (
              <ConnectModal isOpen={connectModal} onClose={closeModal} />
            )}
          </div>
          )}
        

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
            <Button
              className="text-white absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <FaTimes className="text-2xl" />
            </Button>

            {/* <div className="top-0 relative z-50">
              <Button
                autoFocus
                onClick={openModal}
                className="cursor-pointer text-white px-3 py-3 rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]"
              >
                Connect Wallet
              </Button>
              <ConnectModal isOpen={connectModal} onClose={closeModal} />
            </div> */}

            <div className="grid pt-6 gap-2 text-white text-center">
              <Link href="/">
                <button variant="secondary">Home</button>
              </Link>
              <Link href="/Explore">
                <button variant="secondary">Explore</button>
              </Link>
              <Link href="/AboutUs">
                <button variant="secondary">About us</button>
              </Link>
              {/* <Link href="/Create">
                <button variant="secondary">Create</button>
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
