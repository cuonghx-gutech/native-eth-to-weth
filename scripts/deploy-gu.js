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
  const TokenProxy = await hre.ethers.getContractFactory("TokenProxy");
  const TokenProxyInstance = await TokenProxy.deploy(
    "0x2b51ff0889a3a47085bebCc61759923Ae8DE31f6",
    "Wrapped Ropsten Ether on GU",
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
