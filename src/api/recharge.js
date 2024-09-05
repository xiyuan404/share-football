import {
	request
} from '../request'



export default {
	recharge(data) {
		return request.post("/recharge", data)
	}
}