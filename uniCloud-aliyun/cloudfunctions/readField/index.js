'use strict';
// 返回某表中某字段为某值的整条记录
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db=uniCloud.database()
	let {
		table="",
		value="",
		field="",
	}=event
	try{
		let res = await db.collection(table).where({
		  [field]: value,
		}).get();
		return res
	}catch(e){
		console.error(e)
		return "error"
	}
};
