const db = require("../models")
const Yueche = db.yueches

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "剧本名称不能为空"
    })
  }

  const yueche = {
    picUrl: req.body.picUrl,
    name: req.body.name,
    pcount: req.body.pcount,
    bming: req.body.bming,
    date: req.body.date,
    changci: req.body.changci,
    time: req.body.time
  }

  Yueche.create(yueche).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "创建约车剧本失败"
    })
  })
};

exports.findAll = (req,res) => {
  Yueche.findAll().then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "查询约车剧本失败"
    })
  })
}