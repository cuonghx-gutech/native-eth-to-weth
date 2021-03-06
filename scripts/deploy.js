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
  
  const WETHOmnibridgeRouter = await hre.ethers.getContractFactory("WETHOmnibridgeRouter");
  const WETHOmnibridgeRouterInstance = await WETHOmnibridgeRouter.deploy("0xF1b5cc67c911F67cCC4021C22241AC7c21CB43C8", "0xc778417E063141139Fce010982780140Aa0cD5Ab", "0x48a1ebb823eba4940395ddca05b6705b3ec8755b");

  await WETHOmnibridgeRouterInstance.deployed();

  console.log("WETHOmnibridgeRouter deployed to:", WETHOmnibridgeRouterInstance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
