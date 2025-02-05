require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/6a9c093bf1fa4c989425eb0276560a1a",
      accounts:["8a618ed7f0fbcafcb8c745469507c8522994ce369dbf5b57f87bab5237902344"],
    },
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/yioJ74QCa2Dl13upBt8C9gLUc_dFdRn5",
      accounts:["8a618ed7f0fbcafcb8c745469507c8522994ce369dbf5b57f87bab5237902344"],
    }
  }
};
