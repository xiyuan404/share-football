<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// import { markers } from '../../pages-data'
import api from '../../api'

const longitude = ref(0)
const latitude = ref(0)
const currMarker = ref(null)
const isScan = ref(true)

const markers = ref([])
const app = getApp()
onLoad(() => {
	uni.getLocation({
		geocode: true,
		success(res) {
			console.log('getLocation: ', res)
			longitude.value = res.longitude
			latitude.value = res.latitude
		},
		fail(err) {
			console.log(err)
		},
	})

	api.getStadiumList().then((res) => {
		console.log('stadium list: ', res.data)
		app.globalData.markers = markers.value = res.data.map((item) => {
			return {
				...item,
				width: 40,
				height: 40,
				iconPath: '/static/icon.png',
				latitude: +item.latitude,
				longitude: +item.longitude,
				title: item.name,
			}
		})
	})
})

const handleMarkerTap = (e) => {
	console.log('MarkerTap fired: ', e.detail)
	const markerInfo = markers.value.find((marker) => marker.id === e.detail.markerId)
	console.log('markerInfo', markerInfo)
	currMarker.value = markerInfo
	isScan.value = false
}
const handleMapTap = (e) => {
	console.log('MapTap fired: ', e)
	// isScan.value = true
}

// 设备API(扫码功能)调用
const handleScan = (e) => {
	uni.scanCode({
		success(res) {
			console.log('scanResult:', res)
		},
	})
}

// 调用导航API
const handleNav = (e) => {
	// 仅测试监听函数是否绑定成功
	console.log('navTap fired', e)
	console.log('nav:', currMarker)
	uni.navigateTo({
		url: `/pages/ground/ground?id=${currMarker.value.id}`,
	})
}

// 图标渲染列表，静态数据不用响应式
const actionList = [
	{ id: 1, src: '/static/search.png', name: '地图搜索' },
	{ id: 2, src: '/static/support.png', name: '客服支持' },
	{ id: 3, src: '/static/origin.png', name: '回到原点' },
	{ id: 4, src: '/static/profile.png', name: '个人中心' },
]

// 处理图标点击
const handleImgTap = (item) => {
	// 传参校验
	switch (item.id) {
		case 1:
			console.log('handleImgTap: ')
			uni.chooseLocation({
				success(res) {
					latitude.value = res.latitude
					longitude.value = res.longitude
				},
				fail(res) {
					console.log('choose Location failed: ', res)
				},
			})
			break
		case 2:
			uni.navigateTo({
				url: '/pages/contact/contact',
			})
			break
		case 3:
			const mapContext = uni.createMapContext('map')
			mapContext.moveToLocation()
			break
		case 4:
			// 个人中心登录校验
			if (!app.globalData.token) {
				uni.showModal({
					title: '尚未登录，点击登录？',
					success(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
					},
				})
				return
			}
			uni.navigateTo({
				url: '/pages/profile/profile',
			})
			break
		default:
			break
	}
}
</script>

<template>
	<view class="map-container">
		<map
			class="map"
			id="map"
			:longitude="longitude"
			:latitude="latitude"
			show-location
			:scale="10"
			:markers="markers"
			@markertap="handleMarkerTap"
			@tap="handleMapTap"
		></map>
		<view v-show="isScan" class="scan-box scan-title" @tap="handleScan">扫码借还</view>
		<view v-show="!isScan" class="scan-box marker-summary">
			<view class="scan-box-left">
				<!-- <image src="/static/logo.png" mode="widthFix"></image> -->
				<image :src="currMarker?.iconPath" mode="widthFix"></image>
			</view>
			<view class="scan-box-center">
				<!-- <view class="top scan-box-center-item">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</view> -->
				<view class="top scan-box-center-item">{{ currMarker?.title || '-' }}</view>
				<view class="bottom scan-box-center-item">{{ currMarker?.address || '-' }}</view>
			</view>
			<view class="scan-box-right">
				<image src="/static/nav.png" mode="widthFix" @tap="handleNav"></image>
			</view>
		</view>
		<view class="action-box">
			<image
				v-for="action in actionList"
				:key="action.id"
				@tap="handleImgTap(action)"
				:src="action.src"
				mode="widthFix"
			></image>
		</view>
	</view>
</template>

<style>
.map-container {
	position: absolute;
}
.map {
	width: 100vw;
	height: 100vh;
}
.scan-box {
	width: 80%;
	height: 120rpx;
	position: absolute;
	left: 10%;
	bottom: 100rpx;
	border-radius: 20rpx;
	padding: 20rpx 0;
	background-color: #1296db;
	box-shadow: 4rpx 8rpx 8rpx #1296db;
	display: flex;
}

.marker-summary {
	background-color: white;
}
.scan-box-center {
	flex: 1;
}

.scan-box-left,
.scan-box-right {
	width: 120rpx;
	height: 100%;
	margin: 0 20rpx;
}

.scan-box-left image {
	width: 100%;
	border-radius: 50%;
}

.scan-box-right image {
	width: 80%;
	margin: 10% 0 0 10%;
}

.scan-box-center-item {
	height: 60rpx;
	line-height: 60rpx;
	width: 280rpx;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.top {
	font-weight: bold;
}
.bottom {
	font-size: 28rpx;
}
.scan-title {
	font-size: 50rpx;
	font-weight: bold;
	letter-spacing: 4rpx;
	align-items: center;
	justify-content: center;
	color: white;
}
.action-box {
	position: absolute;
	right: 10%;
	bottom: 300rpx;
	width: 90rpx;
}
.action-box image {
	border-radius: 50%;
	padding: 20rpx;
	width: 50rpx;
	margin-bottom: 20rpx;
	box-shadow: 0 0 20rpx #1296db;
	background-color: white;
}
</style>
