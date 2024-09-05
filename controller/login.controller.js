const { tokenGenerate } = require('../utils/tokenHandlers')

class LoginController {
  async login(ctx, next) {
    const { userInfo } = ctx

    const { id, name, amount, avatar } = userInfo
    const token = tokenGenerate({ id, name, amount })
    ctx.body = {
      id,
      name,
      amount,
      avatar,
      token,
    }
    await next()
  }
}

module.exports = new LoginController()
