const { network, ethers } = require("hardhat")
const {networkConfig, developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS,} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("----------------------------------------------------")
    const arguments = []
    const  basicNft = await deploy("BasicNft", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(basicNft.address, arguments)
    }

}

module.exports.tags = ["all", "BasicNft"]