const { AMOUNT_IS_INVALID } = require('../error/errorType')

const { orderNoGenerate } = require('../utils/orderNoHandles')
const verifyRecharge = async (ctx, next) => {
  // dto字段校验
  const { amount } = ctx.request.body
  const { id } = ctx.userInfo

  // 没传missing或字段错了amount1 -> undefined
  if (!amount) {
    return ctx.app.emit('error', new Error(AMOUNT_IS_INVALID), ctx)
  }

  const status = Math.round(Math.random())
  const orderNo = orderNoGenerate()
  ctx.rechargeInfo = {
    orderNo,
    status,
    amount,
  }

  await next()
}

module.exports = {
  verifyRecharge,
}
