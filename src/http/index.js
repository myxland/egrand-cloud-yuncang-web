/**
 * ajax请求统一配置
 */
import axios from 'axios' // ajax请求
import qs from 'qs'
import router from '../router' // 应用路由表

const http = axios.create()
const server = window.location.origin + '/'

export const rawAxios = http

// 发起请求之前
http.interceptors.request.use(
  config => { // 成功回调
    return config
  },
  error => { // 出错回调
    return Promise.reject(error)
  }
)

// 请求完成之后
http.interceptors.response.use(
  response => { // 成功回调
    return response
  },
  error => { // 出错回调
    return Promise.reject(error.response)
  }
)

/**
 * post请求,结果原样返回
 * @param url 请求路径
 * @param data post参数
 * @returns {AxiosPromise} 请求结果
 * @private
 */
function _post(url, data) {
  return http({
    method: 'post',
    url: server + url,
    data: qs.stringify({ ...data }),
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export function get(url) {
  return http({
    method: 'get',
    url: server + url,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

/**
 * post请求获取数据,对结果进行统一处理
 * @param url
 * @param data
 * @returns {Promise}
 */

/* export function fetch(url, data) {
  _setLoading(this, true);//修改组件状态为加载中
  return new Promise(async (resolve, reject) => {
    try {
      let response = await _post(url, data);
      let result = response.data;
      if (result && result.code === 0) {//请求结果正常
        resolve(result.data);
      } else {
        if (result && result.code === 401) {//需要重新登录
          result.show = false;//不显示错误提示
          reject(result);
          toLogin(this);
        } else {
          reject(result);
        }
      }
    } catch (e) {
      if (e && (e.status === 401 || (e.data && e.data.code === 401))) {//需要重新登录
        e.show = false;//不显示错误提示
        reject(e);
        toLogin(this);
      } else {
        reject(e);
      }
    }
    _setLoading(this, false);//修改组件状态为加载完成
  });
} */

export async function fetch(url, data) {
  try {
    const response = await _post(url, data)
    return Promise.resolve(response)
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * 跳转到登录页面
 */
export function toLogin(vm) {
  if (vm) {
    vm.isSubmit = true// 防止路由阻止
  }
  const redirect = location.hash.substring(1, location.hash.length)
  if (process.env.NODE_ENV === 'development') {
    router.replace({ path: '/login', query: { redirect: redirect } })
  } else {
    router.replace({ path: '/login', query: { redirect: redirect } })
  }
}

// function setLoading(vm, loading) {
//   if (vm && vm.updateLoading) {
//     if (vm.$options.usePageLoading) { // 使用页面加载提示
//       vm.loading = loading// 页面内部的loading
//     } else {
//       vm.updateLoading(loading)// 全局loading
//     }
//   }
// }

export default {
  install(Vue) {
    Vue.prototype.$fetch = fetch// 向Vue的原型链添加网络请求方法
  }
}
