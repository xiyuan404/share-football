import {
	request
} from '../request'


export default {
	orderCreate(data) {
		return request.post('/order/create', data)
	},
	orderFinish(data) {
		return request.post('/order/finsih', data)
	},
	orderList() {
		return request.get('/order/list')
	}
}