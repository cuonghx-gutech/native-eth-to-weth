require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.5",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  networks: {
    gu_chain: {
      url: `https://b32b3f3b-c059-47f5-b171-1a3c952f61b7.4z9mdn90pg6rby7s7iqv9kjgg.ep.bccloud.net:8545/`,
      accounts: [`81faf93fa389a6c560548be83d61367a01bd4c6ad8d2aaac7a505eae21468e3f`],
      chainId: 99999
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/972b939390fe4a298f2afa9907fdb06a",
      accounts: ["81faf93fa389a6c560548be83d61367a01bd4c6ad8d2aaac7a505eae21468e3f"],
      chainId: 3
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
