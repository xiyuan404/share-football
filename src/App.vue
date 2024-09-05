<script>
export default {
	globalData: {
		markers: [],
		questions: [],
		token: uni.getStorageSync('token') || null,
		userInfo: uni.getStorageSync('userInfo') || { name: '', avatar: '/static/batman.png', amount: 0 },
	},
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
}
</script>

<style>
/*每个页面公共css */
.button {
	width: 368rpx;
	margin: 0 auto;
	font-weight: bold;
	letter-spacing: 4rpx;
	background-color: #1296db;
	color: white;
}

.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
