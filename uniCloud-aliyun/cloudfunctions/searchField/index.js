'use strict';
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
		return res.affectedDocs
	}catch(e){
		console.error(e)
		return "error"
	}
};
