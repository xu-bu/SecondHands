<template>
	<view>
		<button @click="test">test</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			test(){
				const db = uniCloud.database();
				db.collection("opendb-mall-goods").add({
					name:"test",
					goods_thumb:"https://7463-tcb-k67cp52wpnffm7w-8cbfbd832520-1317117948.tcb.qcloud.la/1678299353369_0.png"
				})
				console.log("success")
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
