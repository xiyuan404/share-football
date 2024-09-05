<script setup>
import { ref } from 'vue'

const avatar = ref('')
const nickname = ref('')

const handleAvatarChoose = (e) => {
	console.log('AvatarChoose fired: ', e)
	// 获取的头像地址替换初始头像地址
	avatar.value = e.detail.avatarUrl
}

const handleNicknameChange = (e) => {
	console.log('NicknameChange fired', e)
	nickname.value = e.detail.value
}

const handleSubmit = () => {
	console.log('onSubmit', {
		nickname: nickname.value,
		avatar: avatar.value,
	})
}
</script>

<template>
	<button open-type="chooseAvatar" class="login-button" @chooseavatar="handleAvatarChoose">
		<image class="login-avatar" :src="avatar" mode="widthFix"></image>
	</button>
	<view class="login-info">
		<view class="login-label">用户昵称</view>
		<input class="login-nickname" placeholder="请输入你的昵称..." type="nickname" @change="handleNicknameChange" />
	</view>
	<button class="button" form-type="submit" @tap="handleSubmit">注册登录</button>
</template>

<style>
.login-button {
	width: 120rpx;
	height: 120rpx;
	margin: 50rpx auto;
	padding: 0;
}
.login-avatar {
	width: 100%;
	height: 100%;
}

.login-info {
	display: flex;
	margin-bottom: 50rpx;
}

.login-label {
	margin: 0 50rpx;
}

.login-nickname {
	flex: 1;
	margin-right: 20rpx;
}
</style>
