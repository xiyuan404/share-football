<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// import { getGroundInfoById } from '../../pages-data'

const groundInfo = ref({})

const app = getApp()
onLoad((opts) => {
	// 接收首页传递的场馆详情唯一标识
	// console.log(opts)
	// groundInfo.value = getGroundInfoById(+opts.id)
	groundInfo.value = app.globalData.markers.find((marker) => marker.id === +opts.id)
	console.log('ground data: ', groundInfo.value)
})

const handleTap = (e) => {
	uni.openLocation({
		longitude: groundInfo.value.longitude,
		latitude: groundInfo.value.latitude,
		name: groundInfo.value.title,
		address: groundInfo.value.address,
		success(res) {
			console.log('openLocation success: ', res)
		},
		fail(err) {
			console.log('openLocation fail: ', err)
		},
	})
}
</script>

<template>
	<view class="ground-box">
		<image :src="groundInfo.imgUrl" mode="widthFix" class="ground-img"></image>
		<view class="ground-title">{{ groundInfo?.title }}</view>
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/location.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">{{ groundInfo?.address }}</view>
			<view class="ground-detail-right">
				<image src="/static/navTo.png" mode="widthFix" @tap="handleTap"></image>
			</view>
		</view>
		<!-- 场馆热度 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/hot.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>场馆热度: {{ groundInfo?.hot }}</text>
				<text v-if="groundInfo?.hot === 'SSS'">(非常高)</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
		<!-- 营业时间 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/hot.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>营业时间: {{ groundInfo?.startTime }} - {{ groundInfo?.endTime }}</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
		<!-- 停车场 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/parking.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>停车场: {{ groundInfo?.isPark ? '有' : '无' }}</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
		<!-- 卫生间 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/toilet.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>卫生间: {{ groundInfo?.isToliet ? '有' : '无' }}</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
		<!-- 浴室 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/bathroom.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>浴室: {{ groundInfo?.isBathroom ? '有' : '无' }}</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
		<!-- 夜间灯光 -->
		<view class="ground-detail">
			<view class="ground-detail-left">
				<image src="/static/bathroom.png" mode="widthFix"></image>
			</view>
			<view class="ground-detail-center">
				<text>夜间灯光: {{ groundInfo?.isLight ? '有' : '无' }}</text>
			</view>
			<view class="ground-detail-right"></view>
		</view>
	</view>
</template>

<style>
.ground-box {
	width: 90%;
	margin: 0 auto;
}
.ground-box .ground-img {
	width: 100%;
	border-radius: 20rpx;
	margin-top: 20rpx;
}
.ground-title {
	height: 80rpx;
	line-height: 80rpx;
	font-size: 30rpx;
	font-weight: bold;
}

.ground-detail {
	height: 80rpx;
	width: 100%;
	display: flex;
	border-bottom: 1rpx solid #1296db;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}

.ground-detail-left,
.ground-detail-right {
	width: 80rpx;
	height: 80rpx;
}

.ground-detail-center {
	flex: 1;
	line-height: 80rpx;
}

.ground-detail-left image,
.ground-detail-right image {
	width: 60rpx;
	margin: 10rpx 0;
}
.ground-detail-right {
	text-align: right;
}
</style>
