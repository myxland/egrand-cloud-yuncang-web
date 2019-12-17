/**
 * v-dialogDrag: 弹窗拖拽属性
 */
import { drag } from '@/util/domUtil'

export default {
  bind(el) {
    const dialogHeaderEl = el.querySelector('.chart-toolbar')
    drag(el, dialogHeaderEl)
  }
}
