module.exports = app => {
  const yueches = require("../controllers/yueche.controller.js")
  var router = require("express").Router()
  router.post("/",yueches.create)
  router.get("/",yueches.findAll)
  app.use('/api/yueches',router)
}