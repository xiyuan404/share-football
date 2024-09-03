const Router = require('@koa/router')
const cdkeyController = require('../controller/cdkey.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { verifyCDkey } = require('../middleware/cdkey.middleware')

const router = new Router({ prefix: '/cdkey' })

router.post('/exchange', verifyAuth, verifyCDkey, cdkeyController.exchange)

module.exports = router
