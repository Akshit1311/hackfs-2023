"use client";

import React from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { config } from "../../config/config";

interface Props {
  children: React.ReactNode;
}

const PackageProvider: React.FC<Props> = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default PackageProvider;
