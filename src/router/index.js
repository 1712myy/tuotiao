import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import log from '../views/log/index.vue'

import indes from '../views/index/index.vue'
import relsee from '../views/router/home.vue'
import mian from '../views/mian/mian.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },

  // 二级路由

  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: indes
      },
      {
        path: '/indes',
        component: relsee
      },
      {
        path: '/mian',
        component: mian
      }
    ]

  },
  // 一级路由

  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/log',
    component: log

  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
