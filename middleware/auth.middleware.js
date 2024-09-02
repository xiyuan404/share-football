const { TOKEN_IS_INVALID, TOKEN_IS_MISSING } = require('../error/errorType')
const { tokenParse } = require('../utils/tokenHandlers')

const verifyAuth = async (ctx, next) => {
  // console.log(ctx.request.header)

  const { authorization } = ctx.request.header

  // lacks valid authentication credentials, such as a missing or invalid token.
  if (!authorization) {
    return ctx.app.emit('error', new Error(TOKEN_IS_MISSING), ctx)
  }
  // 解析从请求头中拿到的token
  const token = authorization.replace('Bearer ', '')
  // token过期或无效的错误的捕获
  let userInfo = null
  try {
    userInfo = tokenParse(token)
  } catch (error) {
    return ctx.app.emit('error', new Error(TOKEN_IS_INVALID), ctx)
  }
  // 为下一个中间件挂载userinfo
  ctx.userInfo = userInfo
  await next()
}

module.exports = {
  verifyAuth,
}
