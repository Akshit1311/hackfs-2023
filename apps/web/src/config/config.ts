import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "1c4020bb3f1c1e1ca4a45bf2f1905514",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
