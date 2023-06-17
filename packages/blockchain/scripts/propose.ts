import { ethers } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import { VOTING_DELAY } from "../constants";

async function main() {
  const [deployer] = await ethers.getSigners();

  const governor = await ethers.getContractAt(
    "GovernorContract",
    "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
  );
  const box = await ethers.getContractAt(
    "Box",
    "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"
  );

  const encodedFunctionCall = box.interface.encodeFunctionData("store", [42]);

  console.log(encodedFunctionCall);

  const proposeTx = await governor.propose(
    [box.target],
    [0],
    [encodedFunctionCall],
    "Proposal Description #5"
  );

  await moveBlocks(VOTING_DELAY + 1);

  const proposeReceipt = await proposeTx.wait(1);
  console.log({ proposeReceipt });

  // const proposalId = proposeReceipt.events[0].args.proposalId;
  // console.log(`Proposed with proposal ID:\n  ${proposalId}`);

  // const proposalState = await governor.state(proposalId);
  // const proposalSnapShot = await governor.proposalSnapshot(proposalId);
  // const proposalDeadline = await governor.proposalDeadline(proposalId);

  // // the Proposal State is an enum data type, defined in the IGovernor contract.
  // // 0:Pending, 1:Active, 2:Canceled, 3:Defeated, 4:Succeeded, 5:Queued, 6:Expired, 7:Executed
  // console.log(`Current Proposal State: ${proposalState}`);
  // // What block # the proposal was snapshot
  // console.log(`Current Proposal Snapshot: ${proposalSnapShot}`);
  // // The block number the proposal voting expires
  // console.log(`Current Proposal Deadline: ${proposalDeadline}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
