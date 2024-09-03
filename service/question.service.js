const connection = require('../sql')
class QuestionService {
  async list() {
    const statement = `SELECT 
        qt.id, qt.\`name\`, 
        JSON_ARRAYAGG(JSON_OBJECT('id', qd.id, 'title', qd.title, 'answer', qd.answer)) detail
      FROM question_type qt
      LEFT JOIN question_detail qd 
      ON qd.typeId = qt.id
      GROUP BY qt.id`
    const [result] = await connection.execute(statement)
    return result
  }
}

module.exports = new QuestionService()
