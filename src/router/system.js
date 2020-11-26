import Layout from '../views/layout/Layout'
// 系统管理
export default {
  path: '/system',
  redirect: '/system/menu',
  meta: { title: 'system', icon: 'system' },
  component: Layout,
  children: [
    // 菜单管理
    {
      path: 'menu',
      name: 'Menu',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/Menu'),
      meta: { title: 'menu', icon: 'menu', permissions: ['admin'] }
    },
    // 用户管理
    {
      path: 'user',
      name: 'User',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/User'),
      meta: { title: 'user', icon: 'user', permissions: ['admin'] }
    },
    // 部门管理
    {
      path: 'department',
      name: 'Department',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/Department'),
      meta: { title: 'department', icon: 'department', permissions: ['admin'] }
    },
  ]
}