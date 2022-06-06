module.exports = app => {
  const swipers = require("../controllers/swiper.controller.js")
  var router = require("express").Router()
  router.post("/", swipers.create)
  router.get("/", swipers.findAll)
  app.use('/api/swipers', router)
}