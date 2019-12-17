import { drag } from '@/util/domUtil'

/**
 * v-dialogDrag: 弹窗拖拽属性
 */
export default {
  bind(el) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    drag(dragDom, dialogHeaderEl)
  }
}
