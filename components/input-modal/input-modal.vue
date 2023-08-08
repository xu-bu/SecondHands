<template>
	<modal title="新增空间" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd" @confirm="confirmAdd">
		<input type="text" v-model="areaTxt" placeholder="限填5个字" class="intxt" maxlength="5" />
	</modal>
</template>

<script>
	export default {
		name: "input-modal",
		data() {
			return {
				areaShow: true,
				areaTxt: '',
			}
		},
		methods: {
			cancelAdd() {
				this.areaShow = false
			},
			confirmAdd() {
				this.areaShow = false

			},

		}

	}
</script>

<style>

</style>