const jwt = require('jsonwebtoken')

const { PUBLIC_KEY, PRIVATE_KEY } = require('../env')

console.log('private-key', PRIVATE_KEY)

const tokenGenerate = (payload) => {
  const result = jwt.sign(payload, PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: '1d',
  })
  return result
}

const tokenParse = (token) => {
  const result = jwt.verify(token, PUBLIC_KEY, {
    algorithms: ['RS256'],
  })
  return result
}

module.exports = {
  tokenGenerate,
  tokenParse,
}
