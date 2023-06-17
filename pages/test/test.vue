<template>
	<!--
    本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2651
    uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
    uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
    unicloud-db 组件文档：https://uniapp.dcloud.io/uniCloud/unicloud-db
    DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
     -->

	<view class="list">
		<view class="search-box">
			<searchBar @myclick="search"></searchBar>
		</view>
		<!-- 刷新页面后的顶部提示框 -->
		<!-- 当前弹出内容没有实际逻辑 ，可根据当前业务修改弹出提示 -->
		<view class="tips" :class="{ 'tips-ani': tipShow }">更新了！</view>
		<!-- 页面分类标题 -->
		<uni-section title="二手好物" type="line"><button class="button-box" @click="select">切换视图</button></uni-section>

		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="formData"
			:collection="collection" :where="where" :field="field" @load="load">
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
				item:{
					"name":"",
					"phone":""
				}
			}
		},
		computed: {
		    where() {
		      return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
		    }
		  },
		methods: {
			async callco() {
				console.log("test")
				const co1 = uniCloud.importObject("co")
				let res = await co1.test("test from client")
				uni.showModal({
					content: JSON.stringify(res.data),
					showCancel: false
				})
			}
		}
	}
</script>

<style>

</style>
