<script setup>
import { ref } from 'vue'

const app = getApp()

// 个人中心功能列表
const list = [
	{
		id: 1,
		type: 1,
		name: '我的钱包',
		src: '/static/wallet.png',
		path: '/pages/wallet/wallet',
	},
	{
		id: 2,
		type: 2,
		name: '会员充值',
		src: '/static/vip.png',
		path: '/pages/recharge/recharge',
	},
	{
		id: 3,
		type: 3,
		name: '我的订单',
		src: '/static/order.png',
		path: '/pages/order/order',
	},
	{
		id: 4,
		type: 4,
		name: '奖品兑换',
		src: '/static/change.png',
		path: '/pages/cdk/cdk',
	},
	{
		id: 5,
		type: 5,
		name: '客服中心',
		src: '/static/support.png',
		path: '/pages/contact/contact',
	},
	{
		id: 6,
		type: 6,
		name: '关于我们',
		src: '/static/about.png',
		path: '/pages/about/about',
	},
]

const handleItemTap = (item) => {
	switch (item.id) {
		case 1:
			console.log(item.name)
			uni.navigateTo({
				url: item.path,
			})
			break
		case 2:
			console.log(item.name)
			uni.navigateTo({
				url: item.path,
			})
			break
			break
		case 3:
			console.log(item.name)
			uni.navigateTo({
				url: item.path,
			})
			break
			break
		case 4:
			console.log(item.name)
			uni.navigateTo({
				url: item.path,
			})
			break
			break
		case 5:
			uni.navigateTo({
				url: '/pages/contact/contact',
			})
			break
		case 6:
			console.log(item.name)
			uni.navigateTo({
				url: item.path,
			})
			break
			break
		default:
			break
	}
}

const handleAvatarChoose = (e) => {
	app.globalData.userInfo.avatar = e.detial.avatarUrl
}
</script>

<template>
	<view class="profile-box">
		<view class="profile-top">
			<view class="profile-user">
				<button open-type="chooseAvatar" class="user-avatar-button" @chooseavatar="handleAvatarChoose">
					<image
						class="user-avatar-img"
						:src="app.globalData.userInfo.avatar || '/static/batman.png'"
						mode="widthFix"
					></image>
				</button>
				<view class="user-nickname ellipsis">app.globalData.userInfo.name || '-'</view>
			</view>
		</view>
		<view class="profile-bottom">
			<view class="item" v-for="item in list" :key="list.id">
				<image class="item-left" :src="item.src" mode="widthFix"></image>
				<view class="item.center">
					{{ item.name }}
				</view>
				<image class="item-right" src="/static/forward.png" mode="widthFix" @tap="handleItemTap(item)"></image>
			</view>
		</view>
	</view>
</template>

<style>
page {
	background-color: #f1f1f1;
}

.profile-box {
	width: 90%;
	margin: 0 auto;
}

.profile-top {
	background-color: white;
	height: 200rpx;
	display: flex;
	align-items: center;
}

.profile-user {
	display: flex;
}

.user-avatar-img {
	width: 100%;
	height: 100%;
}

.user-avatar-button {
	width: 120rpx;
	height: 120rpx;
	padding: 0;
	margin: 0 20rpx;
	border-radius: 50%;
}

.user-nickname {
	line-height: 120rpx;
	font-weight: bold;
	font-size: 50rpx;
	margin-right: 40rpx;
	flex: 1;
	width: 435rpx;
}

.profile-bottom {
	margin-top: 20rpx;
	background-color: white;
}

.item {
	display: flex;
	width: 100%;
	height: 100rpx;
	align-items: center;
}
.item:not(:last-child) {
	border-bottom: 1px solid #f1f1f1;
	box-sizing: border-box;
}

.item-left,
.item-right {
	width: 50rpx;
	margin: 0 20rpx;
}

.item-center {
	flex: 1;
	text-align: center;
}
</style>
