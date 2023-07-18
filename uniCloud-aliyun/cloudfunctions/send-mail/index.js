'use strict';

var vkmail;
try {
	vkmail = require('vk-mail');
} catch (err) {
	console.error("请先添加公共模块：vk-mail");
}

exports.main = async (event, context) => {
	let res = { code: 0, msg: "" };

	let {
		email="", // 前端接收邮箱
		type = "bind", // 前端接收验证码类型（如: login register bind unbind）
	} = event;
	
	//判断是否是利兹大学邮箱
	

	// 支持QQ 163 等主流邮箱

	let emailConfig = {
		"host": "smtp.gmail.com",
		"port": 465,
		"secure": true,
		"auth": {
			"user": "carrollwen98@gmail.com", // 发件人邮箱账号
			"pass": "nktudbewtmgkxaxp", // 账号授权码
		}
	};

	if (!email) return { code: -1, msg: "email不能为空" };
	if (!type) return { code: -1, msg: "type不能为空" };

	let code = Math.floor(Math.random() * 100000) + 100000;
	let subject = `验证码 ${code}`;
	let text = `验证码 ${code}，打死也不要告诉别人！`;

	// 创建邮箱服务实例
	let emailService = vkmail.createTransport({
		"host": emailConfig.host,
		"port": emailConfig.port,
		"secure": emailConfig.secure, // use SSL
		"auth": emailConfig.auth
	});

	try {
		// 发送邮件
		res.sendMailRes = await emailService.sendMail({
			"from": emailConfig.auth.user, // 邮件的发送者
			"to": "sc22x2w@leeds.ac.uk", // 邮件的接收者
			"cc": emailConfig.auth.user, // 由于邮件可能会被当成垃圾邮件，但只要把右键抄送给自己一份，就不会被当成垃圾邮件。
			"subject": subject, // 邮件的标题
			"text": text, // 邮件的内容
		});
		// 标记发送成功
		res.code = 0;
		res.msg = "发送成功";
		res.email=email;
		res.captcha=code;
		// 发送验证码成功后，通常需要设置验证码（写入数据库）
		// await uniID.setVerifyCode({ code, email, type });
	} catch (err) {
		res.code = -1;
		res.msg = "邮件发送失败";
		res.err = err;
	}
	console.log(res)
	console.log(res.email)
	console.log(res.captcha)
	return res;
};
