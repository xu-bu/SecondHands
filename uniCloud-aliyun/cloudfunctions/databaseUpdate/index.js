'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db=uniCloud.database()
	let {
		table="",
		data={},
	}=event
	try{
		let res=await db.collection(table).add(data)
		return true
	}catch(e){
		console.error(e)
		return false
	}
};
