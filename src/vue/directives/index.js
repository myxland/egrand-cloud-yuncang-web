import DialogDrag from './dialog-drag'
import chatDrag from './chat-drag'
import scrollBottom from './scroll-bottom'

export default {
  install(Vue) {
    Vue.directive('dialog-drag', DialogDrag)
    Vue.directive('chat-drag', chatDrag)
    Vue.directive('scroll-bottom', scrollBottom)
  }
}
