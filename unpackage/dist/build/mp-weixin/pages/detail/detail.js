(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0edf":function(t,e,n){"use strict";n.r(e);var o=n("3389"),a=n("b9d7");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1a01");var u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=c.exports},"1a01":function(t,e,n){"use strict";var o=n("2470"),a=n.n(o);a.a},2470:function(t,e,n){},3389:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},a=[]},"5e17":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("b782"),n("a9ff");o(n("66fd"));var a=o(n("0edf"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},b9d7:function(t,e,n){"use strict";n.r(e);var o=n("d996"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},d996:function(t,e,n){"use strict";(function(t,o){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2eee")),u=a(n("c973")),c={data:function(){return{goodsinfo:""}},methods:{onLoad:function(t){this.getGoodsInfo(t.id)},copy:function(){t.setClipboardData({data:this.goodsinfo.seller_wechat,success:function(){t.showToast({title:"复制成功",icon:"success",duration:2e3})},fail:function(){t.showToast({title:"复制失败",icon:"none",duration:2e3})}})},getGoodsInfo:function(t){var e=this;return(0,u.default)(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=o.database(),n.next=3,a.collection("opendb-mall-goods").doc(t).get().then((function(t){e.goodsinfo=t.result.data[0]}));case 3:case"end":return n.stop()}}),n)})))()},preview:function(e){t.previewImage({current:e,urls:this.goodsinfo.goods_banner_imgs})}}};e.default=c}).call(this,n("543d")["default"],n("a9ff")["default"])}},[["5e17","common/runtime","common/vendor"]]]);