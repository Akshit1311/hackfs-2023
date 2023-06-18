import { createPublicClient, createWalletClient, custom, http } from "viem";
import { filecoinCalibration, hardhat, localhost } from "viem/chains";

const viemClient = createPublicClient({
  chain: filecoinCalibration,
  transport: http(),
});
// const viemClient = createPublicClient({
//   chain: filecoinCalibration,
//   transport: http(),
// });

export const walletClient = createWalletClient({
  chain: filecoinCalibration,
  transport: custom((window as any).ethereum),
});

export default viemClient;
