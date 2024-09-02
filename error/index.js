const {
  NAME_AND_PASSWORD_IS_REQUIRE,
  USER_NAME_IS_EXIST,
  USER_IS_NOT_EXIST,
  PASSWORD_IS_INCORRECT,
  TOKEN_IS_INVALID,
  TOKEN_IS_MISSING,
  AMOUNT_IS_INVALID,
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
      break
    case USER_IS_NOT_EXIST:
      status = 400
      message = USER_IS_NOT_EXIST
      break
    case PASSWORD_IS_INCORRECT:
      status = 400
      message = PASSWORD_IS_INCORRECT
      break
    case TOKEN_IS_MISSING:
      status = 401
      message = TOKEN_IS_MISSING
      break
    case TOKEN_IS_INVALID:
      status = 403
      message = TOKEN_IS_INVALID
      break
    case AMOUNT_IS_INVALID:
      status = 400
      message = AMOUNT_IS_INVALID
      break
    default:
      break
  }
  ctx.status = status
  ctx.message = message
}

module.exports = errorHandler
