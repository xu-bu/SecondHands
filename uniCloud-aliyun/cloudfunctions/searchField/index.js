'use strict';
// 搜索指定表的指定字段，判断是否存在值为关键字的记录，如果存在，返回该记录，不存在返回0，出错返回"error"
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db=uniCloud.database()
	let {
		table="",
		keyWord="",
		field="",
	}=event
	try{
		let res = await db.collection(table).where({
			[field]: {
				$in: [keyWord],
			},
		}).get()
		if (res.affectedDocs==0){
			return 0
		}
		return res.data[0]
	}catch(e){
		console.error(e)
		return "error"
	}
};
