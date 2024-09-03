const wrapperMiddleware = async (ctx) => {
  const { body, status, message } = ctx
  ctx.body = {
    errCode: status === 200 ? 0 : -1,
    data: status === 200 ? body : null,
    message: message,
  }
}

module.exports = {
  wrapperMiddleware,
}
