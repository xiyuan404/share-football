const connection = require('../sql')
class CDKeyService {
  async getCDkeyByCode(code) {
    const statement = 'SELECT * FROM cdkey WHERE `code` = ?;'
    const [result] = await connection.execute(statement, [code])
    return result
  }
  async updateCDkeyStatus(userId, id) {
    const statement = 'UPDATE cdkey set status = ?, userId = ? WHERE id = ?;'
    const [result] = await connection.execute(statement, [0, userId, id])
    return result
  }
}

module.exports = new CDKeyService()
