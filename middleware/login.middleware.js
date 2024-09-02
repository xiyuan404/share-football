const {
  NAME_AND_PASSWORD_IS_REQUIRE,
  USER_NAME_IS_EXIST,
  USER_IS_NOT_EXIST,
  PASSWORD_IS_INCORRECT,
} = require('../error/errorType')
const userService = require('../service/user.service')
const {
  passwordEncrypt,
  passwordDecrypt,
} = require('../utils/passwordHandlers')

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body
  if (!username || !password) {
    return ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRE), ctx)
  }

  const result = await userService.getUserInfoByName(username)

  if (!result.length) {
    return ctx.app.emit('error', new Error(USER_IS_NOT_EXIST), ctx)
  }

  const [userInfo] = result
  const isValidPassword = await passwordDecrypt(password, userInfo.password)

  if (!isValidPassword) {
    return ctx.app.emit('error', new Error(PASSWORD_IS_INCORRECT), ctx)
  }
  ctx.userInfo = userInfo
  await next()
}

module.exports = {
  verifyLogin,
}
