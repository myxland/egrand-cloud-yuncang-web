<template>
  <div class="wrapper">
    <VHead/>
    <VSidebar/>
    <div :class="{'content-collapse':collapse}" class="content-box">
      <VTags/>
      <div class="content" ref="content">
        <Transition mode="out-in" name="move">
          <KeepAlive :include="tagsList">
            <RouterView/>
          </KeepAlive>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
  import VHead from './header.vue'
  import VSidebar from './sidebar.vue'
  import VTags from './tags.vue'
  import OverlayScrollbars from 'overlayscrollbars'
  import 'overlayscrollbars/css/OverlayScrollbars.css'

  export default {
    bus: {
      collapse(msg) {
        this.collapse = msg
      },
      // 只有在标签页列表里的页面才使用KeepAlive，即关闭标签之后就不保存到内存中了。
      tags(msg) {
        const arr = []
        for (let i = 0, len = msg.length; i < len; i++) {
          msg[i].name && arr.push(msg[i].name)
        }
        this.tagsList = arr
      }
    },
    data() {
      return {
        tagsList: [],
        collapse: false
      }
    },
    components: {
      VHead,
      VSidebar,
      VTags
    },
    mounted() {
      OverlayScrollbars(this.$refs.content, {
        scrollbars: {
          autoHide: 's',
          autoHideDelay: 500
        }
      })
    }
  }
</script>
<style lang="scss">
  .os-padding {
    z-index: unset !important;
    margin-bottom: 10px;
  }
</style>
