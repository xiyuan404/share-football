const connection = require('../sql')

class RechargeService {
  async recharge({ orderNo, status, amount, userId }) {
    const statement =
      'INSERT INTO recharge (orderNo, status, amount, userId) VALUES (?, ?, ?, ?);'

    const [result] = await connection.execute(statement, [
      orderNo,
      status,
      amount,
      userId,
    ])
    return result
  }
}

module.exports = new RechargeService()
