<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getContactQuestionByType } from '../../pages-data'
const list = ref([])

onLoad((opts) => {
	const type = +opts.type || 1
	if (type) {
		list.value = getContactQuestionByType(type)
	}
})
</script>

<template>
	<view class="question-box">
		<view v-for="(item, index) in list" :key="item.id">
			<view class="question-title">{{ index + 1 }}. {{ item.title }}</view>
			<view class="question-desc">
				{{ item.desc }}
			</view>
		</view>
	</view>
</template>

<style>
page {
	background-color: #f1f1f1;
}

.question-box {
	padding: 20rpx 5%;
	background-color: white;
}

.question-title {
	height: 100rpx;
	line-height: 100rpx;
	font-weight: bold;
	font-size: 40rpx;
}
.question-desc {
	font-size: 30rpx;
}
</style>
