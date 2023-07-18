<template>
	<button @click="test">test</button>

</template>


<script>
	export default {
		data() {
			return {
				code: ""
			}
		},
		computed: {
			where() {
				return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
			}
		},
		methods: {
			onload() {

			},
			test() {
				console.log("test")
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes.code);
						let APPID = "wx983fb58e4689ec79"
						let secret = "65e839cb3a6ed276c0c07564c3153a79"
						let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' +
							secret + '&js_code=' + loginRes.code + '&grant_type=authorization_code'
						console.log(url)
						uni.request({
							url: url, // 请求路径
							success: result => {
								uni.showModal({
									content:result.data.openid
								})
							},
						});
					}
				})
			}
		}
	}
</script>

<style>

</style>