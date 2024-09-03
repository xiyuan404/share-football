const uploadService = require('../service/upload.service')
const userService = require('../service/user.service')
const { APP_HOST, APP_PORT } = require('../env')

class UploadController {
  async avatar(ctx) {
    const { filename, mimetype, size } = ctx.avatarInfo
    const { id } = ctx.userInfo
    const result = await uploadService.insertFile(filename, mimetype, size, id)
    if (result.insertId) {
      //https://xxx.com/xx.png
      const avatar = `${APP_HOST}:${APP_PORT}/file/${filename}`
      await userService.updateUserAvatar(avatar, id)
    }
    ctx.body = '上传成功'
  }
}

module.exports = new UploadController()
