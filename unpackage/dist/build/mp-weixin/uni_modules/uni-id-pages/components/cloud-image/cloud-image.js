(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/cloud-image/cloud-image"],{"396d":function(t,n,e){"use strict";e.r(n);var i=e("5876"),u=e.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=u.a},"3bef":function(t,n,e){"use strict";e.r(n);var i=e("f3c2"),u=e("396d");for(var c in u)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(c);var r=e("f0c5"),f=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=f.exports},5876:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(n){var e=this;n&&"cloud://"==n.substring(0,8)?t.getTempFileURL({fileList:[n]}).then((function(t){e.cSrc=t.fileList[0].tempFileURL})):this.cSrc=n},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};n.default=e}).call(this,e("a9ff")["default"])},f3c2:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component',
    {
        'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3bef"))
        })
    },
    [['uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component']]
]);
