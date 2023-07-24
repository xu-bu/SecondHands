<template>
	<view class="content">
		<van-button @click="goods" type="primary" color="linear-gradient(to right, #4bb0ff, #6149f6)">二手</van-button>
		<van-button type="primary" color="linear-gradient(to right, #4bb0ff, #6149f6)">寄存</van-button>
		<van-button type="primary" color="linear-gradient(to right, #4bb0ff, #6149f6)">租房</van-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			try {
				const value = uni.getStorageSync('loginStatus');
				if (value) {
					console.log(value);
				}else{
					console.log("not login now")
				}
			} catch (e) {
				console.log("no data now")
				try {
					uni.setStorageSync('loginStatus',true);
				} catch (e) {
					console.log("error at index.vue onLoad",e)
				}
			}
		},
		methods: {
			goods(){
				uni.switchTab({
					url:"/pages/tabbar/goods/goods"
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
