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

  async updateUserAmount(amount, id) {
    const statement = 'UPDATE `user` SET AMOUNT = ? WHERE id = ?;'
    const [result] = await connection.execute(statement, [amount, id])
    return result
  }
}

module.exports = new UserService()
