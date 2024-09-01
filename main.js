const app = require('./app.js')
const { APP_PORT, APP_HOST } = require('./env.js')

app.listen(APP_PORT, () => {
  console.log(`server is started on ${APP_HOST}:${APP_PORT}`)
})
