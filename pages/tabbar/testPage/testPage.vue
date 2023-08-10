<template>
	<div>
		<button @click="logout">logout</button>
		<button @click="test">test</button>
		<button @click="login">go to login</button>
		<button @click="getLoginStatus">loginStatus</button>
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
			getLoginStatus(){
				let loginStatus=uni.getStorageSync("loginStatus")
				if (!loginStatus){
					uni.showToast({
						title:"未登录"
					})
				}else{
					uni.showToast({
						title:"已经登录"
					})
				}
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