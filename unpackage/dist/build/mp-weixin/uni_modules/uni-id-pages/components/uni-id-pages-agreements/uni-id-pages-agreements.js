(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements"],{"2efa":function(e,n,t){},"53d9":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var u={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"e603"))},uniPopupDialog:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(t.bind(null,"35fb"))}},i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.agreements.length),u=t&&e.needAgreements?e.__map(e.agreements,(function(n,t){var u=e.__get_orig(n),i=e.hasAnd(e.agreements,t);return{$orig:u,m0:i}})):null,i=t&&(e.needAgreements||e.needPopupAgreements)?e.__map(e.agreements,(function(n,t){var u=e.__get_orig(n),i=e.hasAnd(e.agreements,t);return{$orig:u,m1:i}})):null;e.$mp.data=Object.assign({},{$root:{g0:t,l0:u,l1:i}})},r=[]},"9dec":function(e,n,t){"use strict";t.r(n);var u=t("53d9"),i=t("9f3a");for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("e0f7");var o=t("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"4a6ffee8",null,!1,u["a"],void 0);n["default"]=a.exports},"9f3a":function(e,n,t){"use strict";t.r(n);var u=t("acf1"),i=t.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=i.a},acf1:function(e,n,t){"use strict";(function(e){var u=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("709b")),r=function(){return console.log("为定义")},o={name:"uni-agreements",computed:{agreements:function(){if(!i.default.agreements)return[];var e=i.default.agreements,n=e.serviceUrl,t=e.privacyUrl;return[{url:n,title:"用户服务协议"},{url:t,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,r()},popup:function(e){var n=this;this.needPopupAgreements=!0,this.$nextTick((function(){e&&(r=e),n.$refs.popupAgreement.open()}))},navigateTo:function(n){var t=n.url,u=n.title;e.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+t+"&title="+u,success:function(e){},fail:function(){},complete:function(){}})},hasAnd:function(e,n){return e.length-1>n},setAgree:function(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var e;this.needAgreements=((null===i.default||void 0===i.default||null===(e=i.default.agreements)||void 0===e?void 0:e.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};n.default=o}).call(this,t("543d")["default"])},e0f7:function(e,n,t){"use strict";var u=t("2efa"),i=t.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9dec"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements-create-component']]
]);
