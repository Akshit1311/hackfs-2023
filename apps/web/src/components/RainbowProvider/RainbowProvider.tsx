"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

// rainbow
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, wagmiConfig } from "../../config/config";

const RainbowProvider: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-white">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default RainbowProvider;
