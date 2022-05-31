const db = require("../models")
const Juben = db.jubens

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "剧本名称不能为空"
    })
  }

  const juben = {
    pic: req.body.pic,
    name: req.body.name,
    male: req.body.male,
    female: req.body.female,
    duration: req.body.duration,
    nd: req.body.nd,
    gg: req.body.gg,
    tc: req.body.tc,
    price: req.body.price,
    tags: req.body.tags,
    introduce: req.body.introduce,
    character: req.body.character,
  }

  Juben.create(juben).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "创建剧本失败"
    })
  })
};

exports.findAll = (req, res) => {
  Juben.findAll().then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "查询剧本失败"
    })
  })
}