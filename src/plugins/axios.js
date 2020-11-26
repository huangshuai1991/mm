"use strict";

import {
  Message,
  Loading
} from 'element-ui'
import axios from "axios";
import i18n from '../utils/i18n'
import router from '../router';
import { getToken } from '../utils/auth';


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let loading;
//开始加载动画
function startLoading () {
  loading = Loading.service({
    lock: true, //是否锁定
    text: `${i18n.tc('loading')}...`, //加载中需要显示的文字
    background: 'rgba(0,0,0,.7)', //背景颜色
  });
}
//结束加载动画
function endLoading () {
  loading.close();
}
//需要加载的次数
let needLoadingRequestCount = 0
function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// 添加请求拦截器
_axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    showFullScreenLoading()
    // 统一添加token
    let token = getToken();
    if (token) {
      config.headers['token'] = token
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
_axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    tryHideFullScreenLoading()
    const res = response.data;
    if (res.success) {
      return Promise.resolve(res);
    } else {
      if (res.code === 1401) {
        Message({
          showClose: true,
          duration: 4 * 1000,
          message: res.message || i18n.tc('error-message.login-expire'),
          type: 'error'
        })
        router.replace({ path: '/' })
      } else {
        Message({
          showClose: true,
          duration: 4 * 1000,
          message: res.message || i18n.tc('error-message.network-anomaly'),
          type: 'error'
        })
      }
      return Promise.resolve(res);
    }
  },
  function (error) {
    // 对响应错误做点什么
    tryHideFullScreenLoading()
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Message({
            showClose: true,
            duration: 4 * 1000,
            message: i18n.tc('error-message.404'),
            type: 'error'
          })
          break;
        case 500:
          Message({
            showClose: true,
            duration: 4 * 1000,
            message: i18n.tc('error-message.500'),
            type: 'error'
          })
          break;
        case 503:
          Message({
            showClose: true,
            duration: 4 * 1000,
            message: i18n.tc('error-message.503'),
            type: 'error'
          })
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

// 处理get请求
const get = (url, params, config = {}) => _axios.get(url, { ...config, params })
// 处理delete请求，为了防止和关键词delete冲突，方法名定义为deletes
const deletes = (url, params, config = {}) => _axios.delete(url, { ...config, params })
// 处理post请求
const post = (url, params, config = {}) => _axios.post(url, params, config)
// 处理put请求
const put = (url, params, config = {}) => _axios.put(url, params, config)
export default {
  get,
  deletes,
  post,
  put
}