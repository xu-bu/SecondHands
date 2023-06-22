<template>
	<view>
		<view class="search-box">
			<uni-search-bar @input="input" :radius="100" cancel-button="none" @confirm="search"></uni-search-bar>
		</view>
		<view class="history-box">
			<view class="title">
				<text>搜索历史</text>
				<uni-icons type="trash" size="17"></uni-icons>
			</view>
			<view class="history-list">
				<uni-tag :text="item" v-for="(item,i) in historyList" :key="i"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//防抖延时器，延时后才会打印input内容
				timer: null,
				keyWord: "",
				historyList: ['a', 'b', 'c']
			};
		},
		methods: {
			//在search bar中输入文本时的响应函数
			input(e) {
				//重新生成一个500ms的延时器，相当于每500ms产生一次搜索提示
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.keyWord = e
				}, 500)
			},
			async getSearchList() {

			},
			saveSearchHistory(keyword) {
				this.historyList.push(keyword)
			},
			search(res) {
				wx.reLaunch({
					url: '/pages/tabbar/goods/goods?keyWord=' + res.value
				})
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		position: sticky;
		top: 0px;
		z-index: 999;
	}

	.uni-searchbar {
		display: flex;
		flex-direction: row;
		position: positive;
	}

	.history-box {
		padding: 0 5px;

		.title {
			display: flex;
			justify-content: space-between;
			height: 40px;
			align-items: center;
			font-size: 13px;
			border-bottom: 1px solid #efefef;
		}

		.history-list {
			display: flex;
			flex-wrap: wrap;

			.uni-tag {
				margin-top: 5px;
				margin-right: 5px;
			}
		}
	}
</style>