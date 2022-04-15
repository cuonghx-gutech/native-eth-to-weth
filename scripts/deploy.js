// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [ deployer ] = await hre.ethers.getSigners();
  // const WETHOmnibridgeRouter = await hre.ethers.getContractFactory("WETHOmnibridgeRouter");
  // const WETHOmnibridgeRouterInstance = await WETHOmnibridgeRouter.deploy("0xF1b5cc67c911F67cCC4021C22241AC7c21CB43C8", "0xE5e6a2991EbAeA4933E431Da0dE223DF7fa61906", deployer.address);

  // await WETHOmnibridgeRouterInstance.deployed();

  // console.log("WETHOmnibridgeRouter deployed to:", WETHOmnibridgeRouterInstance.address);
  
  const TokenProxy = await hre.ethers.getContractFactory("TokenProxy");
  const TokenProxyInstance = await TokenProxy.deploy(
    "0xBA7FD6ba9578303180e2C7Db6dDeA0139670cbc5",
    "Wrapped Ether on GU Sandbox",
    "WETH",
    18,
    3
  );

  await TokenProxyInstance.deployed();

  console.log("TokenProxy deployed to:", TokenProxyInstance.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
