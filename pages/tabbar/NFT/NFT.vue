<template>
	<div class="container">
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
			}
		},

		methods: {
			async onLoad() {
				await this.renderNFT()
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
				let tokenID=this.cards[index].tokenID
				console.log(tokenID)
				let name=this.cards[index].title
				const _this=this
				
				uni.showLoading({
					title:"领取中..."
				})
				await uni.request({
					method:"POST",
					url:"http://localhost:8080/claim",
					data:{
						"privateKey":"8a618ed7f0fbcafcb8c745469507c8522994ce369dbf5b57f87bab5237902344",
						"tokenID":tokenID
					},
					header:{
						'content-type' : 'application/x-www-form-urlencoded'
					},
					success() {
						uni.hideLoading()
						const __this=_this
						uni.showModal({
							content: "领取NFT："+name+"成功！",
							showCancel: false,
							success: function(res) {
								__this.cards[index].buttonDisabled=true
								__this.cards[index].buttonText="已拥有"
							},
						})
					},
					fail(err) {
						uni.hideLoading()
						uni.showModal({
							content: "领取失败",
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