"use client";
import React from "react";

// Wagmi
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

// Connect Wallet

import { useRouter } from "next/navigation";
import Button from "../components/common/Button";
import { sliceAddress } from "../utils/helpers";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const { push } = useRouter();

  const { address, isConnected } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
  });

  const { data: ensName } = useEnsName({ address });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="text-white flex flex-col items-center justify-center w-full h-screen font-mabry">
      <h1 className="md:text-[17rem]  2xl:text-[22rem]">FILroaD</h1>

      {isConnected ? (
        <div className="text-white text-2xl font-mabry-normal flex items-center gap-2 flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Button
              type="button"
              size="xl"
              onClick={() => push("/dashboard")}
              className=" text-black  font-semibold bg-pink-400 hover:bg-pink-500"
            >
              Dashboard
            </Button>
            <Button
              type="button"
              size="xl"
              onClick={() => push("/discover")}
              className=" text-black border-black font-semibold hover:bg-yellow-500 bg-yellow-400"
            >
              Discover
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-green-400 border border-green-400 rounded-lg p-4">
              Connected to : {ensName ?? sliceAddress(address)}d
            </div>
            <Button
              type="button"
              size="md"
              onClick={() => disconnect()}
              className="bg-transparent border black text-white hover:bg-white hover:text-black"
            >
              Disconnect Wallet
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          size="md"
          onClick={() => connect()}
          className="bg-transparent border black text-white hover:bg-white hover:text-black"
        >
          Connect Wallet
        </Button>
      )}

      <div className="mt-4 flex items-center w-full h-full">
        <div className="border w-full bg-pink-400 flex items-center justify-center h-full text-6xl  text-black">
          Go from zero to $
        </div>
        <div className="border w-full bg-yellow-400 flex items-center justify-center h-full text-6xl text-black">
          Data DAO Aggregator
        </div>
      </div>
    </div>
  );
};
export default page;
