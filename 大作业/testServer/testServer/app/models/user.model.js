module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('jubenUser', {
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    tel: {
      type: Sequelize.STRING
    },
    myueche: {
      type: Sequelize.STRING
    },
    img:{
      type:Sequelize.STRING(1000)
    }
  })
  return User
}