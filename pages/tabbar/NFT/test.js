const { ethers, formatEther } = require("ethers");

const main = async () => {
	const provider = new ethers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/yioJ74QCa2Dl13upBt8C9gLUc_dFdRn5`)
	const address = '0x52906abb6B9d358eEF7D903cf1ecb521643297f4'
	const balance = await provider.getBalance(address)
	console.log(`\nETH Balance of ${address} --> ${formatEther(balance)} ETH\n`)
}

main()
