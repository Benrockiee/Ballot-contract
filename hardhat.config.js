require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")

const PRIVATE_KEY = process.env.PRIVATE_KEY
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetworks: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localHost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },

  solidity: "0.8.7",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
  },
}
