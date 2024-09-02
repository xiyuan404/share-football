const {
  NAME_AND_PASSWORD_IS_REQUIRE,
  USER_NAME_IS_EXIST,
} = require('../error/errorType')

const userService = require('../service/user.service')

const verifyRegister = async (ctx, next) => {
  const { username, password } = ctx.request.body
  if (!username || !password) {
    return ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRE), ctx)
  }

  const result = await userService.getUserInfoByName(username)
  if (result.length > 0) {
    return ctx.app.emit('error', new Error(USER_NAME_IS_EXIST), ctx)
  }

  await next()
}

module.exports = {
  verifyRegister,
}
