
import {
  RECEIVE_GOODS
} from './types'

export default {
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  }
}

