/**
 * 发送消息后滚动到底部
 */
export default {
  bind(el) {
    el.scrollTop = el.scrollHeight - el.clientHeight
  }
}
