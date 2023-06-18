import { encodeFunctionData, getContract } from "viem";

import viemClient, { walletClient } from "./viemConfig";
import governorAbi from "./abi/governorAbi";
import boxAbi from "./abi/boxAbi";
import { hardhat } from "viem/chains";

export const propose = async () => {
  try {
    await walletClient.addChain({ chain: hardhat });

    await walletClient.switchChain({ id: hardhat.id });

    const [account] = await walletClient.getAddresses();
    if (!account) return console.log("no account found");

    const governorContract = getContract({
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: governorAbi,
      walletClient,
      publicClient: viemClient,
    });

    const boxContractAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";

    const encodedFunctionCall = encodeFunctionData({
      abi: boxAbi,
      functionName: "store",
      args: [BigInt(42)],
    });

    console.log({ encodedFunctionCall });

    const hash = await governorContract.write.propose(
      [
        [boxContractAddress],
        [BigInt(0)],
        [encodedFunctionCall],
        "Proposal Description #10000000000",
      ],
      {
        chain: hardhat,
        account,
      }
    );

    const receipt = await viemClient.waitForTransactionReceipt({ hash });

    const proposalQueuedUnwatch = governorContract.watchEvent.ProposalQueued({
      pollingInterval: 100,
      onLogs: (logs) => {
        console.log("ProposalQueued", { logs });
        unwatch();
      },
      onError(error) {
        console.log({ error });
      },
    });
    const unwatch = governorContract.watchEvent.ProposalCreated({
      pollingInterval: 100,
      onLogs: (logs) => {
        console.log({ logs });
        unwatch();
      },
      onError(error) {
        console.log({ error });
      },
    });

    console.log({ receipt });
  } catch (error) {
    console.log({ error });
  }
};
