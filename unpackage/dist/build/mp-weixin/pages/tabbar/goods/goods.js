(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/goods/goods"],{"0c33":function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("b782"),e("a9ff");o(e("66fd"));var i=o(e("2bb4"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"2bb4":function(n,t,e){"use strict";e.r(t);var o=e("68b6"),i=e("5996");for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("cfba");var a=e("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=r.exports},5996:function(n,t,e){"use strict";e.r(t);var o=e("ca8a"),i=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a},"68b6":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={searchBar:function(){return e.e("components/searchBar/searchBar").then(e.bind(null,"1f07"))},uniSection:function(){return e.e("components/uni-section/uni-section").then(e.bind(null,"f39a"))},unicloudDb:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(e.bind(null,"960d"))},uniList:function(){return e.e("uni_modules/uni-list/components/uni-list/uni-list").then(e.bind(null,"842d"))},uniListItem:function(){return e.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(e.bind(null,"4892"))},uniLoadMore:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(e.bind(null,"7f78"))}},i=function(){var n=this.$createElement;this._self._c},u=[]},c574:function(n,t,e){},ca8a:function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={components:{},data:function(){return{field:"goods_thumb,name,goods_tip,tag,goods_price,comment_count,month_sell_count,shop_name",formData:{waterfall:!1,status:"loading"},tipShow:!1,keyWord:""}},computed:{where:function(){return"".concat(new RegExp(this.keyWord,"i"),".test(name)")}},onLoad:function(t){var o=this,i=n.database();"undefined"!=typeof t.keyWord&&(this.timer=setTimeout((function(){o.keyWord=t.keyWord}),500)),i.on("refreshToken",(function(n){var t=n.token,o=n.tokenExpired;e.setStorageSync("uni_id_token",t),e.setStorageSync("uni_id_token_expired",o)}))},methods:{select:function(){this.formData.waterfall=!this.formData.waterfall},load:function(n,t){t&&(this.formData.status="noMore")},search:function(){e.navigateTo({url:"/pages/searchPage/searchPage?keyWord="+this.keyWord})},test:function(){console.log("goods test"),e.navigateTo({url:"/pages/goods/goods"})}},onPullDownRefresh:function(){var n=this;this.formData.status="more",this.$refs.udb.loadData({clear:!0},(function(){n.tipShow=!0,clearTimeout(n.timer),n.timer=setTimeout((function(){n.tipShow=!1}),1e3),e.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()}};t.default=o}).call(this,e("a9ff")["default"],e("543d")["default"])},cfba:function(n,t,e){"use strict";var o=e("c574"),i=e.n(o);i.a}},[["0c33","common/runtime","common/vendor"]]]);