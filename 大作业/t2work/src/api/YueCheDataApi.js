import axiosUtil from '../utils/axiosUtils.js'

class YueCheDataApi {
  getALL(){
    return axiosUtil.get('/yueches')
  }
}

export default new YueCheDataApi();