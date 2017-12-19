import {
  RECEIVE_GOODS
} from './types'
import {reqGoods} from '../api/index'

const RESULT_OK = 0

export default {

  getGoods ({commit}) {

    reqGoods().then(response => {
      const result = response.data

      if (result.code === RESULT_OK) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
      }
    })
  }
}

