// 接口调用鉴权

const app = getApp()


class FileUploader {

	constructor(domain) {
		this.domain = domain
	}

	upload(url, filePath, name) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: `${this.domain}${url}`,
				filePath,
				name,
				header: {
					"Authorization": `Bearer ${app.globalData.token}`
				},
				success(res) {
					console.log(res)
					resolve(res.data)
				},
				fail(err) {
					console.log(err)
					reject(err.errMsg || "文件上传出错")
				}
			})
		})
	}
	uploadAvatar(filePath) {
		return this.upload('/upload/avatar', filePath, 'avatar')
	}
}

export const uploader = new FileUploader('http://localhost:9000')