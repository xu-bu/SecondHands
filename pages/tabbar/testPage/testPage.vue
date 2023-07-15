<template>
	<button @click="test">test</button>

</template>


<script>
	export default {
		data() {
			return {
				item: {
					"name": "",
					"phone": ""
				}
			}
		},
		computed: {
			where() {
				return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
			}
		},
		methods: {
			async callco() {
				console.log("test")
				const co1 = uniCloud.importObject("co")
				let res = await co1.test("test from client")
				uni.showModal({
					content: JSON.stringify(res.data),
					showCancel: false
				})
			},
			test() {
				uni.setClipboardData({
					data: 'Yo',
					success() {
						uni.showToast({
							title: '复制成功',
							icon: 'success',
							duration: 2000
						})
					},
					fail() {
						uni.showToast({
							title: '复制失败',
							icon: 'none',
							duration: 2000
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>