<template>
  <div class="sidebar">
    <ElMenu :collapse="collapse" :default-active="onRoutes" @select="(path)=>{$bus('menuSelect', path)}"
            active-text-color="#20a0ff" background-color="#324157" class="sidebar-el-menu" router text-color="#bfcbd9"
            unique-opened>
      <template v-for="item in items">
        <template v-if="item.subs">
          <ElSubmenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"/>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <ElSubmenu :index="subItem.index" :key="subItem.index" v-if="subItem.subs">
                <template slot="title">{{ subItem.title }}</template>
                <ElMenuItem :index="threeItem.index" :key="i" v-for="(threeItem,i) in subItem.subs">
                  {{ threeItem.title }}
                </ElMenuItem>
              </ElSubmenu>
              <ElMenuItem :index="subItem.index" :key="subItem.index" v-else>
                {{ subItem.title }}
              </ElMenuItem>
            </template>
          </ElSubmenu>
        </template>
        <template v-else>
          <ElMenuItem :index="item.index" :key="item.index">
            <i :class="item.icon"/>
            <span slot="title">{{ item.title }}</span>
          </ElMenuItem>
        </template>
      </template>
    </ElMenu>
  </div>
</template>

<script>

  export default {
    bus: {
      collapse(msg) { // 折叠侧边栏
        this.collapse = msg
      }
    },
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-lx-home',
            index: '/home',
            title: '工作首页'
          },
          {
            icon: 'el-icon-lx-people',
            index: '/me',
            title: '我'
          },
          {
            icon: 'el-icon-lx-group',
            index: '/group',
            title: '组织'
          },
          {
            icon: 'el-icon-lx-file',
            index: '/cloud',
            title: '云仓'
          }
        ]
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
