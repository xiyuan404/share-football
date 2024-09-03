const { CDKEY_IS_MISSING, CDKEY_IS_INVALID } = require('../error/errorType')
const cdkeyService = require('../service/cdkey.service')

const verifyCDkey = async (ctx, next) => {
  const { code } = ctx.request.body
  // missing field
  if (!code) {
    return ctx.app.emit('error', new Error(CDKEY_IS_MISSING), ctx)
  }
  // cdkey info not found or exchangeable already
  const result = await cdkeyService.getCDkeyByCode(code)

  const [cdkeyInfo] = result

  if (!result.length || !cdkeyInfo.status) {
    return ctx.app.emit('error', new Error(CDKEY_IS_INVALID), ctx)
  }

  ctx.cdkeyInfo = cdkeyInfo

  await next()
}

module.exports = {
  verifyCDkey,
}
