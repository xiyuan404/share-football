const connection = require('../sql')

class UserService {
  async getUserInfoByName(username) {
    const statement = 'SELECT * FROM `user` WHERE  `name` = ?;'
    const [result] = await connection.execute(statement, [username])
    return result
  }

  async register(username, password) {
    try {
      const statement = 'INSERT INTO `user` (`name`, `password`) VALUES (?, ?);'
      const [result] = await connection.execute(statement, [username, password])
      return result
    } catch (err) {
      console.log('register', err)
    }
  }
}

module.exports = new UserService()
