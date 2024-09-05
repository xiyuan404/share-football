<script setup>
import { ref } from 'vue'

const avatar = ref('')
const nickname = ref('')
const password = ref('')
const toLogin = ref(true)

const handleAvatarChoose = (e) => {
	console.log('AvatarChoose fired: ', e)
	// 获取的头像地址替换初始头像地址
	avatar.value = e.detail.avatarUrl
}

const handleNicknameChange = (e) => {
	console.log('NicknameChange fired', e)
	nickname.value = e.detail.value
}

const handlePasswordChange = (e) => {
	password.value = e.detail.value
}

const handleSubmit = () => {
	console.log('onSubmit', {
		nickname: nickname.value,
		avatar: avatar.value,
		password: password.value,
	})
}

const handleLoginToggle = () => {
	toLogin.value = !toLogin.value
}
</script>

<template>
	<!-- <button open-type="chooseAvatar" class="login-button" @chooseavatar="handleAvatarChoose">
		<image class="login-avatar" :src="avatar" mode="widthFix"></image>
	</button> -->
	<view class="login-box">
		<view class="login-info">
			<view class="login-label">用户名</view>
			<input
				class="login-nickname"
				placeholder="请输入用户名..."
				type="nickname"
				@change="handleNicknameChange"
			/>
		</view>
		<view class="login-info">
			<view class="login-label">密码</view>
			<input
				class="login-nickname"
				placeholder="请输入密码..."
				type="text"
				password
				@change="handlePasswordChange"
			/>
		</view>
		<view class="login-toggle" @tap="handleLoginToggle">
			<!-- {{ showLoginTip ? '已有账号，跳转登录' : '没有账号，跳转注册' }} -->
			{{ toLogin ? '没有账号，跳转注册' : '已有账号，跳转登录' }}
		</view>
		<button class="button" form-type="submit" @tap="handleSubmit">{{ toLogin ? '登录' : '注册' }}</button>
	</view>
</template>

<style>
.login-box {
	margin-top: 50rpx;
}

.login-info {
	display: flex;
	margin-bottom: 50rpx;
}

.login-label {
	width: 100rpx;
	margin: 0 50rpx;
}

.login-nickname {
	flex: 1;
	margin-right: 20rpx;
}

.login-toggle {
	height: 50rpx;
	line-hegiht: 50rpx;
	text-align: center;
	color: #1296db;
	text-decoration: underline;
}
</style>
