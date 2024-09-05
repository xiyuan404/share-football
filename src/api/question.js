import {
	request
} from '../request'

export default {
	getQuestionList() {
		return request.get('/question/list')
	}
}