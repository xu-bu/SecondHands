<template>
	<view class="zy_formList_container">
		<view :class="index===parentFormList.length - 1||border==false?'zy_formList':'zy_formList_border' "
			v-for="(item,index) in parentFormList" :key="index">
			<!-- 表单标题 -->
			<view class="zy_formList_label" >
				<!-- 表单验证图标 -->
				<view class="zy_formList_label_required">
					<text v-show="item.required==true">*</text>
				</view>
				<text class="zy_formList_label_text">{{item.label}}</text>
			</view>
			<!-- 表单内容 -->
			<view class="zy_formList_right">
				<view style="display: flex;">
					<!-- 文本内容 -->
					<view v-if="item.type=='text'||!item.type" class="zy_formList_right_center"
						:class="formData[item.key]?'zy_formList_right_span':'zy_formList_right_blank_span'">
						<text>{{formData[item.key] || '空'}}</text>
					</view>
					<!-- input框内容 -->
					<view v-if="item.type=='input'" class="zy_formList_right_center">
						<input v-model="formData[item.key]" :placeholder="item.placeholder||'请输入'"
							:disabled="item.disabled"
							:class="item.disabled ==false ||!item.disabled?'zy_formList_right_input':'zy_formList_right_input_disabled'"
							@input="(e) => { onInput(e, item,index) }" />
					</view>
					<!-- 多行输入框内容 -->
					<view v-if="item.type=='textarea'" class="zy_formList_right_textarea">
						<textarea class="zy_formList_right_textarea_value" v-model="formData[item.key]"
							placeholder-style="color:#e9e9e9" :placeholder="item.placeholder||'请输入'" />
					</view>
					<!-- 单选框内容 -->
					<view v-if="item.type=='radio'" class="zy_formList_right_center">
						<radio-group @change="radioChange" class="zy_formList_right_group">
							<label class="zy_formList_right_group_label" v-for="(m,n) in item.radioItem" :key="m.value">
								<view>
									<radio :value="m.value" :checked="n === item.current" />
								</view>
								<view>{{m.name}}</view>
							</label>
						</radio-group>
					</view>
					<!-- 多选框内容 -->
					<view v-if="item.type=='checkbox'" class="zy_formList_right_center">
						<checkbox-group @change="checkboxChange" class="zy_formList_right_group">
							<label class="zy_formList_right_group_label" v-for="(m,n) in item.checkboxItem"
								:key="m.value">
								<view>
									<checkbox :value="m.value" :checked="m.checked" />
								</view>
								<view>{{m.name}}</view>
							</label>
						</checkbox-group>
					</view>
					<!-- 选择器内容 -->
<!-- 					<view v-if="item.type=='select'" class="zy_formList_right_center">
						<zySelect ref="selectData" :selectList="item.selectList" clearable @lineHandler="lineHandler" />
					</view> -->
					<!-- 日期选择器内容 -->
					<view v-if="item.type=='datetime'">
						<uni-datetime-picker v-model="formData[item.key]" type="datetimerange" rangeSeparator="至" />
					</view>
					<!-- 右侧单位自定义 -->
					<text class="zy_formList_right_unit">{{item.unit}}</text>
					<!-- 右侧按钮事件 -->
					<view v-if="item.btn" class="zy_formList_right_btn"
						:class="item.btnDisabled==false?'zy_formList_right_btnAble':'zy_formList_right_btnDisabled'"
						@click="item.handle">
						{{item.btn}}
					</view>
				</view>
				<!-- 表单验证 -->
				<view v-if="item.validate==true" style="color: #ff0000;">
					<view v-if="item.placeholder">{{item.placeholder}}</view>
					<view v-else>
						<text v-if="item.type=='input'||item.type=='textarea'">请输入</text>
						<text v-else>请选择</text>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	// import zySelect from '@/uni_modules/zy-select/components/zy-select/zy-select.vue/';
	export default {
		// components: {
		// 	zySelect,
		// },
		emits: ['onInput'],
		props: {
			//表单数据
			formList: {
				type: Array,
			},
			//表单字段
			formData: {
				type: Object,
			},
			//表单底部边框是否显示
			border: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				current: 0, //单选框默认选第一个
				parentFormList: this.formList,
				parentFormData: this.formData,
				formListModel: [],
			}
		},
		methods: {
			//输入框input事件
			onInput(e, item, index) {
				for (var i = 0; i < this.formList.length; i++) {
					if (i == index) {
						// 输入框有值,验证失效
						this.$set(this.formList[i], 'validate', 'false')
					}
				}
			},
			//验证表单
			validate() {
				this.formListModel = this.parentFormList.map(m => {
					return Object.assign(m, {
						validate: false
					})
				})
				for (var i = 0; i < this.formListModel.length; i++) {
					for (var j in this.formData) {
						if (this.formListModel[i].required == true && this.formListModel[i].key == j) {
							if (this.formData[j] == '') {
								this.formListModel[i].validate = true
							}
						}
					}
				}
				this.parentFormList = this.formListModel
			},
			//单选框事件
			radioChange: function(evt) {
				for (let i = 0; i < this.parentFormList.length; i++) {
					if (this.parentFormList[i].type == 'radio') {
						for (let j = 0; j < this.parentFormList[i].radioItem.length; j++) {
							if (this.parentFormList[i].radioItem[j].value === evt.detail.value) {
								this.parentFormList[i].current = j;
								this.parentFormData[this.parentFormList[i].key] = evt.detail.value
								break;
							}
						}
					}
				}
			},
			//多选框事件，ps：若一个表单中多个checkbox，其中的value值不可重复
			checkboxChange: function(evt) {
				var values = evt.detail.value;
				for (let i = 0; i < this.parentFormList.length; i++) {
					if (this.parentFormList[i].type == 'checkbox') {
						for (let j = 0; j < this.parentFormList[i].checkboxItem.length; j++) {
							if (
								values.findIndex((item) => item === this.parentFormList[i].checkboxItem[j].value) !== -
								1
							) {
								const item = this.parentFormList[i].checkboxItem[j]
								if (values.includes(item.value)) {
									this.$set(item, 'checked', true)
								} else {
									this.$set(item, 'checked', false)
								}
								if (item.checked == true) {
									this.parentFormData[this.parentFormList[i].key] = values
								}
							}
						}
					}
				}
			},
			//下拉框点击事件，ps：若一个表单中多个select，其中的value值不可重复
			// lineHandler(val) {
			// 	for (let i = 0; i < this.parentFormList.length; i++) {
			// 		if (this.parentFormList[i].type == 'select') {
			// 			console.log(this.parentFormList[i].selectList)
			// 			for (let j = 0; j < this.parentFormList[i].selectList.length; j++) {
			// 				if (this.parentFormList[i].selectList[j].value === val.value) {
			// 					this.parentFormData[this.parentFormList[i].key] = val.value
			// 					console.log(this.parentFormData[this.parentFormList[i].key])
			// 					break;
			// 				}
			// 			}
			// 		}
			// 	}
			// },
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
