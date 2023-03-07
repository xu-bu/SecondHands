<template>
	<view>
		<!-- <button @click="callco">cloud test</button> -->
		<!-- <van-button>test</van-button> -->
		<!-- <van-uploader file-list="{{ fileList }}" bind:after-read="afterRead" /> -->
		<van-submit-bar
		  custom-class="root-class"
		  :price="3050"
		  button-text="立即上架"
		  @submit="onSubmit"
		/>
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
			},
			onSubmit(){
				uni.showModal({
					content:"test",
					showCancel:false 
				})
			}
		}
	}
</script>

<style>

</style>
