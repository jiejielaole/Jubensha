import axiosUtil from '../utils/axiosUtils.js'

class SwiperDataApi {
  getALL() {
    return axiosUtil.get('/swipers')
  }
}

export default new SwiperDataApi();