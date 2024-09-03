const connection = require('../sql')

class OrderService {
  async create(orderNo, status, userId, stadiumId, amount) {
    const statement =
      'INSERT INTO `order` (orderNo, status, userId, stadiumId, amount) VALUES (?, ?, ?, ?, ?);'
    const [result] = await connection.execute(statement, [
      orderNo,
      status,
      userId,
      stadiumId,
      amount,
    ])
    return result
  }

  async getOrderInfoByOrderNo(orderNo) {
    const statement = 'SELECT * FROM `order` WHERE orderNo = ?'
    const [result] = await connection.execute(statement, [orderNo])
    return result
  }

  async finish(orderNo) {
    const statement = 'UPDATE `order` SET status = ? WHERE orderNo = ?'
    const [result] = await connection.execute(statement, [0, orderNo])
    return result
  }

  async list(userId) {
    const statement = `SELECT 
      o.id, o.orderNo, o.\`status\`, o.amount, o.createAt, o.updateAt,
      JSON_OBJECT('id', s.id, 'name', s.name, 'address', s.address) stadium
    FROM \`order\` o
    LEFT JOIN \`user\` u ON u.id = o.userId
    LEFT JOIN stadium s ON s.id = o.stadiumId
    WHERE userId =?;`
    const [result] = await connection.execute(statement, [userId])
    return result
  }
}

module.exports = new OrderService()
