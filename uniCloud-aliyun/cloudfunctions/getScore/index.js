'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	let {
		doc = "",
	} = event
	try {
		let res = await db.collection('uni-id-users').doc(doc).get()
		return res.data[0].score
	} catch (e) {
		console.error(e)
		return e
	}
	//返回数据给客户端
	return event
};