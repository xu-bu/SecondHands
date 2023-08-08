const fs = require("fs");
const path = require("path");
const { ethers } = require("hardhat");
import NFT_MARKET from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

async function main() {
  NFT_MARKET_ADDRESS="0x191123d894d3E8664aa2eE68465c9ED8cb17958e"
  const { signer } = useSigner();
  const nftMarket = new Contract(NFT_MARKET_ADDRESS, NFT_MARKET.abi, signer);
  // try{
  //   let res=await myContract.createNFT("ipfs://bafkreieb72h6p72yc2kwo6676jcfjldx2b7arghwwjvut3sfqzex6p6enq");
  // console.log("NFT created!")
  // }catch(e){
  //   console.error("create NFT failed,error: ",e)
  // }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
