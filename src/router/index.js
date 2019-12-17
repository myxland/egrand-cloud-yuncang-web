import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import config from '@/config'
import { setToken, getToken, canTurnTo} from '@/libs/util'

const { homeName } = config
Vue.use(Router)

//解决NavigationDuplicated问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = config.publicPath.dev // 这里是本地的请求url
    break
  case 'production':
    BASE_URL = config.publicPath.pro // 生产环境url
    break
}

const router = new Router({
  base: BASE_URL,
  routes: routes,
  mode: 'history'
})

const LOGIN_PAGE_NAME = 'login'
const permitList = [LOGIN_PAGE_NAME, 'loginSuccess']

const turnTo = (to, access, next) => {
  if (!to.name) {
    // 防止地址栏刷新动态路由跳转到401或404,先跳转到homeName
    router.replace(to)
  }else{
    next();
  }
}

router.beforeEach((to, from, next) => {
  const token = getToken()
  if(!token && !permitList.includes(to.name)){
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  }else{
    next()
  }
  // if (!token && !permitList.includes(to.name)) {
  //   // 未登录,并且不是白名单
  //   next({
  //     name: LOGIN_PAGE_NAME // 跳转到登录页
  //   })
  // } else if (!token && permitList.includes(to.name)) {
  //   next() // 跳转
  // } else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: homeName // 跳转到homeName页
  //   })
  // } else {
  //   turnTo(to, store.state.user.access, next)
  // }
})

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
