import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) throw new Error("PRIVATE_KEY not set");

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  // solidity: "0.8.18",
  defaultNetwork: "Calibration",
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
        details: { yul: false },
      },
    },
  },
  networks: {
    Mumbai: {
      chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/D9JE-aqOhZqjGR55_UujvNnXkfhH1Xgo",
      accounts: [PRIVATE_KEY],
    },
    Calibration: {
      chainId: 314159,
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    FilecoinMainnet: {
      chainId: 314,
      url: "https://api.node.glif.io",
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
