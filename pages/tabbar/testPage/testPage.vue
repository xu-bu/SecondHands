<template>
	<button @click="test">test</button>

</template>


<script>
	export default {
		data() {
			return {
				contact:"contact"
			}
		},
		computed: {
			where() {
				return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
			}
		},
		methods: {
			onload(){

			},
			test() {
				console.log("test")
				uni.login({
				  provider: 'weixin', //使用微信登录
				  success: function (loginRes) {
					  uni.showModal({
					  	content:loginRes.authResult
					  })
				  }
				});
			}
		}
	}
</script>

<style>

</style>