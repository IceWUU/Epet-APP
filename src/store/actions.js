import {reqGoods} from '../api'

import {
  RECEIVE_GOODS
} from './types'

const RESULT_OK = 0

export default {
  reqGoods({commit) {

    getGoods().then(response => {
      const result = response.data
      console.log('543245')
      if (result.code === RESULT_OK) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
      }
    })
  }
}

