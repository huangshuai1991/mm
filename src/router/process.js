import Layout from '../views/layout/Layout'
// 流程管理
export default {
  path: '/process',
  redirect: '/process/setting',
  meta: { title: 'process', icon: 'process' },
  component: Layout,
  children: [
    // 流程设置
    {
      path: 'setting',
      name: 'Setting',
      component: () => import(/* webpackChunkName: "process" */ '@/views/process/Setting'),
      meta: { title: 'process-setting', icon: 'process-setting', permissions: ['admin'] },
    },
    // 流程查看
    {
      path: 'view',
      name: 'View',
      component: () => import(/* webpackChunkName: "process" */ '@/views/process/View'),
      meta: { title: 'view', icon: 'view', permissions: ['admin'] }
    },
    // 流程审批
    {
      path: 'approve',
      name: 'Approve',
      component: () => import(/* webpackChunkName: "process" */ '@/views/process/Approve'),
      meta: { title: 'approve', icon: 'approve', permissions: ['admin'] }
    }
  ]
}