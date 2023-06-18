import { createPublicClient, createWalletClient, custom, http } from "viem";
import { hardhat, localhost } from "viem/chains";

const viemClient = createPublicClient({
  chain: hardhat,
  transport: http(),
});
// const viemClient = createPublicClient({
//   chain: filecoinCalibration,
//   transport: http(),
// });

export const walletClient = createWalletClient({
  chain: hardhat,
  transport: custom((window as any).ethereum),
});

export default viemClient;
