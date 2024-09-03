const Router = require('@koa/router')
const { verifyAuth } = require('../middleware/auth.middleware')
const questionController = require('../controller/question.controller')

const router = new Router({ prefix: '/question' })

router.get('/list', verifyAuth, questionController.list)

module.exports = router
