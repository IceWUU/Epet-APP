
import axios from 'axios'

const GOODS_URL = '/api2/goods'



export function reqGoods() {

  return axios.get(GOODS_URL)
}
export function reqHome() {

  return axios.get('/api2/home')
}
