import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';


export default function ConnectModal({isOpen, onClose }) {
 

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-[#ffe5da] flex h-[600px]  items-center justify-center">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order.
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="text-extrabold font-3xl inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
