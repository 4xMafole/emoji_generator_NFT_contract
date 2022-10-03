const hre = require("hardhat");

async function main() {
  const CONTRACT_NAME = process.env.CONTRACT_NAME;
  const CONTRACT_SYMBOL = process.env.CONTRACT_SYMBOL;
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(CONTRACT_NAME, CONTRACT_SYMBOL);
  await nft.deployed();
  let msg = CONTRACT_NAME + '(' + CONTRACT_SYMBOL + ') deployed to: ';
  console.log(msg, nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
