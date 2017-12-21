import {reqGoods,reqHome} from '../api'
import {
  RECEIVE_GOODS,
  RECEIVE_HOME
} from './types'


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
  },
  getHome ({commit}) {

    reqHome().then(response => {
      const result = response.data

      if (result.code === RESULT_OK) {
        const home = result.data
        commit(RECEIVE_HOME, {home})
      }
    })
  }
}

