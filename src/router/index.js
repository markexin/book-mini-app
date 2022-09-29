import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Order from '../views/Order.vue'
import Recom from '../views/Recom.vue'
import Login from '../views/Login.vue'
import My from '../views/My.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/page1',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/recom',
    name: 'Recom',
    component: Recom
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
