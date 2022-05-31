module.exports = (sequelize, Sequelize) => {
  const Yueche = sequelize.define('jubenYueChe', {
    picUrl: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    pcount: {
      type: Sequelize.INTEGER
    },
    bming: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.STRING
    },
    changci: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
  })
  return Yueche
}