import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef, useCallback } from "react";
import { NftContext } from "@/Context";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import WeaveDB from "weavedb-sdk";
import Image from "next/image";

export default function BidDetailsModal({ isOpen, onClose }) {
  

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
                    Place Bid Illustra
                  </Dialog.Title>
                  <div className="mt-2 space-y-4">
                    <button
                      autoFocus
                      type="button"
                      className="w-[300px] font-bold text-center text-white  p-2 rounded-md bg-gradient-to-r from-[#fe7d46] to-[#faad89] border border-white flex"
                    > 
                    Bid Now
                    
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
