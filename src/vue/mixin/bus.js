/**
 * 应用事件处理,用法
 * 要接受事件的组件中添加bus属性,并添加事件处理方法
 * export default {
 * bus:{
 *   evenHandler(params){
 *
 *   }
 * }
 * }
 * 其他组件中
 * this.$bus('evenHandler',params);
 */
import Vue from 'vue'

// 事件
const bus = new Vue()

export default {
  install(Vue) {
    Vue.prototype.$bus = (type, ...args) => {
      bus.$emit(type, ...args)
    }

    Vue.mixin({
      beforeCreate() {
        const busOptions = this.$options.bus
        if (busOptions) {
          this.$_bus = []
          const addListeners = map => {
            for (const event in map) {
              if (Object.prototype.hasOwnProperty.call(map, event)) {
                const handler = map[event].bind(this)
                bus.$on(event, handler)
                this.$_bus.push({ event, handler })
              }
            }
          }
          if (Array.isArray(busOptions)) {
            busOptions.forEach(addListeners)
          } else {
            addListeners(busOptions)
          }
        }
      },
      beforeDestroy() {
        if (this.$_bus) {
          for (const listener of this.$_bus) {
            bus.$off(listener.event, listener.handler)
          }
        }
      }
    })

    // bus的合并策略
    Vue.config.optionMergeStrategies.bus = (parent, child) => {
      if (Array.isArray(parent)) {
        if (Array.isArray(child)) {
          return parent.concat(child)
        } else {
          parent.push(child)
          return parent
        }
      } else if (Array.isArray(child)) {
        child.push(parent)
        return child
      } else if (parent && child) {
        return [parent, child]
      } else if (parent) {
        return parent
      }
      return child
    }
  }
}
