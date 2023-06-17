<template>
	<view>
		<van-cell-group>
			<uni-section title="物品名称" type="line">
			</uni-section>
			<van-field label="名称" placeholder="请输入物品名称" @input="onTitle" />
			<van-field label="联系微信" placeholder="请输入您的微信号" @input="onContact" />
			<uni-section title="物品价格" type="line">
			</uni-section>
			<van-field type="digit" label="价格(rmb)" placeholder="请输入价格" @input="onPrice" />
			<uni-section title="物品描述" type="line">
			</uni-section>
			<!-- 默认为140，所以需要设置为无限大 -->
			<uni-easyinput type="textarea" v-model="content" placeholder="请输入物品描述" maxlength="-1"></uni-easyinput>
			<uni-section title="上传图片" type="line">
			</uni-section>
			<view class="example-body">
				<uni-file-picker ref="files" :auto-upload="false" limit="9" mode="grid" title="最多选择9张图片"
					@success="success"></uni-file-picker>
			</view>
		</van-cell-group>
		<text>\n</text>
		<text>\n</text>
		<text>\n</text>
		<text>\n</text>
		<text>\n</text>
		<van-cell-group>
			<van-submit-bar custom-class="root-class" :price="price*100" button-text="立即上架" @submit="onSubmit">
				<!-- <van-tag type="primary">请等待图片上传完成后再离开哟</van-tag> -->
				<div slot="tip">请等待图片上传完成后再离开哟</div>
			</van-submit-bar>
		</van-cell-group>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: "",
				price: 0,
				content: "",
				contact:"",
				disable: true,
				fileList: [],
				postId: "",
				previewList: [],
				imgId: 0,
				file: null
			};
		},
		methods: {
			onLoad() {
				uni.showModal({
					content: getApp().globalData.baseURL
				})
			},
			onShow: function() {
				const pages = getCurrentPages()
				const perpage = pages[pages.length - 1]
				perpage.onLoad()
			},
			onTitle(e) {
				this.title = e.detail
			},
			onPrice(event) {
				this.price = parseFloat(event.detail)
			},
			onContact(event) {
				this.contact = event.detail
			},
			onTest() {
				console.log(this.title)
			},
			backToIndex() {
				uni.showModal({
					title: '',
					content: '网络似乎不太好，上传失败了>_<',
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							uni.switchTab({
								url: "/pages/tabbar/goods/goods",
								success: (res) => {
									let page = getCurrentPages().pop();
									if (page == undefined || page == null) return;
									page.onLoad();
								}
							})
						}
					},

				});
			},
			async onSubmit() {
				// console.log(this.content)
				// console.log(this.title)
				// console.log(this.price)
				try {
					await this.$refs.files.upload()
				} catch (e) {
					this.backToIndex()
				}

			},
			// if publish successfully, update database
			success(e) {
				let url = []
				uniCloud.getTempFileURL({
						fileList: e.tempFilePaths
					})
					.then(res => {
						res.fileList.forEach(function(obj) {
							console.log(obj.fileID)
							// if use tencent cloud
							// url.push(obj.download_url)
							//if use ali cloud
							url.push(obj.fileID)
						})
						const db = uniCloud.database();
						console.log(url[0])
						try {
							db.collection("opendb-mall-goods").add({
								"name": this.title,
								goods_desc: this.content,
								goods_price: this.price,
								goods_banner_imgs: url,
								goods_thumb: url[0]
							})
						} catch (e) {
							this.backToIndex()
							console.log(e)
						}
					});

				uni.showModal({
					title: '上架物品成功！',
					content: '上架物品成功！',
					showCancel: false,
					success: res => {
						uni.switchTab({
							url: "/pages/tabbar/goods/goods",
							success: (res) => {
								let page = getCurrentPages().pop();
								if (page == undefined || page == null) return;
								page.onLoad();
							}
						})
					},
				});
			}
		}

	}
</script>

<style lang="scss">
	.uni-mt-5 {
		margin-top: 5px;
	}
</style>
