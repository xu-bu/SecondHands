
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/goods/goods","pages/tabbar/testPage/testPage","pages/tabbar/publish/publish","pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release","pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video","pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa","pages/test/showData/showData","pages/detail/detail","uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","uni_modules/uni-id-pages/pages/userinfo/userinfo","uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage","uni_modules/uni-id-pages/pages/login/login-withoutpwd","uni_modules/uni-id-pages/pages/login/login-withpwd","uni_modules/uni-id-pages/pages/login/login-smscode","uni_modules/uni-id-pages/pages/register/register","uni_modules/uni-id-pages/pages/register/register-by-email","uni_modules/uni-id-pages/pages/retrieve/retrieve","uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","uni_modules/uni-id-pages/pages/common/webview/webview","uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","uni_modules/uni-id-pages/pages/register/register-admin","uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd","uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify","pages/searchPage/searchPage","pages/verify/verify","pages/feedback/feedback","pages/login/login","pages/tabbar/profile/profile","pages/tabbar/NFT/NFT"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"冬栗二手","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","enablePullDownRefresh":true},"tabBar":{"borderStyle":"black","backgroundColor":"#333","color":"#8F8F94","selectedColor":"#f33e54","list":[{"pagePath":"pages/tabbar/index/index","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeactive.png","text":"主页"},{"pagePath":"pages/tabbar/goods/goods","iconPath":"static/img/tabbar/shop.png","selectedIconPath":"static/img/tabbar/shopactive.png","text":"二手"},{"pagePath":"pages/tabbar/publish/publish","iconPath":"static/img/tabbar/add.png","selectedIconPath":"static/img/tabbar/addactive.png","text":"发布"},{"pagePath":"pages/tabbar/NFT/NFT","iconPath":"static/img/tabbar/guanzhu.png","selectedIconPath":"static/img/tabbar/guanzhuactive.png","text":"NFT"},{"pagePath":"pages/tabbar/profile/profile","iconPath":"static/img/tabbar/me.png","selectedIconPath":"static/img/tabbar/meactive.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ch1nl33ds","compilerVersion":"3.8.7","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/goods/goods","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/tabbar/testPage/testPage","meta":{},"window":{}},{"path":"/pages/tabbar/publish/publish","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release","meta":{},"window":{}},{"path":"/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video","meta":{},"window":{}},{"path":"/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa","meta":{},"window":{}},{"path":"/pages/test/showData/showData","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","meta":{},"window":{"navigationBarTitleText":"注销账号"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","meta":{},"window":{"navigationBarTitleText":"绑定手机号码"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/uni_modules/uni-id-pages/pages/login/login-withoutpwd","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/uni_modules/uni-id-pages/pages/login/login-withpwd","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/uni_modules/uni-id-pages/pages/login/login-smscode","meta":{},"window":{"navigationBarTitleText":"手机验证码登录"}},{"path":"/uni_modules/uni-id-pages/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/uni_modules/uni-id-pages/pages/register/register-by-email","meta":{},"window":{"navigationBarTitleText":"邮箱验证码注册"}},{"path":"/uni_modules/uni-id-pages/pages/retrieve/retrieve","meta":{},"window":{"navigationBarTitleText":"重置密码"}},{"path":"/uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","meta":{},"window":{"navigationBarTitleText":"通过邮箱重置密码"}},{"path":"/uni_modules/uni-id-pages/pages/common/webview/webview","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":""}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"修改密码"}},{"path":"/uni_modules/uni-id-pages/pages/register/register-admin","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"注册管理员账号"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"设置密码"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"实名认证"}},{"path":"/pages/searchPage/searchPage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/verify/verify","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/feedback/feedback","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tabbar/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tabbar/NFT/NFT","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
