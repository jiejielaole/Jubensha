module.exports = (sequelize, Sequelize) => {
  const Swiper = sequelize.define('jubenSwiper', {
    picUrl: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
  })
  return Swiper
}