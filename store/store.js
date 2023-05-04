// // 创建store实例对象
// import {action, observable} from 'mobx-miniprogram'

// export const store=observable({
// 	numA:1,
// 	numB:2,
// 	get sum(){
// 		return this.numA+this.numB
// 	},
// 	updateNum1: action(function(step){
// 		this.numA+=step
// 	}),
// 	updateNum2: action(function(step){
// 		this.numB+=step
// 	}),
// })

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store=new Vuex.Store({
	modules:{}
})

export default store