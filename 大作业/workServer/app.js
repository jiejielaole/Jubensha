const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
var corsOptions = {
  origin: "http://localhost:8080"
  // origin: "http://192.168.43.59:8080"
}


const server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

const db = require("./app/models");
db.sequelize.sync()
require("./app/routes/yueche.routes")(server)
require("./app/routes/swiper.routes")(server)
require("./app/routes/juben.routes")(server)

server.get('/', (req, res) => {
  res.json({
    'message': "剧本杀系统"
  })
})

server.listen(3000, () => {
  console.log("系统启动完毕! 端口：3000")
})