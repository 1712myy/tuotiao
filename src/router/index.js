import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import log from '../views/log/index.vue'

import indes from '../views/index/index.vue'
import relsee from '../views/router/home.vue'
import mian from '../views/mian/mian.vue'

import axios from 'axios'
import JSONbig from 'json-bigint'

//  添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在请求拦截器函数中的 config 是本次请求相关的配置对象
  // config 就是最后要发给后端的那个配置对象
  // 我们可以在拦截器中对 config 进行统一配置定制
  console.log('请求拦截器', config)

  const token = window.localStorage.getItem('user-token')

  // 统一添加 token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // return config 是通行的规则
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.defaults.transfmResponse = [function (data, heades) {
  try {
    return JSONbig.parse(data)
  } catch (err) {
    return {}
  }
}]
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
        path: '/indes/:articleid',
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
