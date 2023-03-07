<template>
	<view>
		<uni-easyinput  v-model="item.name" placeholder="name" />
		<uni-easyinput  v-model="item.phone" placeholder="phone" />
		<button @click="submit">提交</button>
		<button @click="callco">test</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"name":"",
					"phone":""
				}
			}
		},
		methods: {
			async callco(){
				console.log("test")
				const co1=uniCloud.importObject("co")
				let res=await co1.test("test from client")
				uni.showModal({
					content:JSON.stringify(res.data),
					showCancel:false 
				})
			}
		}
	}
</script>

<style>

</style>
