import Layout from '../views/layout/Layout'
// 个人中心
export default {
  path: '/personal',
  redirect: '/personal/project',
  meta: { title: 'personal', icon: 'personal' },
  component: Layout,
  children: [
    // 我的项目
    {
      path: 'project',
      name: 'Project',
      component: () => import(/* webpackChunkName: "personal" */ '@/views/personal/Project'),
      meta: { title: 'personal-project', icon: 'personal-project', permissions: ['admin'] },
    },
    // 我的任务
    {
      path: 'task',
      name: 'Task',
      component: () => import(/* webpackChunkName: "personal" */ '@/views/personal/Task'),
      meta: { title: 'task', icon: 'task', permissions: ['admin'] }
    },
    // 我的待办
    {
      path: 'todo',
      name: 'Todo',
      component: () => import(/* webpackChunkName: "personal" */ '@/views/personal/ToDo'),
      meta: { title: 'todo', icon: 'todo', permissions: ['admin'] }
    },
    // 我的文档
    {
      path: 'document',
      name: 'Document',
      component: () => import(/* webpackChunkName: "personal" */ '@/views/personal/Document'),
      meta: { title: 'document', icon: 'document', permissions: ['admin'] }
    },
    // 工作笔记
    {
      path: 'workNote',
      name: 'WorkNote',
      component: () => import(/* webpackChunkName: "personal" */ '@/views/personal/WorkNote'),
      meta: { title: 'workNote', icon: 'workNote', permissions: ['admin'] }
    }
  ]
}