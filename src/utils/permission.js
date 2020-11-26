import { Message } from 'element-ui';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import router from '../router/index';
import store from '../store/index';
import i18n from '../utils/i18n';
import { getToken } from './auth';

// 导航时浏览器上方进度条配置
NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


const whiteList = ['/login'] // 不重定向白名单
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 用localStory里有无token判断是否登录
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
          next()
          // const roles = res.roles
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message({
              showClose: true,
              duration: 4 * 1000,
              message: err || i18n.tc('error-message.login-error'),
              type: 'error'
            })
            next({ path: '/' })
          })
        })
      } else {
        // 判断当前页面是否有权限
        const { permissions } = to.meta
        if (permissions) {
          const hasPermission = includePermission(permissions);
          if (hasPermission) {
            next()
          } else {
            next({ path: '/401', replace: true, query: { noGoBack: true } })
          }
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})


/**
 * 判断是否拥有权限
 * @param {Array<string>} permissions - 要判断的权限列表
 */
export function includePermission (permissions = []) {
  // 这里要判断的权限没有设置的话，就等于不需要权限，直接返回 true
  if (!permissions.length) return true
  // 获取权限列表
  const permissionList = store.getters.roles;
  // 管理员权限直接通过
  if (permissions.indexOf('admin') >= 0) return true;
  return !!permissions.find(permission => permissionList.includes(permission))
}

