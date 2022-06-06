const dbConfig = require("../config/db.config")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  }
)
const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.yueches = require('./yueche.model.js')(sequelize, Sequelize)
db.swipers = require('./swiper.model.js')(sequelize, Sequelize)
db.jubens = require('./juben.model.js')(sequelize, Sequelize)
db.users = require('./user.model.js')(sequelize, Sequelize)
module.exports = db