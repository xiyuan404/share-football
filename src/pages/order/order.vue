<script setup>
import { onReachBottom } from '@dcloudio/uni-app'
onReachBottom(() => {
	console.log('reach bottom fired')
})
</script>

<template>
	<view class="order-box" v-for="item in 5" :key="item">
		<view class="order-item">场馆名称: 虹桥足球场</view>
		<view class="order-item">订单编号: 虹桥足球场</view>
		<view class="order-item">消费金额: 虹桥足球场</view>
		<view class="order-item">订单状态: 虹桥足球场</view>
		<view class="order-item">订单时长: 虹桥足球场</view>
		<view class="order-item">起始时间: 虹桥足球场</view>
		<view class="order-item">结束时间: 虹桥足球场</view>
	</view>
</template>

<style>
page {
	background-color: #f1f1f1;
	padding: 30rpx 0;
}

.order-box {
	width: 80%;
	margin: 0 auto;
	margin-bottom: 30rpx;
	padding: 30rpx;
	background-color: white;
}

.order-item {
	height: 50rpx;
	line-height: 50rpx;
}
</style>
