<template>
	<div class="container">
		<van-grid clickable column-num="2">
			<van-grid-item icon="home-o" link-type="navigateTo" url="/pages/tabbar/goods/goods" text="二手" />
			<van-grid-item icon="search" link-type="reLaunch" url="/pages/tabbar/NFT/NFT" text="NFT" />
			<van-grid-item icon="home-o" link-type="navigateTo" url="/pages/dashboard/index" text="寄存" />
			<van-grid-item icon="search" link-type="reLaunch" url="/pages/dashboard/index" text="转租" />
		</van-grid>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			try {
				const value = uni.getStorageSync('loginStatus');
				if (!value) {
					console.log("not login now")
				}
			} catch (e) {
				console.log("no data now")
				try {
					uni.setStorageSync('loginStatus', true);
				} catch (e) {
					console.log("error at index.vue onLoad", e)
				}
			}
		},
		methods: {
			onPageHide(){
				console.log("hide")
			},
			goods() {
				uni.switchTab({
					url: "/pages/tabbar/goods/goods"
				})
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		/* 在主轴上居中对齐 */
		align-items: center;
		/* 在交叉轴上居中对齐 */
		height: 100vh;
		/* 设置容器的高度为视口高度，使内容在垂直方向居中 */
	}
</style>