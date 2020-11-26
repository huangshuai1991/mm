import http from '../../plugins/axios';
import { namespace } from './index';
const feature = 'user';
const role = 'role';

// 模拟用户登录
export const userLogin = (params) => http.post(`/mock/${feature}/login`, params);

// 模拟用户退出登录
export const userLogout = (params) => http.post(`/mock/${feature}/logout`, params);

// 模拟用户信息
export const getUserInfo = (params) => http.post(`/mock/${namespace}/${feature}/info`, params);

// 模拟用户权限列表
export const getPermissionList = () => http.get(`/mock/${namespace}/${role}/list`)

