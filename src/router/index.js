import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import log from '../views/log/index.vue'

import indes from '../views/index/index.vue'
import relsee from '../views/router/home.vue'
import mian from '../views/mian/mian.vue'
import pin from '../views/pinlun/index.vue'
import axios from 'axios'
import JSONbig from 'json-bigint'

import user from '../views/user/user.vue'
//  添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在请求拦截器函数中的 config 是本次请求相关的配置对象
  // config 就是最后要发给后端的那个配置对象
  // 我们可以在拦截器中对 config 进行统一配置定制
  // console.log('请求拦截器', config)

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

// 向应拦截器
axios.defaults.transformResponse = [function (data, heades) {
  // axios 默认使用 json.parse(data)转为对象,
  // 这里我们需要手动配置 JSONbig.parse(data)一下
  // 任何接口都会返回数据
  // 所有请求接口返回的数据都要 JSONbig.parse(data) 一下
  // 但是删除返回的是 空数组
  // 空数据 转 会报错
  // 说白了当没有响应体的时候 JSONbig.parse(data) 会报错
  // 把可能会出错的 代码放到try ，把出错之后的处理放到catch里边
  try {
    return JSONbig.parse(data)
  } catch (err) {
    // 一旦try里边的代码执行引发异常，那么就会进入到catch去执行
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

      // 动态路由
      {
        path: '/indes/:id',
        component: relsee
      },
      {
        path: '/mian',
        component: mian
      },
      // 评论列表
      {
        path: '/pinlun',
        component: pin
      },

      {
        path: '/user',
        component: user
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
