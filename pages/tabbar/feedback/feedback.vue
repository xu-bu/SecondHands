<template>
	<view>
		<van-cell-group>
			<uni-section title="反馈描述" type="line">
			</uni-section>
			<uni-easyinput type="textarea" v-model="content" placeholder="请输入您的反馈" maxlength="-1"></uni-easyinput>
			<button @click="uploadFeedback">提交</button>
		</van-cell-group>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				content:""
			}
		},
		methods: {
			uploadFeedback(){
				const db=uniCloud.database()
				try{
					console.log(this.content)
					db.collection('feedback').add({"content":this.content})
				}catch(e){
					console.log(e)
					this.backToIndex('网络似乎不太好，提交失败了>_<')
				}
				this.backToIndex("反馈提交成功！")
			},
			backToIndex(string) {
				uni.showModal({
					title: '',
					content: string,
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							uni.switchTab({
								url: "/pages/tabbar/index/index",
							})
						}
					},
				});
			}
		}
	}
</script>

<style>

</style>
