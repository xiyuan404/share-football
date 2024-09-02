const userService = require('../service/user.service')
const { passwordEncrypt } = require('../utils/passwordHandler')

class RegisterController {
  async register(ctx) {
    const { username, password } = ctx.request.body

    try {
      const encryptedPassword = await passwordEncrypt(password)

      const result = await userService.register(username, encryptedPassword)
      console.log(result)
      ctx.body = 'register successfully'
    } catch (e) {
      console.log('controller', e)
    }
  }
}

module.exports = new RegisterController()
