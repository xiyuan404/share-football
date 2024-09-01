const mysql2 = require('mysql2')
const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} = require('./env')

const pool = mysql2.createPool(
  {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
  },
  function (err, results, fields) {
    console.log(results) // results contains rows returned by server
    console.log(fields) // fields contains extra meta data about results, if available
  }
)

module.exports = pool.promise()
