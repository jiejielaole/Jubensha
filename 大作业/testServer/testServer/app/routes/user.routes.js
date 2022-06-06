const multer = require('multer')
const upload = multer({
  dest: 'upload/'
})

module.exports = app => {
  const users = require("../controllers/user.controller.js")
  var router = require("express").Router()
  router.post("/", users.create)
  router.get("/", users.findAll)
  router.post("/upload", upload.single('avatar'), users.updateImg)
  router.get("/finduser", users.finduser)
  router.post("/excel", upload.single('file'), users.addexcel)
  app.use('/api/users', router)
}