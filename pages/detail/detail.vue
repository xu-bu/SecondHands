<template>
	<view>
		<!-- <button @click="test">test</button> -->
		<!-- 商品名称 -->
		<view class="goods_name">
			{{goodsinfo.name}}
		</view>
		<!-- 发布者用户名 -->
		<view>
			{{goodsinfo.username}}
		</view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" circular="true">
			<swiper-item v-for="(item,i) in goodsinfo.goods_banner_imgs" :key="i">
				<image :src="item" @click="preview(i)"></image>
			</swiper-item>
		</swiper>
		<!-- 商品信息区域 -->
		<view class="goods_info_box">
			<!-- 商品价格 -->
			<view class="price">
				￥{{goodsinfo.goods_price}}
			</view>
			<!-- 联系信息区域 -->
			<view class="contact">联系微信号：(验证邮箱后可复制)
				<van-button @click="copy" type="primary" size="mini"
					color="linear-gradient(to right, #4bb0ff, #6149f6)">复制</van-button>
			</view>
			<!-- 商品描述 -->
			<view class="goods_description">
				{{goodsinfo.goods_desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsinfo: ""
			}
		},
		methods: {
			onLoad(option) {
				this.getGoodsInfo(option.id)
			},
			redirectToVerify() {
				uni.showModal({
					content: "请验证校园邮箱后再尝试获取卖家微信号",
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							uni.redirectTo({
								url: "/pages/verify/verify",
							})
						}
					},
				})
			},
			copy() {
				try {
					const value = uni.getStorageSync('loginStatus');
					if (!value) {
						this.redirectToVerify()
					}
				} catch (e) {
					this.redirectToVerify()
				}
				uni.setClipboardData({
					data: this.goodsinfo.seller_wechat,
					success() {
						uni.showToast({
							title: '复制成功',
							icon: 'success',
							duration: 2000
						})
					},
					fail() {
						uni.showToast({
							title: '复制失败',
							icon: 'none',
							duration: 2000
						})
					}
				})
			},

			async getGoodsInfo(id) {
				const db = uniCloud.database()
				await db.collection("opendb-mall-goods").doc(id).get().then(res => {
					this.goodsinfo = res.result.data[0]
				})
			},
			// swiper preview
			preview(i) {
				uni.previewImage({
					current: i,
					urls: this.goodsinfo.goods_banner_imgs
				})
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		padding: 20px;
		height: 750rpx;

		image {
			width: 100%;
			height: 100%;
			// add rounded angle
			border-radius: 10px;
		}
	}

	.goods_name {
		padding: 20px;
		// padding-right: 50px;
		font-size: 20px;
	}


	.goods_info_box {
		// 左侧间距10px,右侧没有间距
		padding: 20px;
		padding-right: 0;

		.price {
			color: #C00000;
			font-size: 25px;
			// 上下间距10px,左右间距0
			margin: 10px 0;

		}

		.goods_name {
			padding: 50px;
			// padding-right: 50px;
			font-size: 16px;
		}

		.contact {
			display: flex;
			align-items: center;
		}

		.goods_description {}
	}
</style>