import { ethers } from "hardhat";
import {
  ADDRESS_ZERO,
  QUORUM_PERCENTAGE,
  VOTING_DELAY,
  VOTING_PERIOD,
} from "../constants";

const delegate = async (
  governanceTokenAddress: any,
  delegatedAccount: string
) => {
  const govToken = await ethers.getContractAt(
    "GovToken",
    governanceTokenAddress
  );

  const tx = await govToken.delegate(delegatedAccount);

  tx.wait();

  console.log(`Delegated ${delegatedAccount} to ${governanceTokenAddress}`);
  console.log(
    `Checkpoints:  ${await govToken.numCheckpoints(delegatedAccount)}`
  );
};

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Token
  const token = await ethers.deployContract("GovToken", []);
  await token.waitForDeployment();
  console.log(`Token deployed to ${token.target}`);

  delegate(token.target, deployer.address);

  // Time Lock
  const MIN_DELAY = 3600; // 1 hour

  const timeLock = await ethers.deployContract("TimeLock", [
    MIN_DELAY,
    [],
    [],
    deployer.address,
  ]);
  await timeLock.waitForDeployment();
  console.log(`TimeLock deployed to ${timeLock.target}`);

  // Governer Contract

  const governorContract = await ethers.deployContract("GovernorContract", [
    token.target,
    timeLock.target,
    VOTING_DELAY,
    VOTING_PERIOD,
    QUORUM_PERCENTAGE,
  ]);

  await governorContract.waitForDeployment();

  console.log(`Governor deployed to ${governorContract.target}`);

  // Setting Roles

  console.log("Setting roles...");
  const proposerRole = await timeLock.PROPOSER_ROLE();
  const executorRole = await timeLock.EXECUTOR_ROLE();
  const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();

  const proposerTx = await timeLock.grantRole(
    proposerRole,
    governorContract.target
  );
  await proposerTx.wait(1);

  const executorTx = await timeLock.grantRole(
    executorRole,
    ADDRESS_ZERO // Anyone can execute
  );
  await executorTx.wait(1);

  const revokeTx = await timeLock.revokeRole(adminRole, deployer.address);
  revokeTx.wait(1);

  // Box Contract
  const box = await ethers.deployContract("Box", []);
  const transferOwnerTx = await box.transferOwnership(timeLock.target);
  transferOwnerTx.wait(1);

  console.log(`Box deployed to ${box.target} & Roles have been setup`);

  // DealClient
  const dealClient = await ethers.deployContract("DealClient", []);

  await dealClient.waitForDeployment();

  console.log(`DealClient deployed to ${dealClient.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
