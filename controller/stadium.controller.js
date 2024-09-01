const stadiumService = require('../service/stadium.service')

class StadiumController {
  async list(ctx, next) {
    const result = await stadiumService.list()
    console.log('result', result)
    ctx.body = result
    await next()
  }
}

module.exports = new StadiumController()
