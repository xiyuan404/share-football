const Router = require('@koa/router')
const { verifyRegister } = require('../middleware/register.middleware')
const registerController = require('../controller/register.controller')

const router = new Router({ prefix: '/register' })

router.post('/', verifyRegister, registerController.register)

module.exports = router
