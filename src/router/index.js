import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../pages/home/home.vue');
const classification = () => import('../pages/classification/classification.vue');
const shopping = () => import('../pages/shopping/shopping.vue');
const center = () => import('../pages/center/center.vue');


Vue.use(Router);

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/classification',
      component: classification
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/center',
      component: center
    },
  ]
})
