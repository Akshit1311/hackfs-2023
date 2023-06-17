import { ethers } from "hardhat";

const delegate = async (
  governanceTokenAddress: string,
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
  const VOTING_PERIOD = 5; // 5 blocks
  const VOTING_DELAY = 1; // 1 block
  const QUORUM_PERCENTAGE = 4; // 4%

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
  const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

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
