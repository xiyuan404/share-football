<script setup>
import { onLoad } from '@dcloudio/uni-app'
// import { contactQuestion } from '../../pages-data'
import { ref } from 'vue'
import api from '../../api'

const contactQuestions = ref([])
const app = getApp()

onLoad((otps) => {
	api.getQuestionList().then((res) => {
		app.globalData.questions = contactQuestions.value = res.data.map((i) => {
			let src = ''
			switch (i.id) {
				case 1:
					src = '/static/flow.png'
					break
				case 2:
					src = '/static/machine.png'
					break
				case 3:
					src = '/static/deposit.png'
					break
				case 4:
					src = '/static/order.png'
					break
				case 5:
					src = '/static/repair.png'
					break
				case 6:
					src = '/static/more.png'
					break
				default:
					break
			}

			return {
				...i,
				src,
			}
		})
	})
})

const handleItemTap = (item) => {
	console.log('item Tap fired: ', item)
	uni.navigateTo({
		url: `/pages/question/question?type=${item.id}`,
	})
}

const handleContactTap = (e) => {
	console.log(e)
}

const handleCallTap = (e) => {
	console.log(e)
}
</script>

<template>
	<view class="contact-box">
		<view class="contact-top">
			<view class="contact-top-title">24小时为你解答疑问</view>
			<!-- #ifdef MP-WEIXIN -->
			<button open-type="contact" @contact="handleContactTap" class="contact-top-button">在线客服</button>

			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<button @tap="handleCallTap" class="contact-top-button">拨打电话</button>
			<!-- #endif -->
		</view>
		<view class="contact-bottom">
			<view class="contact-bottom-title">常见问题</view>
			<view class="contact-bottom-list">
				<view class="item" v-for="item in contactQuestions" :key="item.id" @tap="handleItemTap(item)">
					<image :src="item.src" mode="widthFix"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<style>
page {
	background-color: #f1f1f1;
}

.contact-top {
	height: 300rpx;
	text-align: center;
	background-color: white;
}

.contact-top-title {
	height: 150rpx;
	line-height: 150rpx;
	font-weight: bold;
	text-align: center;
}

.contact-top-button {
	width: 368rpx;
	color: white;
	background-color: #1296db;
	font-weight: bold;
	letter-spacing: 2rpx;
	margin: 0 auto;
}

.contact-bottom {
	margin-top: 20rpx;
	background-color: white;
}
.contact-bottom-title {
	height: 100rpx;
	line-height: 100rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	border-bottom: 2px solid #f1f1f1;
}

.contact-bottom-list {
	display: flex;
	flex-wrap: wrap;
}

.contact-bottom-list .item {
	width: 50%;
	height: 120rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.contact-bottom-list .item image {
	width: 50rpx;
	margin-right: 10rpx;
}

.contact-bottom-list .item:nth-child(odd) {
	border-right: 4px solid #f1f1f1;
	box-sizing: border-box;
}
/* 除了最后两个元素 */
.item:not(:nth-last-child(-n + 2)) {
	border-bottom: 4rpx solid #f1f1f1;
	box-sizing: border-box;
}
</style>
