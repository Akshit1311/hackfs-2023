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

  const { address, isConnected } = useAccount();

  const { data: ensName } = useEnsName({ address });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="text-white flex flex-col items-center justify-center w-full h-screen font-mabry">
      <h1 className="md:text-[17rem]  2xl:text-[25rem]">GumroaD</h1>

      {isConnected ? (
        <div className="text-white text-2xl font-mabry-normal flex items-center gap-2">
          <div className="border rounded-lg p-4">
            Connected to : {ensName ?? sliceAddress(address)}
          </div>
          <Button
            type="button"
            size="md"
            onClick={() => disconnect()}
            className="bg-white border black text-black"
          >
            Disconnect Wallet
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          size="md"
          onClick={() => {
            connect();
            push("/discover");
          }}
          className="bg-white border black text-black"
        >
          Connect Wallet
        </Button>
      )}

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
