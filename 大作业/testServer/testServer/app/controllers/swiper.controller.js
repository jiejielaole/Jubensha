const db = require("../models")
const Swiper = db.swipers

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "剧本名称不能为空"
    })
    return
  }

  const swiper = {
    picUrl: req.body.picUrl,
    name: req.body.name,
  }

  Swiper.create(swiper).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "创建轮播剧本失败"
    })
  })
};

exports.findAll = (req, res) => {
  Swiper.findAll().then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "查询轮播剧本失败"
    })
  })
}