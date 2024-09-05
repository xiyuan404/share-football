import {
	request
} from '../request'


export default {
	register(data) {
		return request.post('/register', data)
	}


}