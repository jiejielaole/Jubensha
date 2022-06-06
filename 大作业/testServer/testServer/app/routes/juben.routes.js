module.exports = app => {
  const jubens = require("../controllers/juben.controller.js")
  var router = require("express").Router()
  router.post("/", jubens.create)
  router.get("/", jubens.findAll)
  app.use('/api/jubens', router)
}