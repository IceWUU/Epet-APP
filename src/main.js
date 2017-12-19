
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui'
import './mock/mockServer'
import store from './store'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


 Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
