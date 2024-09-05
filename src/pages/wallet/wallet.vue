<script setup>
const handleRecharge = () => {
	uni.navigateTo({
		url: '/pages/recharge/recharge',
	})
}
</script>

<template>
	<view class="wallet-box">
		<image class="wallet-icon" src="/static/money.png" mode="widthFix"></image>
		<view class="wallet-title">我的钱包</view>
		<view class="wallet-amount">
			<text class="wallet-symbol">¥</text>
			<text>100.00</text>
		</view>
		<button class="button" @tap="handleRecharge">充值</button>
	</view>
</template>

<style>
.wallet-box {
	text-align: center;
}
.wallet-icon {
	width: 120rpx;
	border-radius: 50%;
	margin: 50rpx auto 30rpx auto;
	background-color: #1296db;
}
.wallet-amount {
	height: 200rpx;
	line-height: 200rpx;
	font-size: 100rpx;
	font-weight: bold;
	margin-bottom: 100rpx;
}
.wallet-symbol {
	font-size: 60rpx;
	margin-right: 10rpx;
}
</style>
