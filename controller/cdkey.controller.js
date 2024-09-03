const cdkeyService = require('../service/cdkey.service')

class CdkeyController {
  async exchange(ctx) {
    const { cdkeyInfo, userInfo } = ctx
    try {
      const result = await cdkeyService.updateCDkeyStatus(
        userInfo.id,
        cdkeyInfo.id
      )
      console.log(result)
      ctx.body = '兑换成功'
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CdkeyController()
