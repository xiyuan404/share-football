const {
  NAME_AND_PASSWORD_IS_REQUIRE,
  USER_NAME_IS_EXIST,
  USER_IS_NOT_EXIST,
  PASSWORD_IS_INCORRECT,
} = require('./errorType')

function errorHandler(err, ctx) {
  let status = 200
  let message = 'success'
  switch (err.message) {
    case NAME_AND_PASSWORD_IS_REQUIRE:
      status = 400
      message = NAME_AND_PASSWORD_IS_REQUIRE
      break
    case USER_NAME_IS_EXIST:
      status = 400
      message = USER_NAME_IS_EXIST
    case USER_IS_NOT_EXIST:
      status = 400
      message = USER_IS_NOT_EXIST
    case PASSWORD_IS_INCORRECT:
      status = 400
      message = PASSWORD_IS_INCORRECT
    default:
      break
  }
  ctx.status = status
  ctx.message = message
}

module.exports = errorHandler
