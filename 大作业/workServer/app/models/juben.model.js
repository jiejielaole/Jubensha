module.exports = (sequelize, Sequelize) => {
  const Swiper = sequelize.define('juben', {
    pic: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    male:{
      type:Sequelize.INTEGER
    },
    female:{
      type:Sequelize.INTEGER
    },
    duration:{
      type:Sequelize.STRING
    },
    nd:{
      type:Sequelize.STRING
    },
    gg:{
      type:Sequelize.STRING
    },
    tc:{
      type:Sequelize.STRING
    },
    price:{
      type:Sequelize.INTEGER
    },
    tags:{
      type:Sequelize.STRING
    },
    introduce:{
      type:Sequelize.STRING
    },
    character:{
      type:Sequelize.STRING
    },
  })
  return Swiper
}