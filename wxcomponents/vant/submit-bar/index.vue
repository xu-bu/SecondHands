<template>
<uni-shadow-root class="vant-submit-bar-index"><view class="van-submit-bar custom-class">
  <slot name="top"></slot>

  <view class="van-submit-bar__tip">
    <van-icon v-if="tipIcon" size="12px" :name="tipIcon" custom-class="van-submit-bar__tip-icon"></van-icon>
    <view v-if="hasTip" class="van-submit-bar__tip-text">
      {{ tip }}
    </view>
    <slot name="tip"></slot>
  </view>

  <view :class="'bar-class '+(utils.bem('submit-bar__bar', { safe: safeAreaInsetBottom }))">
    <slot></slot>
    <view v-if="hasPrice" class="van-submit-bar__text">
      <text>{{ label || '' }}</text>
      <text class="van-submit-bar__price price-class">
        <text class="van-submit-bar__currency">{{ currency }} </text>
        <text class="van-submit-bar__price-integer">{{ integerStr }}</text><text>{{decimalStr}}</text>
      </text>
      <text class="van-submit-bar__suffix-label">{{ suffixLabel }}</text>
    </view>
    <van-button round :type="buttonType" :loading="loading" :disabled="disabled" class="van-submit-bar__button" custom-class="button-class" custom-style="width: 100%;" @click="onSubmit">
      {{ loading ? '' : buttonText }}
    </van-button>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanButton from '../button/index.vue'
import VanIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'van-button': VanButton,'van-icon': VanIcon}}

global['__wxRoute'] = 'vant/submit-bar/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    classes: [
        'bar-class',
        'price-class',
        'button-class'
    ],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updatePrice: function () {
            var _a = this.data, price = _a.price, decimalLength = _a.decimalLength;
            var priceStrArr = typeof price === 'number' && (price / 100).toFixed(decimalLength).split('.');
            this.setData({
                hasPrice: typeof price === 'number',
                integerStr: priceStrArr && priceStrArr[0],
                decimalStr: decimalLength && priceStrArr ? "." + priceStrArr[1] : ''
            });
        },
        updateTip: function () {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit: function (event) {
            this.$emit('submit', event.detail);
        }
    }
});
export default global['__wxComponents']['vant/submit-bar/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-submit-bar{position:fixed;bottom:0;left:0;width:100%;-webkit-user-select:none;user-select:none;z-index:100;z-index:var(--submit-bar-z-index,100);background-color:#fff;background-color:var(--submit-bar-background-color,#fff)}.van-submit-bar__tip{padding:10px;padding:var(--submit-bar-tip-padding,10px);color:#f56723;color:var(--submit-bar-tip-color,#f56723);font-size:12px;font-size:var(--submit-bar-tip-font-size,12px);line-height:1.5;line-height:var(--submit-bar-tip-line-height,1.5);background-color:#fff7cc;background-color:var(--submit-bar-tip-background-color,#fff7cc)}.van-submit-bar__tip:empty{display:none}.van-submit-bar__tip-icon{width:12px;height:12px;margin-right:4px;vertical-align:middle;font-size:12px;font-size:var(--submit-bar-tip-icon-size,12px);min-width:18px;min-width:calc(var(--submit-bar-tip-icon-size, 12px)*1.5)}.van-submit-bar__tip-text{display:inline;vertical-align:middle}.van-submit-bar__bar{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:flex-end;justify-content:flex-end;padding:0 16px;padding:var(--submit-bar-padding,0 16px);height:50px;height:var(--submit-bar-height,50px);font-size:14px;font-size:var(--submit-bar-text-font-size,14px);background-color:#fff;background-color:var(--submit-bar-background-color,#fff)}.van-submit-bar__bar--safe{padding-bottom:env(safe-area-inset-bottom)}.van-submit-bar__text{-webkit-flex:1;flex:1;text-align:right;color:#323233;color:var(--submit-bar-text-color,#323233);padding-right:12px;padding-right:var(--padding-sm,12px)}.van-submit-bar__price,.van-submit-bar__text{font-weight:500;font-weight:var(--font-weight-bold,500)}.van-submit-bar__price{color:#ee0a24;color:var(--submit-bar-price-color,#ee0a24);font-size:12px;font-size:var(--submit-bar-price-font-size,12px)}.van-submit-bar__price-integer{font-size:20px;font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-submit-bar__currency{font-size:12px;font-size:var(--submit-bar-currency-font-size,12px)}.van-submit-bar__suffix-label{margin-left:5px}.van-submit-bar__button{width:110px;width:var(--submit-bar-button-width,110px);font-weight:500;font-weight:var(--font-weight-bold,500);--button-default-height:40px!important;--button-default-height:var(--submit-bar-button-height,40px)!important;--button-line-height:40px!important;--button-line-height:var(--submit-bar-button-height,40px)!important}
</style>