const {
  STADIUM_ID_IS_REQUIRED,
  ORDER_NO_IS_INVALID,
} = require('../error/errorType')
const orderService = require('../service/order.service')
const { orderNoGenerate } = require('../utils/orderNoHandles')

const verifyOrderCreate = async (ctx, next) => {
  const { stadiumId } = ctx.request.body

  // missing
  // 客户端端传递stadiumId和token,服务器生成orderNo,status和解析userId
  if (!stadiumId) {
    return ctx.app.emit('error', new Error(STADIUM_ID_IS_REQUIRED), ctx)
  }

  const orderNo = orderNoGenerate()
  const status = Math.round(Math.random())

  ctx.orderInfo = {
    orderNo,
    status,
    stadiumId,
  }

  await next()
}

const verifyOrderFinish = async (ctx, next) => {
  const { orderNo } = ctx.request.body
  // missing
  if (!orderNo) {
    return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
  }

  // noExist unfinished未完成支付

  const result = await orderService.getOrderInfoByOrderNo(orderNo)
  const [orderInfo] = result

  if (!result.length || !orderInfo.status) {
    return ctx.app.emit('error', new Error(ORDER_NO_IS_INVALID), ctx)
  }
  ctx.orderInfo = orderInfo

  await next()
}

module.exports = {
  verifyOrderCreate,
  verifyOrderFinish,
}
