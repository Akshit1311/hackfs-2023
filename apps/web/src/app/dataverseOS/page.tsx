"use client";
import {
  RuntimeConnector,
  Extension,
  WALLET,
  RESOURCE,
} from "@dataverse/runtime-connector";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Context } from "./context";

const page: React.FC = () => {
  const [wallet, setWallet] = useState<WALLET>();
  const router = useRouter();
  const app = "GUMROAD";
  const { output } = useContext(Context);

  const connect = async () => {
    // if (typeof window === "undefined") return;

    try {
      const runtimeConnector = new RuntimeConnector(Extension);

      console.log("connect", { window });

      const res = await runtimeConnector.connectWallet(WALLET.METAMASK);
      console.log({ res });
      setWallet(res.wallet);

      const ceramicObj = {
        app: output.createDapp.name,

        wallet: WALLET.METAMASK,
      };

      const pkh = await runtimeConnector.createCapability(ceramicObj);
      console.log({ pkh });
      // router.push("/");
      return { res, pkh };
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <button onClick={connect} className="text-white">
        hi
      </button>
    </div>
  );
};

export default page;
