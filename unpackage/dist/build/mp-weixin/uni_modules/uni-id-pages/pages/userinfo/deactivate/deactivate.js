(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"],{2436:function(e,n,t){"use strict";t.r(n);var a=t("25b3"),i=t("e199");for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("be70");var o=t("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports},"25b3":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},be70:function(e,n,t){"use strict";var a=t("ece5"),i=t.n(a);i.a},ca58:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){e.navigateBack()},nextStep:function(){e.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(n){if(n.confirm){var a=t.importObject("uni-id-co");a.closeAccount().then((function(n){e.showToast({title:"注销成功",duration:3e3}),e.removeStorageSync("uni_id_token"),e.setStorageSync("uni_id_token_expired",0),e.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else e.navigateBack()}})}}};n.default=a}).call(this,t("543d")["default"],t("a9ff")["default"])},e199:function(e,n,t){"use strict";t.r(n);var a=t("ca58"),i=t.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=i.a},ece5:function(e,n,t){},f560:function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("b782"),t("a9ff");a(t("66fd"));var i=a(t("2436"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["f560","common/runtime","common/vendor"]]]);