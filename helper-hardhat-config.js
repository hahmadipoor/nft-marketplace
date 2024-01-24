const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        subscriptionId: "588",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        keepersUpdateInterval: "30",
        callbackGasLimit: "500000", // 500,000 gas]
        mintFee: "10000000000000000"
    },
    11155111: {
        name: "sepolia",
        subscriptionId: "8336",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        keepersUpdateInterval: "30",
        callbackGasLimit: "500000", // 500,000 gas
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        mintFee: "10000000000000000"
    },
    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },
}

const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"
const developmentChains = ["hardhat", "localhost",]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "../frontend/constants/contractAddresses.json"
const frontEndAbiFile = "../frontend/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    frontEndContractsFile,
    frontEndAbiFile,
    DECIMALS,
    INITIAL_PRICE
}
