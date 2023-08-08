<template>
	<div>
		<button @click="logout">logout</button>
		<button @click="test">test</button>
		<button @click="login">go to login</button>
		<!-- 		<van-card tag="NFT" desc="描述信息" title="商品标题"
			thumb="https://i.seadn.io/gcs/files/6bb0ceead4aa253f2b11dfc0cc1343b1.jpg?w=500&auto=format" lazy-load=true>
			<view slot="footer">
				<van-button size="normal" @click="claim">claim</van-button>
			</view>
		</van-card> -->
		<van-card v-for="(card, index) in cards" :key="index" :tag="card.tag" :desc="card.desc" :title="card.title"
			:thumb="card.thumb" :lazy-load="card.lazyLoad">
			<view slot="footer">
				<van-button size="normal" @click="claim">claim</van-button>
			</view>
		</van-card>
		<van-button size="normal" @click="showPopup">showPopup</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			}

		},
		methods: {
			onload() {

			},
			showPopup() {
				const _this = this
				uni.showModal({
					title: '输入框',
					// content: '请输入内容：',
					editable: true,
					placeholderText: '请输入...',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: (res)=>{
						if (res.confirm) {
							console.log(res.content)
						} else if (res.cancel) {
							console.log('用户点击了取消');
						}
					}
				});
			},

			onClose() {
				this.show = false
			},
			async test() {
				uni.redirectTo({
					url: "/pages/tabbar/NFT/NFT"
				})
			},
			logout() {
				try {
					uni.setStorageSync('loginStatus', false);
					console.log("current status: false")
				} catch (e) {
					console.log(e)
				}
			},
			login() {
				uni.redirectTo({
					url: "/pages/login/login"
				})
			}
		}
	}
</script>

<style>
	view {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* Optional, to center align the buttons horizontally */
	}

	button {
		margin: 10px 0;
		/* Add some margin between the buttons */
	}
</style>