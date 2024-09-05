<script setup>
import { ref } from 'vue'
const code = ref('')
const handleExchange = () => {
	console.log('exchangecode', code.value)
}
</script>

<template>
	<view class="cdk-box">
		<input v-model="code" type="number" :maxlength="10" class="cdk-input" placeholder="请输入你的cdk" />
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
