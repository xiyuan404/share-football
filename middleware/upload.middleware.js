const multer = require('@koa/multer')
const { v4 } = require('uuid')
const path = require('node:path')
const { FILE_IS_REQUIRED } = require('../error/errorType')
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null, v4() + path.extname(file.originalname))
    },
  }),
})

const uploadAvatar = upload.single('avatar')

const verifyUploadAvatar = async (ctx, next) => {
  const { file } = ctx.request
  console.log(file)
  console.log('upload file', ctx.request.body)

  if (!file) {
    return ctx.app.emit('error', new Error(FILE_IS_REQUIRED), ctx)
  }

  ctx.avatarInfo = file

  await next()
}
module.exports = {
  uploadAvatar,
  verifyUploadAvatar,
}
