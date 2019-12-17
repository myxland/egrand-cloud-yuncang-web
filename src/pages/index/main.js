import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import VueEasyCm from 'vue-easycm'
import Uploader from 'vue-simple-uploader'
import 'babel-polyfill'
import 'font-awesome/css/font-awesome.css'

import { messages } from '@/util/i18n'
import http from '@/http' // 应用网络请求封装
import bus from '@/vue/mixin/bus' // 应用事件处理
import filters from '@/vue/filters' // 自定义过滤器
import directives from '@/vue/directives' // 自定义指令
import * as util from '@/util'

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
Vue.prototype.$util = util

Vue.use(http)
Vue.use(directives)
Vue.use(filters)
Vue.use(bus)

Vue.use(Uploader)
Vue.use(VueEasyCm)
Vue.use(VueI18n)
Vue.use(ElementUI, {
  size: 'small'
})

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

// // 使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('ms_username')
//   if (!role && to.path !== '/login') {
//     next('/login')
//   } else if (to.meta.permission) {
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === 'admin' ? next() : next('/403')
//   } else {
//     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//       Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//         confirmButtonText: '确定'
//       })
//     } else {
//       next()
//     }
//   }
// })

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
