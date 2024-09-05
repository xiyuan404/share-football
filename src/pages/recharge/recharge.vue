<script setup>
import { ref } from 'vue'
const activeIndex = ref(0)
const amountList = [
	{ id: 1, amount: 10 },
	{ id: 2, amount: 20 },
	{ id: 3, amount: 50 },
	{ id: 4, amount: 100 },
]
const handleItemTap = (index) => {
	activeIndex.value = index
}

const handleRecharge = () => {
	const item = amountList.find((_, index) => index === activeIndex.value)
	uni.showToast({
		title: `当前充值金额为${item.amount}`,
		icon: 'none',
		mask: true,
	})
}
</script>

<template>
	<view class="recharge-box">
		<view class="recharge-stat">
			当前账户余额:
			<text>100.0</text>
			元
		</view>
		<view class="recharge-list">
			<view
				class="recharge-item"
				:class="{ ['active-amount']: activeIndex === index }"
				v-for="(item, index) in amountList"
				@tap="handleItemTap(index)"
			>
				¥ {{ item.amount }}
			</view>
		</view>
		<button class="button" @tap="handleRecharge">立即充值</button>
	</view>
</template>

<style>
.recharge-box {
	width: 80%;
	margin: 0 auto;
}

.recharge-stat {
	height: 100rpx;
	line-height: 100rpx;
	font-size: 40rpx;
	font-weight: bold;
	margin: 40rpx 0;
}

.recharge-stat text {
	color: #1296db;
}

.recharge-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 100rpx;
}
.recharge-item {
	width: 45%;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	border: 2rpx solid #d1d1d1;
	box-sizing: border;
	margin-bottom: 50rpx;
}

.active-amount {
	border-color: #1296db;
	color: #1296db;
}
</style>
