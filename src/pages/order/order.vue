<script setup>
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import api from '../../api'
import { ref } from 'vue'
import { formatTime } from '../../utils'

const orderList = ref([])

onLoad(() => {
	api.orderList().then(
		(res) => {
			console.log('res', res.data)
			orderList.value = res.data.map((i) => {
				return {
					...i,
					amount: (+i.amount).toFixed(2),
					createAt: formatTime(i.createAt, 'YYYY-MM-DD HH:mm:ss'),
					updateAt: formatTime(i.updateAt, 'YYYY-MM-DD HH:mm:ss'),
				}
			})
		},
		(err) => {
			console.log(err)
			uni.showToast({
				title: err || err.errMsg || '订单查询出错',
				icon: 'none',
			})
		}
	)
})

onReachBottom(() => {
	console.log('reach bottom fired')
})
</script>

<template>
	<view class="order-box" v-for="item in orderList" :key="item.id">
		<view class="order-item">场馆名称：{{ item.stadium.name }}</view>
		<view class="order-item ellipsis">订单编号：{{ item.orderNo }}</view>
		<view class="order-item">消费金额：{{ item.amount }}</view>
		<view class="order-item">订单状态：{{ item.status === 1 ? '进行中' : '已完结' }}</view>
		<view class="order-item">订单时长：00:00:00</view>
		<view class="order-item">开始时间：{{ item.createAt }}</view>
		<view class="order-item">结束时间：{{ item.updateAt }}</view>
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
