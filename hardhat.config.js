require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ALCHEMY_KEY_TEST = process.env.ALCHEMY_KEY_TEST;
const ALCHEMY_KEY_PROD = process.env.ALCHEMY_KEY_PROD;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    Mumbai: {
      url: ALCHEMY_KEY_TEST,
      accounts: [WALLET_PRIVATE_KEY]
    },
    Main: {
      url: ALCHEMY_KEY_PROD,
      accounts: [WALLET_PRIVATE_KEY]
    },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: POLYGONSCAN_KEY
  }
};
