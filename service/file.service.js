const connection = require('../sql')

class FileService {
  async getFileInfoByFilename(filename) {
    const statement = 'SELECT * from file WHERE filename = ?;'
    const [result] = await connection.execute(statement, [filename])
    return result
  }
}

module.exports = new FileService()
