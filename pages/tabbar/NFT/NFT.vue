<template>
	<div class="container">
		<van-cell-group>
			<van-cell title="NFT积分" :value="score"/>
		</van-cell-group>
		<!-- 使用 v-for 循环渲染 <van-card> 元素 -->
		<van-card v-for="(card, index) in cards" :key="index" :tag="NFT" :desc="card.desc" :title="card.title"
			:thumb="card.thumb" :lazy-load="true">
			<view slot="footer">
				<van-button size="normal" @click="claim(index)" :disabled="card.buttonDisabled">{{card.buttonText}}</van-button>
			</view>
		</van-card>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				cards: [],
				// 消耗积分兑换NFT
				fee:15,
				score:0
			}
		},
		methods: {
			async onLoad() {
				await this.renderNFT()
				const loginStatus=uni.getStorageSync("loginStatus")
				if (!loginStatus){
					this.score=0
				}else{
					this.score=uni.getStorageSync("score")
				}
				console.log(this.cards)
			},
			pushElement(element) {
				console.log(element)
				let hexString = element.id.tokenId; // 16进制数表示为字符串
				let tokenID = parseInt(hexString, 16);
				if (element.media[0].gateway == null) {
					return
				}
				try{
					this.cards.push({
						"thumb": element.media[0].gateway,
						"title": element.metadata.name,
						"desc": element.metadata.description,
						"tokenID":tokenID,
						"buttonDisabled":false,
						"buttonText":"领取"
					})
				}catch(e){
					console.log("push element error",e)
				}
			},
			async claim(index) {
				const score= uni.getStorageSync("score")
				if (!score || score<this.fee){
					uni.showToast({
						title:"积分不足",
						icon:"error"
					})
					return
				}
				
				let tokenID=this.cards[index].tokenID
				console.log(tokenID)
				let name=this.cards[index].title
				const _this=this
				
				uni.showLoading({
					title:"领取中..."
				})
				let privateKey=uni.getStorageSync("privateKey")
				await uni.request({
					method:"POST",
					url:"http://localhost:8080/claim",
					data:{
						"privateKey":privateKey,
						"tokenID":tokenID
					},
					header:{
						'content-type' : 'application/x-www-form-urlencoded'
					},
					success(res) {
						console.log(res)
						uni.hideLoading()
						const __this=_this
						uni.showModal({
							content: "领取NFT："+name+"成功！",
							showCancel: false,
							success: function(res) {
								__this.cards[index].buttonDisabled=true
								__this.cards[index].buttonText="已拥有"
								uni.setStorageSync("score",score-this.fee)
								
							},
						})
					},
					fail(err) {
						uni.hideLoading()
						uni.showModal({
							content: "您已领取过该NFT，请等待交易完成",
							showCancel: false,
						})
					}
				})	
			},
			async renderNFT() {
				const _this = this
				await uni.request({
					url: "https://eth-sepolia.g.alchemy.com/v2/DCziIkeBmgxVQZVXF-Hej8GvKKPLy2VE/getNFTs/?owner=0x7D102Fc8654E448238619408F0e2c9BC42fDdb4f",
					success(res) {
						res.data.ownedNfts.forEach((element) => {
							
							_this.pushElement(element)
						})
					},
					fail: (err) => {
						console.error("request for OpenSea error in NFT.vue")
						console.error(err)
					}
				})
			},
			async test() {

			},
		}
	}
</script>

<style>
	.container {
		width: 100%;
	}

	/* 自定义商品标题和描述信息的字体大小 */
	.van-card__title,
	.van-card__desc {
		font-size: 16px;
		/* 自定义字体大小，根据需要调整 */
	}
</style>