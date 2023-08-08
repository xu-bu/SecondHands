'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	let {
		table = "",
		doc="",
			data = {},
	} = event
	try {
		let res = await db.collection(table).doc(doc).update(data)
		return res
	} catch (e) {
		console.error(e)
		return e
	}
};