<template>
	<view class="login-container">
		<!-- Logo -->
		<image class="logo" src="/static/img/background.png"></image>
		<!-- Login Form -->
		<view class="input_box">
			<input type="text" v-model="username" placeholder="请输入您的用户名" placeholder-class="grey" />
		</view>
		<view class="input_box">
			<input type="password" v-model="password" placeholder="请输入您的密码" placeholder-class="grey" />
		</view>
		<!-- Login and Register Buttons -->
		<view class="button-container">
			<van-button type="primary" class="login-button" @click="login">登录</van-button>
			<van-button type="default" class="register-button" @click="register">注册</van-button>
		</view>
	</view>

</template>

<script>
	const crypto = require('crypto');
	export default {
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods: {
			md5Hash(text) {
				const hash = crypto.createHash('md5').update(text).digest('hex');
				return hash;
			},
			async login() {
				uni.showLoading({
					title: "登录中"
				})
				let res = await uniCloud.callFunction({
					name: "searchField",
					data: {
						"table": "uni-id-users",
						"keyWord": this.username,
						"field": "username"
					}
				})
				console.log(res)
				if (res == "error") {
					uni.hideLoading()
					uni.showToast({
						title: "登录出错，请重试",
						icon: "none"
					})
					this.username = ""
					this.password = ""
					return
				} else if (res.result.affectedDocs == 0) {
					uni.hideLoading()
					uni.showToast({
						title: "您输入的用户名不存在，请重试",
						icon: "none"
					})
					this.username = ""
					this.password = ""
					return
				} else {
					res = await uniCloud.callFunction({
						name: "readField",
						data: {
							"table": "uni-id-users",
							"value": this.username,
							"field": "username"
						}
					})
					console.log(res)
					let email = res.result.data[0].email
					let password = res.result.data[0].password
					let score=res.result.data[0].score
					let username=res.result.data[0].username
					res = await uniCloud.callFunction({
						name: "searchField",
						data: {
							"table": "user-black-list",
							"keyWord": email,
							"field": "email"
						}
					})
					if (res.result != 0) {
						uni.hideLoading()
						uni.showToast({
							title: "您的账户已被停用",
							icon: "none"
						})
						this.username = ""
						this.password = ""
						return
					}
					if (password != this.md5Hash(this.password)) {
						uni.hideLoading()
						uni.showToast({
							title: "密码错误",
							icon: "none"
						})
						this.username = ""
						this.password = ""
						return
					}
					uni.setStorageSync("loginStatus", true)
					uni.setStorageSync("username", this.username)
					const db = uniCloud.database()
					let res = await uniCloud.callFunction({
						name: "searchField",
						data: {
							table: "uni-id-users",
							keyWord: this.username,
							field: 'username'
						}
					})
					// 如果登录成功
					console.log("score is ", score)
					uni.setStorageSync("score", score)
					uni.setStorageSync("username", username)
					console.log("log in successfully,username: ", username)
					uni.hideLoading()
					uni.switchTab({
						url: "/pages/tabbar/profile/profile"
					})
				}
			},
			register() {
				uni.redirectTo({
					url: "/pages/verify/verify"
				})
			},
		},
	};
</script>

<style lang="scss">
	/* Add your custom styles here */
	.login-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f2f5f8;
	}

	.background-image {
		width: 100%;
		height: 300px;
		/* Adjust the height for your desired rectangular shape */
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.8;

	}

	.logo {
		height: 150px;
		margin-bottom: 50px;
	}

	.button-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 300px;
		margin-top: 20px;
		gap: 10px;
	}

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
</style>