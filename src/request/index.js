class Request {

	constructor(domain) {
		this.domain = domain
	}

	request(path, method, data) {
		uni.showLoading({
			title: "loading",
			mask: true
		})
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.domain}${path}`,
				method,
				data,
				success(res) {
					if (res.data && !res.data.errCode) {
						resolve(res.data)
					} else {
						reject(data.message)
					}
				},
				fail(err) {
					reject(err.errMsg || '请求数据错误')
				},
				complete() {
					uni.hideLoading()
				}

			})
		})
	}

	get(path, data) {
		return this.request(path, "GET", data)
	}
	post(path, data) {
		return this.request(path, "POST", data)
	}
}

export const request = new Request("http://localhost:9000")