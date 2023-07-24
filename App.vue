<script>
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	// const  nodemailer=require("./node_modules/nodemailer/lib/nodemailer.js")
	export default {
			onLaunch: async function() {
				console.log('App Launch')
				// this.nodemailer=nodemailer
			},
			onLaunch: function() {
				console.log('App Launch');
			},
			onShow: function() {
				console.log('App Show');
			},
			onHide: function() {
				console.log('App Hide');
			}
		};
</script>

<style>
	/*每个页面公共css */
	/* @import "/wxcomponents/vant/common/index.wxss"; */
</style>