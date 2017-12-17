
import Vue from 'vue'
import App from './App'
import { Swipe, SwipeItem } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
