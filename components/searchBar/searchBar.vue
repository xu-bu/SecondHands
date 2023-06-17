<template>
	<!-- @click="searchBarHandler"能让组件使用@click=function -->
	<view class="my-search-container" @click="searchBarHandler">
		<view class="my-search-bar">
			<uni-icons type="search" size="17"></uni-icons>
			<text class="uni-input-placeholder">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "searchBar",
		data() {
			return {

			};
		},
		methods:{
			searchBarHandler(){
				// console.log("111")
				// 触发本地的click事件
				this.$emit("myclick")
			}
		}
	}
</script>

<style lang="scss">
	.my-search-container {
		background-color: #007AFF;
		height: 50px;
		padding: 0 10px;
		display: flex;
		align-items: center;
	}
	
	.my-search-bar{
		background-color: $uni-bg-color;
		height: 36px;
		border-radius: 15px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	//搜索图标和搜索文字之间的间距
	.uni-input-placeholder{
		margin-left: 5px;
	}
</style>