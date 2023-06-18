import { encodeFunctionData, getContract } from "viem";

import viemClient, { walletClient } from "./viemConfig";
import governorAbi from "./abi/governorAbi";
import boxAbi from "./abi/dataDaoAbi";
import { filecoinCalibration } from "viem/chains";

export const propose = async () => {
  try {
    await walletClient.addChain({ chain: filecoinCalibration });

    await walletClient.switchChain({ id: filecoinCalibration.id });

    const [account] = await walletClient.getAddresses();
    if (!account) return console.log("no account found");

    const governorContract = getContract({
      address: "0x02f006d1a8B6BB58E8545172A278d854fC6548e8",
      abi: governorAbi,
      walletClient,
      publicClient: viemClient,
    });

    const daoDealClientAddress = "0xd322D0278d12EcbACe3A522F383a9Fc589F044d7";

    const encodedFunctionCall = encodeFunctionData({
      abi: boxAbi,
      functionName: "makeDealProposal",
      args: [
        {
          piece_cid:
            "0x000181e20392202007554549d24e42b38403cbd9d30d30299010c75e8473c4a131c6fa5b04267220",
          piece_size: BigInt(2097152),
          verified_deal: false,
          label: "bafybeicxcclvlid2ocrksh52lub3ny6vd3muic5etjppd2r7g6pcfdxufm",
          start_epoch: BigInt(270000),
          end_epoch: BigInt(700000),
          storage_price_per_epoch: BigInt(0),
          provider_collateral: BigInt(0),
          client_collateral: BigInt(0),
          extra_params_version: BigInt(0),
          extra_params: {
            location_ref:
              "https://data-depot.lighthouse.storage/api/download/download_car?fileId=65e0bdfa-5fd3-4de7-ade1-045a8c7b353c.car",
            car_size: BigInt(1439273),
            skip_ipni_announce: true,
            remove_unsealed_copy: false,
          },
        },
      ],
    });

    console.log({ encodedFunctionCall });

    const hash = await governorContract.write.propose(
      [
        [daoDealClientAddress],
        [BigInt(0)],
        [encodedFunctionCall],
        "Proposal Description #10000000000",
      ],
      {
        chain: filecoinCalibration,
        account,
        // maxFeePerGas: BigInt(10000000000),
        // maxPriorityFeePerGas: BigInt(10000000000),
      }
    );

    const receipt = await viemClient.waitForTransactionReceipt({ hash });

    console.log({ receipt });
  } catch (error) {
    console.log({ error });
  }
};
