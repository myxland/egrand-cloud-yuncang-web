<template>
  <div @click="display=`none`" id="app">
    <RouterView/>
    <div :style="{top,left,display}" class="menu">
      <ul class="menu-list">
        <li @click="$bus(`closeCurrentTag`,tag,index)" class="menu-item" v-show="showCloseSelf">关闭</li>
        <li @click="$bus(`closeOtherTags`,tag,index)" class="menu-item">关闭其他窗口</li>
        <li @click="$bus(`closeAllTags`,tag,index)" class="menu-item">关闭所有窗口</li>
      </ul>
    </div>
    <Transition mode="out-in" name="zoom">
      <Client v-show="showChatWindow"/>
    </Transition>
    <div @click="toggleChatWindow" class="float-btn">
      <i class="el-icon-message" style="color: white;font-size: 2em"/>
    </div>
  </div>
</template>

<script>
  import Client from '@/components/im/ChatClient'
  import 'font-awesome/css/font-awesome.min.css'
  import 'element-ui/lib/theme-chalk/index.css'
  import '@/assets/css/lx-iconfont/font_830376_qzecyukz0s.css'
  import '@/assets/css/icon.css'
  import '@/assets/css/main.css'
  import '@/assets/css/color-dark.css'

  export default {
    components: { Client },
    bus: {
      contextMenu(e, tag, index) {
        this.showCloseSelf = tag.path !== '/home'
        this.display = 'block'
        this.left = `${e.clientX + 2}px`
        this.top = `${e.clientY + 2}px`
        this.index = index
        this.tag = tag
      },
      closeChatWindow() {
        this.showChatWindow = false
      },
      loginOut() {
        this.showChatWindow = false
      }
    },
    data() {
      return {
        showChatWindow: false,
        top: '0px',
        left: '0px',
        display: 'none',
        showCloseSelf: true,
        userId: localStorage.getItem('userId'),
        index: 0,
        tag: {}
      }
    },
    methods: {
      toggleChatWindow() {
        this.showChatWindow = !this.showChatWindow
        if (this.showChatWindow) {
          this.$bus('showChatWindow')
        }
      },
      onKeydown(e) {
        if (e.altKey && (e.keyCode === 77 || e.key === 'm')) {
          this.toggleChatWindow()
        }
      }
    },
    mounted() {
      window.addEventListener('keydown', this.onKeydown)
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.onKeydown)
    }
  }
</script>
<style src="./styles/all.scss" lang="scss">
</style>
<style lang="scss">
  .menu {
    background: #fff;
    box-shadow: 0 5px 10px #bebebe;
    position: absolute;
    border-radius: 4px;
    z-index: 3;
  }

  .menu-item {
    display: block;
    font: normal 11px tahoma, arial, sans-serif;
    user-select: none;
    white-space: nowrap;
    color: #242f42;
    line-height: 100%;
    padding: 12px 20px;
    cursor: pointer;
  }

  .menu .menu-item:hover {
    background-color: #ecf5ff;
    color: #66b1ff;
  }

  .float-btn {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: #5383ec;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    box-shadow: 0 0 10px #3e66ec;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .float-btn:hover {
    box-shadow: 0 0 15px #0025ff;
  }
</style>
