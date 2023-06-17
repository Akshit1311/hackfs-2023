import { ethers } from "hardhat";

async function main() {
  const governor = await ethers.getContractAt(
    "GovernorContract",
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
  );
  const box = await ethers.getContractAt(
    "Box",
    "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"
  );

  const encodedFunctionCall = box.interface.encodeFunctionData("store", [42]);

  console.log(encodedFunctionCall);

  const proposeTx = await governor.propose(
    [box.target],
    [0],
    [encodedFunctionCall],
    "Proposal Description"
  );
  proposeTx.wait(1);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
