import Layout from '../views/layout/Layout'
// 消息通知
export default {
  path: '/notification',
  name: 'Notification',
  redirect: '/notification/all',
  meta: { title: 'notification', icon: 'notification' },
  component: Layout,
  children: [
    // 全部消息
    {
      path: 'all',
      name: 'All',
      component: () => import(/* webpackChunkName: "notification" */ '@/views/notification/All'),
      meta: { title: 'all-message', icon: 'all-message', permissions: ['admin'] },
    },
    // 系统消息
    {
      path: 'system',
      name: 'System',
      component: () => import(/* webpackChunkName: "notification" */ '@/views/notification/System'),
      meta: { title: 'system-message', icon: 'system-message', permissions: ['admin'] }
    },
    // 个人消息
    {
      path: 'personal',
      name: 'Personal',
      component: () => import(/* webpackChunkName: "notification" */ '@/views/notification/Personal'),
      meta: { title: 'personal-message', icon: 'personal-message', permissions: ['admin'] }
    },
    // 流程消息
    {
      path: 'process',
      name: 'Process',
      component: () => import(/* webpackChunkName: "notification" */ '@/views/notification/Process'),
      meta: { title: 'process-message', icon: 'process-message', permissions: ['admin'] }
    }
  ]
}