import axios from 'axios'
const GOODS_URL = '/api2/goods'


export const RESULT_OK = 0

export function getGoods() {
  return axios.get(GOODS_URL)
}
