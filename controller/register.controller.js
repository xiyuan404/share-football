const userService = require('../service/user.service')
const { passwordEncrypt } = require('../utils/passwordHandlers')

class RegisterController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body

    const encryptedPassword = await passwordEncrypt(password)

    const result = await userService.register(username, encryptedPassword)
    if (result.insertId) {
      ctx.status = 200
      ctx.message = 'register successfully'
    }
    console.log(ctx.status)
    await next()
  }
}

module.exports = new RegisterController()
