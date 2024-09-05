<script setup>
const list = [
	{
		id: 1,
		name: '公众号',
		content: '共享足球',
		src: '/static/gzh.png',
	},
	{
		id: 2,
		name: '邮箱',
		content: 'footerball@000.com',
		src: '/static/email.png',
	},
	{
		id: 3,
		name: '客服电话',
		content: '000-00000000',
		src: '/static/phone.png',
	},
	{
		id: 4,
		name: '了解更多',
		content: '000-00000000',
		src: '/static/more.png',
	},
]

const handleItemTap = (item) => {
	switch (item.id) {
		case 1:
		case 2:
			uni.setClipboardData({
				data: item.content,
			})
			break
		case 3:
			uni.makePhoneCall({
				phoneNumber: item.content,
				fail(err) {
					console.log('call cancel')
				},
			})
		case 4:
			break

		default:
			break
	}
}
</script>

<template>
	<view class="about-box">
		<view class="about-top">
			<image class="about-logo" src="../../static/footerball.png" mode="widthFix"></image>
			<view class="about-slogan">文明其躯体，野蛮其灵魂</view>
		</view>
		<view class="about-bottom">
			<view class="about-bottom-item" v-for="item in list" :key="item.id" @tap="handleItemTap(item)">
				<image class="item-left" :src="item.src" mode="widthFix"></image>
				<view class="item-center">
					{{ item.name }}
				</view>
				<view class="item-right">{{ item.content }}</view>
			</view>
		</view>
	</view>
</template>

<style>
page {
	background-color: #f1f1f1;
}
.about-box {
	width: 80%;
	margin: 30rpx auto 0 auto;
	background-color: white;
}
.about-top {
	text-align: center;
}
.about-logo {
	width: 160rpx;
	border-radius: 50%;
	margin-top: 100rpx;
}

.about-slogan {
	height: 100rpx;
	line-height: 100rpx;
}

.about-bottom-item {
	height: 100rpx;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f1f1f1;
	box-sizing: border-box;
}
.about-bottom-item .item-left {
	width: 50rpx;
	margin: 0 20rpx;
}
.about-bottom-item .item-right {
	width: 300rpx;
	margin: 0 20rpx;
	color: #1296db;
	text-align: right;
}

.about-bottom-item .item-center {
	flex: 1;
}
</style>
