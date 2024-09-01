const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const staticServer = require('koa-static')
const logger = require('koa-logger')

const errorHandler = require('./error')
const stadiumRouter = require('./router/stadium.router')

// 创建app实例
const app = new Koa()

// 注册中间件
app.use(bodyParser())
app.use(staticServer('static'))
app.use(logger())

app.use(stadiumRouter.routes())
app.use(stadiumRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app
