<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div @click="collapseSidebar" class="collapse-btn">
      <i class="el-icon-s-fold" v-if="!collapse"/>
      <i class="el-icon-s-unfold" v-else/>
    </div>
    <div class="logo"><img alt="" class="headerW-img" src="../../assets/img/logo_tjfxpt1.png"/></div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div @click="handleFullScreen" class="btn-fullscreen">
          <ElTooltip :content="fullscreen?`取消全屏`:`全屏`" effect="dark" placement="bottom">
            <i class="el-icon-rank"/>
          </ElTooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <ElTooltip :content="message?`有${message}条未读消息`:`消息中心`" effect="dark" placement="bottom">
            <RouterLink to="/tabs">
              <i class="el-icon-bell"/>
            </RouterLink>
          </ElTooltip>
          <span class="btn-bell-badge" v-if="message"/>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator"><img alt="" src="../../assets/img/avatar.png"></div>
        <!-- 用户名下拉菜单 -->
        <ElDropdown @command="handleCommand" class="user-name" trigger="click">
          <span class="el-dropdown-link">{{username}} <i class="el-icon-caret-bottom"/></span>
          <ElDropdownMenu slot="dropdown">
            <a href="javascript:void(0)" target="_blank">
              <ElDropdownItem>关于作者</ElDropdownItem>
            </a>
            <a href="javascript:void(0)" target="_blank">
              <ElDropdownItem>项目仓库</ElDropdownItem>
            </a>
            <ElDropdownItem command="loginOut" divided>退出登录</ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        name: 'linxin',
        message: 2
      }
    },
    computed: {
      username() {
        const username = 'Simple'
        return username || this.name
      }
    },
    methods: {
      handleCommand(command) { // 用户名下拉菜单选择事件
        if (command === 'loginOut') {
          this.$bus('loginOut')
          localStorage.removeItem('ms_username')
          localStorage.removeItem('VUE-CHAT-v3')
          this.$router.push('/login')
        }
      },
      collapseSidebar() { // 侧边栏折叠
        this.collapse = !this.collapse
        this.$bus('collapse', this.collapse)
      },
      handleFullScreen() { // 全屏事件
        const element = document.documentElement
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen()
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen()
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen()
          }
        }
        this.fullscreen = !this.fullscreen
      }
    },
    mounted() {
      if (document.body.clientWidth < 1500) {
        this.collapseSidebar()
      }
    }
  }
</script>

<style lang="scss" scoped>

  .headerW-img {
    height: 30px;
  }

  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }

  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }

  .header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
    display: flex;
    align-items: center;
    height: 70px;
  }

  .header-right {
    float: right;
    padding-right: 50px;
  }

  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
  }

  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
  }

  .btn-bell, .btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }

  .btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
  }

  .btn-bell .el-icon-bell {
    color: #fff;
  }

  .user-name {
    margin-left: 10px;
  }

  .user-avator {
    margin-left: 20px;
  }

  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
