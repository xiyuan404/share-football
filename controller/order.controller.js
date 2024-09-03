const orderService = require('../service/order.service')
const userService = require('../service/user.service')

class OrderController {
  async create(ctx, next) {
    console.log(ctx.orderInfo, ctx.userInfo)
    const { id: userId } = ctx.userInfo
    const { orderNo, status, stadiumId } = ctx.orderInfo

    const result = await orderService.create(
      orderNo,
      status,
      userId,
      stadiumId,
      status ? 15 * 100 : 0
    )
    if (result.insertId) {
      if (status) {
        ctx.body = {
          orderNo,
          message: '订单创建成功',
        }
      } else {
        ctx.body = '订单创建失败'
      }
    }
  }

  async finish(ctx, next) {
    try {
      const { orderNo } = ctx.orderInfo
      const { name, id } = ctx.userInfo
      const result = await orderService.finish(orderNo)

      if (result.affectedRows) {
        const [userInfo] = await userService.getUserInfoByName(name)
        await userService.updateUserAmount(+userInfo.amount - 15 * 100, id)
        ctx.body = '结束订单'
      }
    } catch (error) {
      console.log(error)
    }
  }

  async list(ctx, next) {
    const { id } = ctx.userInfo
    try {
      const result = await orderService.list(id)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new OrderController()
