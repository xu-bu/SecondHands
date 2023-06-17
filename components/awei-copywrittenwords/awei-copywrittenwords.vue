<template>
	<view @click="fun()">
		复制
	</view>
</template>

<script>
	export default {
		name:"copywrittenwords",
		props:['mes'],
		data() {
			return {
				// val: 'www.baidu.com222'
				val: ''
			};
		},
		methods:{
			fun() {		//复制事件
			console.log(555)
			console.log(this.mes)
				// var content1 = this.val   //要复制的值
				var content1 = this.mes   //要复制的值
				var tips ="复制成功"    //复制成功提示语
				var ele = document.createElement("input"); //创建一个input标签
				ele.setAttribute("value", content1); // 设置改input的value值
				document.body.appendChild(ele); // 将input添加到body
				ele.select();// 获取input的文本内容
				document.execCommand("copy");// 执行copy指令
				document.body.removeChild(ele);// 删除input标签
				uni.showToast({    // 显示复制成功之后的提示文本
					title: '复制成功',
					icon:'none',
					duration: 2000
				});
			},
		}
	}
</script>

<style>

</style>
