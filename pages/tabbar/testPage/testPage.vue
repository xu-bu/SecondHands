<template>
	<view>
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="test">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>
					<uni-list-item v-for="item in data" @longpress.native="rmItem(item._id)" :key="item._id" :title="item.name" :note="item.phone"   link></uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			rmItem(id){
				this.$refs.udb.remove(id)
			},
			async callco() {
				console.log("test")
				const co1 = uniCloud.importObject("co")
				let res = await co1.test("test from client")
				uni.showModal({
					content: JSON.stringify(res.data),
					showCancel: false
				})
			},
			onLoad(){
				this.callco()
			}
		}
	}
</script>

<style>

</style>
