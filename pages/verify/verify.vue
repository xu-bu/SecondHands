<template>
	<view class="register_page">
		<view class="input_box">
			<input type="text" v-model="email" placeholder="请输入您的学校邮箱" placeholder-class="grey" />
		</view>
		<view class="input_box">
			<input type="text" v-model="username" placeholder="请输入您的用户名" placeholder-class="grey" />
		</view>
		<view class="input_box">
			<input type="password" v-model="password" placeholder="请输入您的密码" placeholder-class="grey" />
		</view>
		<view class="input_box">
			<input type="password" v-model="confirmedPwd" placeholder="请确认您的密码" placeholder-class="grey" />
		</view>
		<view class="input_box">
			<input type="number" v-model="inputCode" placeholder="请输入您的验证码" placeholder-class="grey" maxlength="6" />
			<van-button type="info" @click="onSendCode" :disabled="disable">{{ codeText }}</van-button>
		</view>
		<div class="container">
			<view class="verify-button">
				<van-button type="info" @click="onVerify">验证</van-button>
			</view>
		</div>
	</view>

</template>

<script>
	var clear;
	const crypto = require('crypto');
	export default {
		data() {
			return {
				code: '',
				inputCode: "",
				codeText: "获取验证码",
				email: "",
				//默认“获取验证码”按钮是可以点击的
				disable: false,
				username: "",
				password: "",
				confirmedPwd: "",
				//是否已经点击获取验证码
				isGet: false
			}
		},
		methods: {
			isUsernameValid(username) {
				const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
				return usernameRegex.test(username);
			},

			isPasswordValid(password) {
				const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+-=,./<>?;:'"[{\]}\\|]{8,}$/;
				return passwordRegex.test(password);
			},

			//验证码按钮文字状态
			getCodeState() {
				this.isGet = true
				clear && clearInterval(clear);
				const _this = this;
				this.disable = true;
				this.codeText = '60S';
				var s = 60;
				clear = setInterval(() => {
					s--;
					_this.codeText = s + 'S';
					if (s <= 0) {
						clearInterval(clear);
						_this.codeText = '获取验证码';
						_this.disable = false;
					}
				}, 1000);
			},
			// 发送验证码
			onSendCode() {
				if (this.disable) {
					return
				}
				if (!this.email) {
					uni.showToast({
						title: '请输入学校邮箱',
						icon: 'none'
					});
					return;
				}
				if (!this.email.endsWith("@leeds.ac.uk")) {
					uni.showToast({
						title: '请确认邮箱以@leeds.ac.uk结尾',
						icon: 'none'
					});
					return;
				}
				this.disable = true;
				this.getCodeState();
				uniCloud.callFunction({
					name: "send-mail",
					data: {
						email: this.email,
						type: "bind"
					},
					success: res => {
						this.code = res.result.captcha
						uni.showModal({
							title: "提示",
							content: "邮件发送成功，请检查你的垃圾邮箱",
							showCancel: false
						});
					},
					fail: err => {
						console.error("err", err);
						uni.showModal({
							title: "提示",
							content: "发送邮件失败，请刷新再试",
							showCancel: false
						});
					}
				});
			},
			md5Hash(text) {
				const hash = crypto.createHash('md5').update(text).digest('hex');
				return hash;
			},
			isInputValid() {
				if (!this.isUsernameValid(this.username)) {
					uni.showToast({
						title: "用户名不符合规范，必须为4-16位含大小写字母或数字的字符串",
						icon: "none"
					})
					return false
				}
				if (!this.isPasswordValid(this.password)) {
					uni.showToast({
						title: "密码不符合规范，必须为8位以上含至少一个大写字母，小写字母和数字的字符串",
						icon: "none"
					})
					return false
				}

				if (!this.password == this.confirmedPwd) {
					uni.showToast({
						title: "密码不一致",
						icon: "none"
					})
					return false
				}
				if (this.code != this.inputCode) {
					uni.showToast({
						title: "验证码错误",
						icon: "none"
					});
					this.inputCode = ""
					return false
				}
				if (!this.isGet) {
					uni.showToast({
						title: "请获取验证码",
						icon: "none"
					});
					return false
				}
				return true
			},
			async isUsernameDuplicate() {
				// -1代表错误，0代表重复，1代表合法
				let res = await uniCloud.callFunction({
					name: "searchField",
					data: {
						"table": "uni-id-users",
						"keyWord": this.username,
						"field": "username"
					}
				})
				if (res == "error") {
					return -1
				} else if (res.affectedDocs == 0) {
					return 1
				} else {
					return 0
				}
			},
			async onVerify() {
				if (!this.isInputValid()) {
					return
				}
				uni.showLoading({
					title: '注册中'
				})
				let isUsernameDuplicate = await this.isUsernameDuplicate()
				console.log(isUsernameDuplicate)
				if (isUsernameDuplicate == -1) {
					uni.hideLoading()
					uni.showToast({
						title: "注册出错，请重试",
						icon:"none"
					})
					return
				} else if (isUsernameDuplicate == 0) {
					uni.hideLoading()
					uni.showToast({
						title: "用户名已被注册，请更换",
						icon:"none"
					})
					return
				} else {
					let res = await uniCloud.callFunction({
						name: "databaseUpdate",
						data: {
							"table": "uni-id-users",
							data: {
								"username": this.username,
								"password": this.md5Hash(this.password),
							}
						}
					})
					if (res) {
						uni.hideLoading()
						uni.setStorage({
							key: 'loginStatus',
							data: true,
							success: function() {
								console.log('set local storage successully');
							}
						});
						uni.showModal({
							title: "提示",
							content: "注册成功！",
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									uni.switchTab({
										url: "/pages/tabbar/index/index",
									})
								}
							},
						});
					} else {
						uni.hideLoading()
						uni.showToast({
							title: "注册失败，请稍后再试"
						})
						return
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input_box {
		display: flex;
		align-items: center;
		height: 104rpx !important;
		background-color: #f8f9fb;
		border-radius: 8rpx;
		border: solid 2rpx #efeef4;
		padding: 0rpx 40rpx;
		margin-top: 20rpx;

		image {
			width: 36rpx;
			height: 24rpx;
		}

		input {
			flex: 1;
			font-size: 28rpx;
			color: #333;
			height: 60rpx;
		}

		.input_item {
			font-size: 28rpx;
			border: 0px;
			flex: 1;
			background-color: #f8f9fb;
			height: 88rpx;
			width: 100%;
			outline: none;
			//margin-left: 32rpx;
		}

		.grey {
			color: #999999;
		}
	}


	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* 设置容器为 Flex 布局，并水平和垂直居中 */
		margin-top: 20px;
		/* 设置容器和上方的距离为 20 像素，根据需求自行调整 */
	}

	.verify-button {
		display: block;
		/* 将 view 元素设置为块级元素 */
	}
</style>