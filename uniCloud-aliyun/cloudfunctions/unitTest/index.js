'use strict';

exports.main = async () => {
	// 1. 测试数据库连接
	const db = uniCloud.database();
	let res = await db.collection('opendb-mall-goods').count();

	if (res.total != 0) {
		console.log("database connection pass");
	} else {
		console.error("database connection failed");
	}


	// 2.测试发邮件功能，有时会因为网络不稳定而失败
	// try{
	// 	res= await uniCloud.callFunction({
	// 		name: "send-mail",
	// 		data: {
	// 			"email": "sc22x2w@leeds.ac.uk",
	// 			"type": "bind"
	// 		},
	// 		fail: err => {
	// 			console.error("err", err);
	// 		}
	// 	});
	// }catch(e){
	// 	console.log("send mail test failed, error:",e)
	// 	return
	// }
	// console.log("send mail test pass")

	// 3.测试数据库添加数据
	res = await uniCloud.callFunction({
		name: "databaseUpdate",
		data: {
			"table": "feedback",
			"data": {
				"content": "test feedback"
			}
		}
	})
	if (!res) {
		console.log("updating database test failed")
	} else {
		console.log("updating database test pass")
	}

	// 4.测试searchField
	res = await uniCloud.callFunction({
		name: "searchField",
		data: {
			"table": "uni-id-users",
			"keyWord": "xubu",
			"field": "username"
		}
	})
	if (res.result == 0) {
		console.log("searchField test failed")
	} else {
		console.log("searchField test pass")
	}

	// 5.测试readField
	res = await uniCloud.callFunction({
		name: "readField",
		data: {
			"table": "uni-id-users",
			"value": "xubu",
			"field": "username"
		}
	})
	if (res.affectedDocs == 0) {
		console.log("readField test failed")
	} else {
		console.log("readField test pass")
	}
};