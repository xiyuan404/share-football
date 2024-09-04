// 地图标点数据
export const markers = [{
		id: 1,
		latitude: 23.04,
		longitude: 113.37,
		title: "承运足球场",
		iconPath: "/static/icon.png",
		width: 40,
		height: 40,
		address: "机场路138号飞翔公园C出口",
	},
	{
		id: 2,
		latitude: 23.16,
		longitude: 113.34,
		title: "华南理工大学足球场",
		iconPath: "/static/icon.png",
		width: 40,
		height: 40,
		address: "五山路381号"
	}
]

// 场馆信息
const groundInfo = [{
		id: 1,
		title: '虹桥足球场',
		address: '诸光路9999弄',
		imgUrl: 'https://img.qtx.com/asset/ec/7a/63/0a3f99a3392ea8e3cb7a9d151bf92928.jpeg',
		hot: 'SSS',
		startTime: '12:00',
		endTime: '22:00',
		isPark: true,
		isToilet: true,
		isBathRoom: true,
		isLight: true,
	},
	{
		id: 2,
		title: '佘山足球场',
		address: '海市松江区佘山镇外青松公路9999号',
		imgUrl: 'https://img.qtx.com/asset/ec/7a/63/0a3f99a3392ea8e3cb7a9d151bf92928.jpeg',
		hot: 'S',
		startTime: '14:00',
		endTime: '20:00',
		isPark: false,
		isToilet: false,
		isBathRoom: false,
		isLight: false,
	}
];

// 根据 id 获取用户信息
export const getGroundInfoById = (id) => {
	const marker = markers.find(i => i.id === id)
	const info = groundInfo.find(i => i.id === id)
	info.marker = marker
	return info
};

// 客服问题类型
export const contactQuestion = [{
		id: 1,
		type: 1,
		src: '/static/flow.png',
		name: '租借流程'
	},
	{
		id: 2,
		type: 2,
		src: '/static/machine.png',
		name: '设备问题'
	},
	{
		id: 3,
		type: 3,
		src: '/static/deposit.png',
		name: '押金退还'
	},
	{
		id: 4,
		type: 4,
		src: '/static/order.png',
		name: '订单计费'
	},
	{
		id: 5,
		type: 5,
		src: '/static/repair.png',
		name: '故障报修'
	},
	{
		id: 6,
		type: 6,
		src: '/static/more.png',
		name: '更多疑问'
	},
]

// 问题详情
export const getContactQuestionByType = (type) => {
	switch (type) {
		case 1:
			return [{
				id: 1,
				type: 1,
				title: '如何租借租球',
				desc: '进入【共享足球】小程序首页后点击【扫码租借】后识别对应设备的二维码即可打开柜门取出足球。'
			}]
		case 2:
			return [{
					id: 2,
					type: 2,
					title: '扫码之后没有开门（无响应）',
					desc: '请查看柜门指示灯是否正常闪烁，如已熄灭，请联系场馆前台帮您通电。'
				},
				{
					id: 3,
					type: 2,
					title: '扫码之后取出的足球不满意',
					desc: '前五分钟为免费试用，您可以随意更换直到满意为止；如果都未达到您的要求，可以尝试更换其他的设备哦。'
				}
			]
		case 3:
			return [{
					id: 4,
					type: 3,
					title: '押金面额',
					desc: '为保证足球能在正常使用完归还，用球前需支付押金 0 元。'
				},
				{
					id: 5,
					type: 3,
					title: '押金充值形式',
					desc: '支持信用分免押金及用户手动充值。'
				},
				{
					id: 6,
					type: 3,
					title: '押金退还',
					desc: '用球订单结束之后，押金会订单结束后进行结算并将剩余金额退还至您的充值账户。'
				},
			]
		case 4:
			return [{
				id: 7,
				type: 4,
				title: '计费详情',
				desc: '用球前 5 分钟免费，超出后按照“0元/次”进行计费。'
			}]
		case 5:
			return [{
					id: 11,
					type: 5,
					title: '设备外观已损坏或变形',
					desc: '设备已经出现故障且无法使用，请移步更换至其他设备进行租借。'
				},
				{
					id: 12,
					type: 5,
					title: '设备已空没有球了',
					desc: '可能当前设备足球已经都在租借尚未归还，请移步更换至其他设备进行租借。'
				},
				{
					id: 13,
					type: 5,
					title: '足球气不足',
					desc: '由于天气和气温的缘故导致，我们已为您提供充气服务，请移步至设备背面使用打气筒进行充气。'
				}
			]
		case 6:
			return [{
				id: 14,
				type: 6,
				title: '其他问题',
				desc: '可以使用在线客服、电话联系进行详情咨询。'
			}]
		default:
			return [];
	}
}