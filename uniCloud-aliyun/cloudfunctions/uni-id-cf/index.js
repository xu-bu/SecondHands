'use strict';
exports.main = async (event, context) => {
    //event为客户端上传的参数
    console.log('event : ', event)
    return new Promise((resolve,reject) => {
        const db = uniCloud.database()
        db.collection("opendb-mall-goods").where(event).get()
        .then(res=>{
            resolve(res)
        })
        .catch(res => {
            reject(res)
        })
    })
    //返回数据给客户端
    return event
};