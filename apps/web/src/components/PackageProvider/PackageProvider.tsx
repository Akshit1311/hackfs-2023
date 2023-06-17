"use client";

import React from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

interface Props {
  children: React.ReactNode;
}

// rainbow

const PackageProvider: React.FC<Props> = ({ children }) => {
  const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  });
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default PackageProvider;
