import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import React from "react";

function NftDropPage() {
  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt="Punk"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-80"
            />
          </div>

          <div className="p-5 text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">NFT Authentication with MetaMask Project</h1>
            <h2 className="text-xl text-gray-300">TailWind For Styling</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2 lg:col-span-6">
        <div className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            A new <span className="font-extrabold underline decoration-pink-400/50">
              Nft
            </span>{" "}
            market place
          </h1>
          <button
            className="rounded bg-rose-400 text-white px-4 py-2 text-extrasmall font-bold
  lg:px-5 lg:py-3 lg:text-base"
         onClick={() =>address?disconnect():connectWithMetaMask()} >
          {address?'Sign Out':'Sign In'}
          </button>
        </div>
        <hr className="bordered my-2" />
        {address && (
          <p className="text-center text-sm text-rose-500">You are connected with {address.substring(0,5)}.....{address.substring(address.length-5)}</p>
        )}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl">The NFT Collection</h1>
          <p className="pt-2 text-xl text-green-500">13/14 NFT Claimed</p>
        </div>
        <div>
          <button className="h-16 bg-red-600 w-full text-white font-bold rounded-full">Mint NFT (0.01 ETH)</button>
        </div>
      </div>
    </div>
  );
}

export default NftDropPage;
