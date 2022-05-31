import axios from "axios";

let axiosInstance = axios.create({
  baseURL:'http://localhost:3000/api',
  headers:{
    "Content":"application/json"
  },
  timeout:10000
})

export default axiosInstance