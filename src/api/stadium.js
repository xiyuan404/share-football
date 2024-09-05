import {
	request
} from '../request'
export default {
	getStadiumList() {
		return request.get('/stadium/list')
	}
}