<script>
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	export default {
			onLaunch: async function() {
				console.log('App Launch')
				await uniIdPageInit()
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