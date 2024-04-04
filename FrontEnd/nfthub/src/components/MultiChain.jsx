import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaCheck } from "react-icons/fa6";
import { RiExpandUpDownLine } from "react-icons/ri";

const chains = [
  { name: 'ARBSEPOLIA', img: "/Images/Arbitrum.png", chainId: 421614 },
  { name: 'Ethereum', img: "/Images/Ethereum.png", chainId: 1 },
  { name: 'Polygon', img: "/Images/Polygon.png", chainId: 137 },
  { name: 'Avalanche', img: "/Images/Avalanche.png", chainId: 43114 },
  { name: 'Solana', img: "/Images/solana.png", chainId: 101 },
  
]

export default function MultiChain() {
  const [selected, setSelected] = useState(chains[0])

  const switchChain = async (chainId) => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (error) {
      console.error('Error switching chain:', error);
    }
  };

  return (
    <div className="rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89] w-35">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div className='flex'>
          <img className="w-6 h-6 mr-2" src={selected.img} alt={selected.name} />
            <span className="block text-gray-700 font-bold truncate">{selected.name}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <RiExpandUpDownLine
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {chains.map((chain, chainIdx) => (
                <Listbox.Option
                  key={chainIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none flex items-center py-2 pl-4 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={chain}
                  onClick={() => switchChain(chain.chainId)}
                >
                  {({ selected }) => (
                    <>
                      <img className="w-6 h-6 mr-2" src={chain.img} alt={chain.name} />
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {chain.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FaCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
