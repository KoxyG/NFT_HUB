import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef, useCallback } from "react";
import { NftContext } from "@/Context";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import WeaveDB from "weavedb-sdk";
import Image from "next/image";

export default function ConnectModal({ isOpen, onClose }) {
  const CHAIN_ID = 421614;
  const NETWORK_NAME = "ARBSEPOLIA";
  const contractTxId = "Sl1ParTvpAcwEk2nEfjudCk7QnJE1M7_3B_eMMnDwYI";


  // router
  const router = useRouter()

  //contect
  const {
    walletConnected,
    setWalletConnected,
    account,
    db,
    setDb,
    setSigner,
    user,
    setUser,
    setAccount,
    provider,
    setProvider,
  } = useContext(NftContext);




  useEffect(() => {
    setupWeaveDB();
  }, []);

  const setupWeaveDB = async () => {
    try {
      const _db = new WeaveDB({
        contractTxId: contractTxId,
      });
      const __db = await _db.init();
      console.log("__db", __db);
      setDb(_db);
    } catch (e) {
      console.error("setupWeaveDB", e);
    }
  };

  

  const connectWallet = async (e, wallet) => {
    e.preventDefault();

    if (wallet === "metamask") {
      try {
        if (typeof window.ethereum == "undefined") {
          alert("pls install metamask");
          return;
        }

        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        await provider.send("eth_requestAccounts", []);
        const { chainId } = await provider.getNetwork();

        if (chainId !== CHAIN_ID) {
          alert(`Please switch to the ${NETWORK_NAME} network!`);
          throw new Error(`Please switch to the ${NETWORK_NAME} network`);
        }
        setProvider(provider);
       

        // const account = await signer.getAddress();
        // setAccount(account);
        // console.log("Signer address:", account);
        console.log("db", db);
        const { identity } = await db.createTempAddress();

        setUser({
          privateKey: identity.privateKey,
        });

        setWalletConnected(true);
        onClose(false);
        router.push("/Create");
      } catch (error) {
        console.error(error);
      }
    } else if (wallet === "coinbase") {
      return false;
    } else if (wallet === "trust") {
      return false;
    }
  };



  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/65" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="bg-[#ffe6da] max-w-lg p-6 rounded-lg shadow-lg">
                  {/* Content of your modal */}
                  <div className="mb-[0px] flex justify-end">
                    <button
                      type="button"
                      className="text-extrabold font-3xl inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      X
                    </button>
                  </div>
                  <Dialog.Title
                    as="h2"
                    className="text-lg text-center pb-6 font-medium leading-6 text-gray-900"
                  >
                    Sign In
                  </Dialog.Title>
                  <div className="mt-2 space-y-4">
                    <button
                      autoFocus
                      onClick={(e) => connectWallet(e, "metamask")}
                      className="gap-3 w-[300px] p-2 rounded-md bg-white border border-white flex"
                    >
                      <Image
                        width={30}
                        height={30}
                        alt="metamask"
                        src={"/Images/metamask.png"}
                      />
                      <span className="text-black">Metamask Wallet</span>
                    </button>

                    <button
                      onClick={(e) => connectWallet(e, "coinbase")}
                      className="gap-3 w-[300px] p-2 rounded-md bg-white border border-white flex"
                    >
                      <Image
                        width={30}
                        height={30}
                        alt="Trust wallet"
                        src={"/Images/trust.png"}
                      />
                      <span className="text-black">Trust Wallet</span>
                    </button>

                    <button
                      onClick={(e) => connectWallet(e, "trust")}
                      className="gap-3 w-[300px] p-2 rounded-md bg-white border border-white flex"
                    >
                      <Image
                        width={30}
                        height={30}
                        alt="coinbase"
                        src={"/Images/coinbase.png"}
                      />
                      <span className="text-black">Coinbase Wallet</span>
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
