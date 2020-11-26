import Layout from '../views/layout/Layout'
// 日程计划
export default {
  path: '/schedule',
  redirect: '/schedule/table',
  meta: { title: 'schedule', icon: 'schedule' },
  component: Layout,
  children: [
    // 日程表
    {
      path: 'table',
      name: 'Table',
      component: () => import(/* webpackChunkName: "schedule" */ '@/views/schedulePlan/Schedule'),
      meta: { title: 'table', icon: 'table', permissions: ['admin'] },
    },
    // 任务计划
    {
      path: 'paln',
      name: 'SchedulePlan',
      component: () => import(/* webpackChunkName: "schedule" */ '@/views/schedulePlan/TaskPlan'),
      meta: { title: 'paln', icon: 'paln', permissions: ['admin'] }
    }
  ]
}