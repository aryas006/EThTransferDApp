const hre = require("hardhat");

async function main() {
  // * hardhat gets contract from artifacts folder that is the reason it knows contract with name and we can get this way.
  const Transactions = await ethers.getContractFactory("Transactions");
  console.log("Deploying contract...");
  const transactions = await Transactions.deploy();
  console.log("Waiting for contract to deployed...");
  console.log("Contract address");
  console.log(transactions.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
