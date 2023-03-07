<template>
	<view>
		<uni-easyinput  v-model="item.name" placeholder="name" />
		<uni-easyinput  v-model="item.phone" placeholder="phone" />
		<button @click="submit()">提交</button>
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
			submit(){
				uni.showModal({
					content:"submit successfully"
				})
				const db = uniCloud.database();
				db.collection("test").add(this.item).then(e=>{
					console.log(e);
				})
			}
		}
	}
</script>

<style>

</style>
