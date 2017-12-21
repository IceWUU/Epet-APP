
import {
  RECEIVE_GOODS,
  RECEIVE_HOME
} from './types'

export default {
  [RECEIVE_GOODS] (state, {goods}) {
    state.classifyName = goods
  },
  [RECEIVE_HOME] (state, {home}) {
    state.home = home
  }
}

