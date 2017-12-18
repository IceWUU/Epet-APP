import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../pages/home/home.vue');
const classification = () => import('../pages/classification/classification.vue');
const shopping = () => import('../pages/shopping/shopping.vue');
const center = () => import('../pages/center/center.vue');
const goods = () => import('../pages/classification-nav/goods.vue');
const brand = () => import('../pages/classification-nav/brand.vue')



Vue.use(Router);

export default new Router({
  // linkActiveClass:"active",
  routes: [
    {
      path: '/',
      'redirect': '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/classification',
      component: classification,
      children: [
        {
          path: '/classification',
          'redirect': '/classification/goods'
        },
        {
          path: 'goods',
          component: goods
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/center',
      component: center
    }
  ]
})
