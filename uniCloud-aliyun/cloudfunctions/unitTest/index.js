'use strict';

exports.main = async () => {
	const db = uniCloud.database();
	let res=await db.collection('opendb-mall-goods').count();
	
	if (res.total!=0){
		console.log("database connection pass");
	}else{
		console.error("database connection failed");
	}

	// 客户端调用云函数并传递参数
	const result=await uniCloud.callFunction({
	    name: 'invokedTest',
	    data: {a:1,b:2}
	  })
	console.log(result)
};
