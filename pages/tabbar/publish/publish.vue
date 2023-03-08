<template>
	<view>
		<van-cell-group>
			<uni-section title="物品名称" type="line">
			</uni-section>
			<van-field :value="title" label="名称" placeholder="请输入物品名称" :clearable="true" />
			<uni-section title="物品价格" type="line">
			</uni-section>
			<van-field type="digit" label="价格(rmb)" placeholder="请输入价格" @input="onChange" />
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
			<van-submit-bar custom-class="root-class" :price="price*100" button-text="立即上架" @submit="onSubmit" />
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
			onShow() {},
			onChange(event) {
				this.price = parseFloat(event.detail)
			},
			async onSubmit() {
				console.log(this.content)
				console.log(this.title)
				console.log(this.price)
				await this.$refs.files.upload()
				uni.redirectTo({
					url: "/pages/tabbar/goods/goods"
				})
			},
			success(e) {
				uniCloud.getTempFileURL({
						fileList: e.tempFilePaths
					})
					.then(res => {
						console.log(res)
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
