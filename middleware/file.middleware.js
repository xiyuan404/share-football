const { FILE_IS_NOT_FOUND } = require('../error/errorType')
const fileService = require('../service/file.service')

const verifyFile = async (ctx, next) => {
  // verify file exists
  const { filename } = ctx.request.params

  const [fileInfo] = await fileService.getFileInfoByFilename(filename)

  if (!fileInfo) {
    return ctx.app.emit('error', new Error(FILE_IS_NOT_FOUND), ctx)
  }

  ctx.fileInfo = fileInfo
  await next()
}

module.exports = {
  verifyFile,
}
