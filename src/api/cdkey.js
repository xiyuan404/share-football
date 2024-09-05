import {
	request
} from '../request'


export default {
	cdkeyExchange(data) {
		return request.post('/cdkey/exchange', data)
	}
}