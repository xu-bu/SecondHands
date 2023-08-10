<template>
	<view>
		<van-cell-group>
			<van-cell title="用户名" :value="username" />
			<van-cell title="NFT积分" :value="score"/>
			<van-cell title="点击绑定MetaMask" :value="maskedPrivateKey" @click="privateKeyPop" />
			<van-cell is-link title="反馈" link-type="navigateTo" url="/pages/feedback/feedback" />
			<van-button @click="logout" type="primary" block>退出登录</van-button>
		</van-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				maskedPrivateKey: "",
				score:0
			}
		},
		async onLoad() {
			
		},
		methods: {
			onShow() {
				if (!uni.getStorageSync('loginStatus')) {
					uni.redirectTo({
						url: "/pages/login/login"
					})
				} else {
					try {
						this.username = uni.getStorageSync("username")
						this.score = uni.getStorageSync("score")
						this.freshMaskedPrivateKey()
					} catch (e) {
						console.log(e)
					}
				}
			},
			freshMaskedPrivateKey() {
				const value = uni.getStorageSync('privateKey');
				if (!value) {
					return
				}
				// 生成与 privateKey 长度相同的 X 字符串
				this.maskedPrivateKey = 'X'.repeat(value.length);
			},
			logout(){
				try {
					uni.clearStorageSync()
					uni.setStorageSync('loginStatus', false);
				} catch (e) {
					console.log(e)
					uni.showModal({
						content:"出现错误"
					})
					return
				}
				uni.switchTab({
					url:"/pages/tabbar/index/index"
				})
			},
			async privateKeyPop() {
				const _this = this
				uni.showModal({
					title: '绑定私钥',
					editable: true,
					placeholderText: '请输入您的账户私钥',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success(res) {
						if (res.confirm) {
							console.log('输入的内容：', res.content);
							_this.privateKey = res.content
							uni.setStorageSync("privateKey", res.content)
							_this.freshMaskedPrivateKey()
						} else if (res.cancel) {
							console.log('用户点击了取消');
						}
					}
				});
			}
		}
	}
</script>

<style>

</style>