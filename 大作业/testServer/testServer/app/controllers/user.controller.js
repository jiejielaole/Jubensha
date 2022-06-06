const db = require("../models")
const User = db.users
let fs = require('fs');
let path = require('path');
var xlsx = require('node-xlsx');

exports.create = (req, res) => {
  if (!req.body.tel) {
    res.status(400).send({
      message: "电话不能为空"
    })
    return
  } else if (!req.body.name) {
    res.status(401).send({
      message: "用户名不能为空"
    })
    return
  } else if (!req.body.password) {
    res.status(402).send({
      message: "密码不能为空"
    })
    return
  }

  const user = {
    tel: req.body.tel,
    name: req.body.name,
    password: req.body.password,
    img: req.body.img
  }

  User.create(user).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "创建用户失败"
    })
  })
};

exports.findAll = (req, res) => {
  User.findAll().then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "查询用户失败"
    })
  })
}

exports.updateImg = (req, res) => {
  console.log(req.body.name)
  const file = req.file
  console.log(path.parse(req.file.originalname).ext);
  let oldname = req.file.path //获取path: 'public\\upload\\0f625978d5d1a783b12e149718f8b634',
  let newname = req.file.path + path.parse(req.file.originalname).ext
  fs.renameSync(oldname, newname)
  console.log(newname)
  console.log(file.filename + path.parse(req.file.originalname).ext)
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)
  User.update({
    img: 'http://localhost:3000/' + file.filename + path.parse(req.file.originalname).ext
  }, {
    where: {
      name: req.body.name
    }
  })
  res.send({
    code: 200
  })
}

exports.finduser = (req, res) => {
  let name = req.query.name
  console.log(name)
  User.findAll({
    where: {
      name: name
    }
  }).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "查询用户失败"
    })
  })
}

exports.addexcel = (req, res) => {
  const file = req.file
  console.log(file)
  let oldname = req.file.path //获取path: 'public\\upload\\0f625978d5d1a783b12e149718f8b634',
  let newname = req.file.path + path.parse(req.file.originalname).ext
  fs.renameSync(oldname, newname)
  // const fileUrl = req.file.path; // 单个文件 路径地址
  var sheets = xlsx.parse(newname);
  // console.log(sheets[0].data); // 第一张表的数据
  // var arr = []; // 全部表数据
  sheets.forEach((sheet) => {
    var newSheetsArr = []; // 一张表数据
    //sheet是一个json对象，格式为{name:"测试参数",data:[]},我们想要的数据就存储在data里
    for (var i = 1; i < sheet['data'].length; i++) {
      //excel文件里的表格一般有标题所以不一定从0开始
      var row = sheet['data'][i]; // 获取行数据
      if (row && row.length > 0) {
        // newSheetsArr.push 多表数据隔离用这个
        // arr.push({
        //   id: row[0], // row[0]对应表格里A这列
        //   name: row[1], // row[1]对应表格里B这列
        //   old: row[2], // row[2]对应表格里C这列
        //   sexy: row[3],
        //   hobby: row[4]
        // });
        const user = {
          tel: row[0],
          name: row[1],
          password: row[2],
          img: row[3],
          myueche: row[4]
        }
        User.create(user).then(data => {
          res.send(data)
        })
      }
    }

    // arr.push(newSheetsArr);
  });
  // console.log(arr)
}