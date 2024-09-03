const questionService = require('../service/question.service')

class QuestionController {
  async list(ctx) {
    try {
      const result = await questionService.list()
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new QuestionController()
