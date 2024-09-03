const { ORDER_NO_IS_INVALID } = require('../error/errorType')
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
      status ? 15 : 0
    )

    if (result.insertId) {
      if (status) {
        ctx.body = orderNo
      } else {
        return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
      }
    }

    ctx['_message_'] = '订单创建成功'
    ctx.status = 200
    await next()
  }

  async finish(ctx, next) {
    const { orderNo } = ctx.orderInfo
    const { name, id } = ctx.userInfo
    const result = await orderService.finish(orderNo)

    if (result.affectedRows) {
      const [userInfo] = await userService.getUserInfoByName(name)
      await userService.updateUserAmount(+userInfo.amount - 15 * 100, id)
    } else {
      return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
    }

    ctx.message = '结束订单'
    await next()
  }

  async list(ctx, next) {
    const { id } = ctx.userInfo

    const result = await orderService.list(id)
    ctx.body = result
    await next()
  }
}

module.exports = new OrderController()
