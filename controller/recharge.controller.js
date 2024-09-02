const rechargeService = require('../service/recharge.service')
const userService = require('../service/user.service')

class RechargeController {
  async recharge(ctx) {
    try {
      console.log(ctx.rechargeInfo)

      // const { id: userId, amount: accountAmount } = ctx.userInfo 从 token中拿到的amount是旧的钱
      const { id: userId, name } = ctx.userInfo

      const { orderNo, status, amount } = ctx.rechargeInfo

      const result = await rechargeService.recharge({
        orderNo,
        status,
        amount,
        userId,
      })

      if (result.insertId) {
        if (status) {
          const [userInfo] = await userService.getUserInfoByName(name)
          await userService.updateUserAmount(+userInfo.amount + amount, userId)
          ctx.body = '充值成功'
        } else {
          ctx.body = '充值失败'
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new RechargeController()
