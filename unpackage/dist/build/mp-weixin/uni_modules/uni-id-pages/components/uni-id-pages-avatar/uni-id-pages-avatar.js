(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar"],{"1f23":function(n,e,t){"use strict";(function(n,a){var u=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("2eee")),i=u(t("c973")),o=t("3bf4"),c={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){return(0,i.default)(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()},computed:{hasLogin:function(){return o.store.hasLogin},userInfo:function(){return o.store.userInfo},avatar_file:function(){return o.store.userInfo.avatar_file}},methods:{setAvatarFile:function(n){o.mutations.updateUserInfo({avatar_file:n})},bindchooseavatar:function(e){var t=this;return(0,i.default)(r.default.mark((function u(){var i,o,c,f,l;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return i=e.detail.avatarUrl,o={extname:i.split(".")[i.split(".").length-1],name:"",url:""},c=t.userInfo._id+""+Date.now(),o.name=c,u.prev=4,n.showLoading({title:"更新中",mask:!0}),u.next=8,a.uploadFile({filePath:i,cloudPath:c,fileType:"image"});case 8:f=u.sent,l=f.fileID,o.url=l,n.hideLoading(),u.next=17;break;case 14:u.prev=14,u.t0=u["catch"](4),console.error(u.t0);case 17:console.log("avatar_file",o),t.setAvatarFile(o);case 19:case"end":return u.stop()}}),u,null,[[4,14]])})))()},uploadAvatarImg:function(n){return!1}}};e.default=c}).call(this,t("543d")["default"],t("a9ff")["default"])},2740:function(n,e,t){"use strict";t.r(e);var a=t("aaec"),u=t("5db1");for(var r in u)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(r);t("d075");var i=t("f0c5"),o=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=o.exports},"5db1":function(n,e,t){"use strict";t.r(e);var a=t("1f23"),u=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(r);e["default"]=u.a},7244:function(n,e,t){},aaec:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return a}));var a={cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,"3bef"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"149b"))}},u=function(){var n=this.$createElement;this._self._c},r=[]},d075:function(n,e,t){"use strict";var a=t("7244"),u=t.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2740"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component']]
]);
