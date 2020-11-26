import Layout from '../views/layout/Layout'
// 项目管理
export default {
  path: '/project',
  redirect: '/project/global',
  meta: { title: 'project', icon: 'project' },
  component: Layout,
  children: [
    // 全局管理
    {
      path: 'global',
      name: 'Global',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Global'),
      meta: { title: 'global', icon: 'global', permissions: ['admin'] }
    },
    // 项目监控
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Monitor'),
      meta: { title: 'monitor', icon: 'monitor', permissions: ['admin'] }
    },
    // 项目启动
    {
      path: 'start',
      name: 'Start',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Start'),
      meta: { title: 'start', icon: 'start', permissions: ['admin'] }
    },
    // 项目策划
    {
      path: 'plan',
      name: 'ProjectPlan',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Plan'),
      meta: { title: 'plan', icon: 'plan', permissions: ['admin'] }
    },
    // 项目执行
    {
      path: 'implement',
      name: 'Implement',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Implement'),
      meta: { title: 'implement', icon: 'implement', permissions: ['admin'] }
    },
    // 项目收尾
    {
      path: 'ending',
      name: 'Ending',
      component: () => import(/* webpackChunkName: "project" */ '@/views/project/Ending'),
      meta: { title: 'ending', icon: 'ending', permissions: ['admin'] }
    },
  ]
}