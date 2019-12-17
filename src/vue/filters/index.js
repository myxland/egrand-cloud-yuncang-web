import capitalize from './capitalize'
import dateTime from './date-time'

export default {
  install(Vue) {
    Vue.filter('capitalize', capitalize)
    Vue.filter('dateTime', dateTime)
  }
}
