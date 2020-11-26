import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'
import personal from './personal'
import process from './process'
import project from './project'
import system from './system'
import schedule from './schedule'
import notification from './notification'

Vue.use(VueRouter)

export const routes = [
  { path: '', component: Layout, redirect: '/dashboard/dashboard' },
  { path: '/login', name: 'Login', component: () => import('@/views/Login.vue'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // 首页
  {
    path: '/dashboard',
    meta: { title: 'dashboard', icon: 'dashboard' },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard', permissions: ['admin'] }
      }
    ]
  },
  personal,     // 个人中心
  project,      // 项目管理
  process,      // 流程管理
  schedule,     // 日程计划
  notification, // 消息通知
  system,       // 系统管理
]

const router = new VueRouter({
  routes
})

export default router
