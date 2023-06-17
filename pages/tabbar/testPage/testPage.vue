<template>
	<!--
    本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2651
    uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
    uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
    unicloud-db 组件文档：https://uniapp.dcloud.io/uniCloud/unicloud-db
    DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
     -->

	<view class="list">
		<button @click="test">test</button>
		<view class="search-box">
			<searchBar @myclick="search"></searchBar>
		</view>
		<!-- 刷新页面后的顶部提示框 -->
		<!-- 当前弹出内容没有实际逻辑 ，可根据当前业务修改弹出提示 -->
		<view class="tips" :class="{ 'tips-ani': tipShow }">更新了！</view>
		<!-- 页面分类标题 -->
		<uni-section title="二手好物" type="line"><button class="button-box" @click="select">切换视图</button></uni-section>

		<unicloud-db v-slot:default="{data, loading, error, options}" collection="opendb-mall-goods" :where="where">
			<!-- 基于 uni-list 的页面布局 -->
			<uni-list :class="{ 'uni-list--waterfall': options.waterfall }">
				<!-- 通过 uni-list--waterfall 类决定页面布局方向 -->
				<!-- to 属性携带参数跳转详情页面，当前只为参考 -->
				<uni-list-item :border="!options.waterfall" class="uni-list-item--waterfall" title="自定义商品列表"
					v-for="item in data" :key="item._id" :to="'/pages/detail/detail?id='+item._id+'&title='+item.name">
					<!-- 通过header插槽定义列表左侧图片 -->
					<template v-slot:header>
						<view class="uni-thumb shop-picture" :class="{ 'shop-picture-column': options.waterfall }">
							<image :src="item.goods_thumb" mode="aspectFill"></image>
						</view>
					</template>
					<template v-slot:body>
						<view class="shop">
							<view>
								<view class="uni-title">
									<text class="uni-ellipsis-2">{{ item.name }}</text>
								</view>
								<!-- <view> -->
								<!-- 对应数据库的goods_tip 红色标签 -->
								<text class="uni-tag hot-tag">{{ item.goods_tip }}</text>
								<!-- 对应数据库的keywords 灰色标签-->
								<!-- <text v-for="tag in item.tag" :key="tag" class="uni-tag">{{ tag }}</text> -->
								<!-- </view> -->
							</view>
							<view>
								<view class="shop-price">
									<text>¥</text>
									<text class="shop-price-text">{{ item.goods_price }}</text>
									<text>.00</text>
								</view>
								<!-- 评论，销量，店名 -->
								<!-- <view class="uni-note">{{ item.comment_count }}条评论 月销量 {{ item.month_sell_count }}</view>
                                <view class="uni-note ellipsis">
                                    <text class="uni-ellipsis-1">{{ item.shop_name }}</text>
                                    <text class="uni-link">进店 ></text>
                                </view> -->
							</view>
						</view>
					</template>
					<!-- 通过body插槽定义商品布局 -->

				</uni-list-item>
			</uni-list>
			<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
			<uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" />
		</unicloud-db>
	</view>

</template>


<script>
	export default {
		data() {
			return {
				searchVal: "名称"
			}
		},
		computed: {
			where() {
				return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
			}
		},
		methods: {
			onKeyInput(e) {
				// 实际开发中这里应该还有防抖或者节流操作，这里不做演示
				this.searchVal = e.target.value
			},
			test(){
				console.log("test")
				this.searchVal="这是名称"
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../common/uni-ui.scss';
	
	.search-box{
		//吸顶，防止滑动的时候看不见了
		position: sticky;
		top:0;
		//提高层级，防止被覆盖
		z-index: 999;
	}
	

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.shop {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.shop-picture {
		width: 110px;
		height: 110px;
	}

	.shop-picture-column {
		width: 100%;
		height: 170px;
		margin-bottom: 10px;
	}

	.shop-price {
		margin-top: 5px;
		font-size: 12px;
		color: #ff5a5f;
	}

	.shop-price-text {
		font-size: 16px;
	}

	.hot-tag {
		background: #ff5a5f;
		border: none;
		color: #fff;
	}

	.button-box {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		background: #007AFF;
		color: #fff;
	}

	.uni-link {
		flex-shrink: 0;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	// 默认加入 scoped ，所以外面加一层提升权重
	.list {
		.uni-list--waterfall {

			/* #ifndef H5 || APP-VUE */
			// 小程序 编译后会多一层标签，而其他平台没有，所以需要特殊处理一下
			/deep/ .uni-list {
				/* #endif */
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 5px;
				box-sizing: border-box;

				/* #ifdef H5 || APP-VUE */
				// h5 和 app-vue 使用深度选择器，因为默认使用了 scoped ，所以样式会无法穿透
				/deep/
				/* #endif */
				.uni-list-item--waterfall {
					width: 50%;
					box-sizing: border-box;

					.uni-list-item__container {
						padding: 5px;
						flex-direction: column;
					}
				}

				/* #ifndef H5 || APP-VUE */
			}

			/* #endif */
		}
	}
</style>