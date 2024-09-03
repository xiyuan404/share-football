const Router = require('@koa/router')
const { verifyFile } = require('../middleware/file.middleware')
const fileController = require('../controller/file.controller')

const router = new Router({ prefix: '/file' })

router.get('/:filename', verifyFile, fileController.read)

module.exports = router
