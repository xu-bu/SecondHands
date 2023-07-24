<template>
	<div>
		<button @click="logout">logout</button>
		<button @click="test">test</button>
		<button @click="login">go to login</button>
	</div>
</template>



<script>
	export default {
		data() {
			return {
				code: "",
				nodemailer: "",
			}
		},
		methods: {
			async test() {
				uni.redirectTo({
					url: "/pages/tabbar/profile/profile"
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