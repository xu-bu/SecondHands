import { getETHBalance } from './test.js';

const main = async () => {
	const address = '0x52906abb6B9d358eEF7D903cf1ecb521643297f4'
    const res=await getETHBalance(address)
	console.log(res)
}

main()