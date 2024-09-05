<script setup>
import { ref } from 'vue'
import api from '../../api'

const code = ref('')
const handleExchange = () => {
	if (!code) {
		uni.showToast({
			title: '兑换码不能为空',
		})
	}
	api.cdkeyExchange({ code: code.value }).then(
		(res) => {
			uni.showToast({
				title: '兑换成功',
				icon: 'none',
			})
		},
		(err) => {
			uni.showToast({
				title: '兑换失败',
				icon: 'none',
			})
		}
	)
}
</script>

<template>
	<view class="cdk-box">
		<input v-model="code" type="number" class="cdk-input" placeholder="请输入你的cdk" />
		<button class="button" @tap="handleExchange">兑换</button>
	</view>
</template>

<style>
.cdk-box {
	height: 100vh;
	width: 100vw;
}
.cdk-input {
	width: 80%;
	height: 100rpx;
	margin: 40% auto 100rpx auto;
	border-bottom: 2rpx solid #1296db;
	box-sizing: border-box;
}
</style>
