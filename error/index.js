const { NAME_AND_PASSWORD_IS_REQUIRE } = require('./errorType')

function errorHandler(err, ctx) {
  let status = 200
  let message = 'success'
  switch (err.message) {
    case NAME_AND_PASSWORD_IS_REQUIRE:
      status = 400
      message = NAME_AND_PASSWORD_IS_REQUIRE
      break
    default:
      break
  }
  ctx.status = status
  ctx.message = message
}

module.exports = errorHandler
