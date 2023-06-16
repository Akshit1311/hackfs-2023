"use client";
import React from "react";

// Connect Wallet
import { ConnectButton } from "@rainbow-me/rainbowkit";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center w-full h-screen font-mabry">
      <h1 className="text-[23rem]">GumroaD</h1>
      <ConnectButton />
      <div className="mt-4 flex items-center w-full h-full">
        <div className="border w-full bg-pink-400 flex items-center justify-center h-full text-6xl  text-black">
          Go from zero to $
        </div>
        <div className="border w-full bg-yellow-400 flex items-center justify-center h-full text-6xl text-black">
          Get Start Right now!!
        </div>
      </div>
    </div>
  );
};
export default page;
