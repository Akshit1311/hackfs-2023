"use client";
import {
  RuntimeConnector,
  Extension,
  WALLET,
  RESOURCE,
} from "@dataverse/runtime-connector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page: React.FC = () => {
  const runtimeConnector = new RuntimeConnector(Extension);
  const [wallet, setWallet] = useState<WALLET>();
  const router = useRouter();
  //   async function connect() {
  //     if (typeof window === "undefined") return;

  //     try {
  //       console.log("connect", { window });

  //       const res = await runtimeConnector.connectWallet();
  //       console.log({ res });
  //       setWallet(res.wallet);
  //       // router.push("/");
  //       return res.address;
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   }

  const connectWallet = async () => {
    if (typeof window === "undefined") return;

    try {
      const res = await runtimeConnector.connectWallet();
      setWallet(res.wallet);

      return res.address;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="text-white">
        hi
      </button>
    </div>
  );
};

export default page;
