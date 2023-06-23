<template>
	<view>
		<view class="search-box">
			<uni-search-bar v-model="keyWord" @input="input" :focus="true" :radius="100" cancel-button="none" @confirm="search"></uni-search-bar>
		</view>
		<view class="history-box">
			<view class="title">
				<text>搜索历史</text>
				<uni-icons type="trash" size="17" @click="clean"></uni-icons>
			</view>
			<view class="history-list">
				<uni-tag :text="item" v-for="(item,i) in histories" :key="i" @click="searchHistory(item)"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
import { set } from 'mobx-miniprogram';
	export default {
		data() {
			return {
				//防抖延时器，延时后才会打印input内容
				timer: null,
				keyWord: "",
				historyList: []
			};
		},
		onLoad(option) {
			this.historyList=JSON.parse(uni.getStorageSync('history')||'[]')
			if(typeof option.keyWord!='undefined'){
				this.keyWord = option.keyWord
				console.log(this.keyWord)
			}
		},
		methods: {
			//在search bar中输入文本时的响应函数
			input(e) {
				//重新生成一个500ms的延时器，相当于每500ms产生一次搜索提示
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.keyWord = e
				}, 500)
				console.log(this.historyList)
			},
			saveSearchHistory(keyWord) {
				const set=new Set(this.historyList)
				set.delete(keyWord)
				set.add(keyWord)
				this.historyList=Array.from(set)
				// JSON格式持久化到本地
				uni.setStorageSync('history',JSON.stringify(this.historyList))
			},
			search(res) {
				wx.reLaunch({
					url: '/pages/tabbar/goods/goods?keyWord=' + res.value
				})
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
				this.saveSearchHistory(res.value)
			},
			searchHistory(keyWord){
				wx.reLaunch({
					url: '/pages/tabbar/goods/goods?keyWord=' + keyWord
				})
			},
			clean(){
				this.historyList=[]
				uni.setStorageSync('history','[]')
			}
		},
		computed:{
			histories(){
				return [...this.historyList].reverse()
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