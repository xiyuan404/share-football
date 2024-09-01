const connection = require('../sql')

class StadiumService {
  async list() {
    const statement = 'SELECT * FROM stadium;'
    try {
      const [result] = await connection.execute(statement)
      return result
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new StadiumService()
