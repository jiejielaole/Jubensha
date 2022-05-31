import axiosUtil from '../utils/axiosUtils.js'

class JubenDataApi {
  getALL() {
    return axiosUtil.get('/jubens')
  }
}

export default new JubenDataApi();