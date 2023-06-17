import { createConfig, mainnet } from "wagmi";
import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});
