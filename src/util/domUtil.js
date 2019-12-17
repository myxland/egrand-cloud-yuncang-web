/**
 * 获取dom元素指定的计算属性
 * @param ele
 * @param prop
 * @returns {number}
 */
export function getComputedProperty(ele, prop) {
  const textProp = window.getComputedStyle(ele, null).getPropertyValue(prop)
  return parseFloat(textProp.replace('px', ''))
}

/**
 * 获取dom元素的宽(包括:width, padding-left, padding-right, margin-left, margin-right, border-left-width, border-right-width)
 * @param ele
 * @param withPX
 * @returns {string|number}
 */
export function getEleWidth(ele, withPX = false) {
  let width = 0
  width += getComputedProperty(ele, 'width')
  width += getComputedProperty(ele, 'padding-left')
  width += getComputedProperty(ele, 'padding-right')
  width += getComputedProperty(ele, 'margin-left')
  width += getComputedProperty(ele, 'margin-right')
  width += getComputedProperty(ele, 'border-left-width')
  width += getComputedProperty(ele, 'border-right-width')
  if (withPX) {
    return `${width}px`
  } else {
    return width
  }
}

/**
 *
 * @param dialog 需要拖拽的对话框
 * @param dragEl 对话框上用来拖拽的区域
 */
export function drag(dialog, dragEl) {
  if (!dialog) {
    return
  }

  dragEl.style.cssText += ';cursor:move;'

  // dragDom.style.cssText += ';top:0px;'

  // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
  const style = (() => {
    if (window.document.currentStyle) {
      return (dom, attr) => dom.currentStyle[attr]
    } else {
      return (dom, attr) => getComputedStyle(dom)[attr]
    }
  })()

  dragEl.onmousedown = (e) => {
    // 鼠标按下，计算当前元素距离可视区的距离
    const disX = e.clientX - dragEl.offsetLeft
    const disY = e.clientY - dragEl.offsetTop

    const screenWidth = document.body.clientWidth // body当前宽度
    const screenHeight = document.documentElement.clientHeight // 可见区域高度(应为body高度，可某些环境下无法获取)

    const dragDomWidth = dialog.offsetWidth // 对话框宽度
    const dragDomHeight = dialog.offsetHeight // 对话框高度

    const minDragDomLeft = dialog.offsetLeft
    const maxDragDomLeft = screenWidth - dialog.offsetLeft - dragDomWidth

    const minDragDomTop = dialog.offsetTop
    const maxDragDomTop = screenHeight - dialog.offsetTop - dragDomHeight

    // 获取到的值带px 正则匹配替换
    let styleLeft = style(dialog, 'left')
    let styleTop = style(dialog, 'top')

    // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
    if (styleLeft.includes('%')) {
      styleLeft = +document.body.clientWidth * (+styleLeft.replace(/%/g, '') / 100)
      styleTop = +document.body.clientHeight * (+styleTop.replace(/%/g, '') / 100)
    } else {
      styleLeft = +styleLeft.replace(/px/g, '')
      styleTop = +styleTop.replace(/px/g, '')
    }

    document.onmousemove = function(e) {
      e.preventDefault()
      e.stopPropagation()
      // 通过事件委托，计算移动的距离
      let left = e.clientX - disX
      let top = e.clientY - disY

      // 边界处理
      if (-(left) > minDragDomLeft) {
        left = -(minDragDomLeft)
      } else if (left > maxDragDomLeft) {
        left = maxDragDomLeft
      }

      if (-(top) > minDragDomTop) {
        top = -(minDragDomTop)
      } else if (top > maxDragDomTop) {
        top = maxDragDomTop
      }

      // 移动当前元素
      dialog.style.cssText += `;left:${left + styleLeft}px;top:${top + styleTop}px;`
    }

    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
    }
  }
}
