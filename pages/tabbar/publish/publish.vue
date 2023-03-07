<template>
	<view class="goods_top">
		<view><input type="text" placeholder="请输入商品名称" placeholder-class="pl_text"/></view>
		<view class="goods_img">
			<view class="upload-image">
				<image src="../../../static/logo.png" mode="aspectFill"></image>
				<!-- <image src="../../../static/img/close.png" mode="widthFix"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
<style>
.goods_top{
	background-color:#FFFFFF;
	padding:20rpx;
}
.pl_text{
	front-weight:100;
}
.goods_img{
	display:flex;
	flex-wrap:wrap;
}
.goods_img view{
	width:calc(33.3%-5rpx*2);
	height:200rpx;
	margin:5rpx;
}
.goods_img image{
	width:100%;
	height:100%;
	display:block;
	board-radius:
}
.upload-image{
	position: relative;
}
.upload-image image:nth-child(2){
	width: 30rpx !important;
	height: 30rpx !important;
	position: absolute;
	top: 0;
	right: 0;
}

</style>
