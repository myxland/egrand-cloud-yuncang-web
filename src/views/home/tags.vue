<template>
  <div class="tags" v-if="showTags">
    <div @wheel="scroll($event)" ref="tagsBox" style="overflow-x: scroll !important;overflow-y: hidden;">
      <!--<ul :style="{width:tagWrapperWidth}">
        <li :class="{'active': isActive(item.path)}"
            :data-path="item.path" :key="index"
            @click="onTagClick($event,item,index)"
            @contextmenu.prevent="$bus(`contextMenu`,$event,item,index)"
            class="tags-li"
            ref="tags"
            v-for="(item,index) in tagsList">
          <div class="tags-li-title">{{item.title}}</div>
          <span @click.stop="closeTags(index)"
                class="tags-li-icon"
                v-if="item.path!=='/home'">
            <i class="el-icon-close"/>
          </span>
        </li>
      </ul>
      -->
      <el-tabs :value="currentTabIndex" type="card" @edit="closeTags" @tab-click="onTagClick">
        <el-tab-pane
          v-for="(item,index) in tagsList"
          :key="index"
          :label="item.title"
          :name="item.path"
          :closable="item.path!=='/home'"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

  import { getComputedProperty, getEleWidth } from '@/util/domUtil'

  export default {
    bus: {
      // 关闭全部标签
      closeAllTags() {
        this.tagsList = this.tagsList.filter(item => {
          return item.path === '/home'
        })
        this.$router.replace('/home')
      },
      // 关闭其他标签
      closeOtherTags() {
        this.tagsList = this.tagsList.filter(item => {
          if (item.path === '/home') {
            return true
          } else {
            return item.path === this.$route.fullPath
          }
        })
      },
      //
      closeCurrentTag(tag, index) {
        this.closeTags(index)
      }
    },
    data() {
      return {
        tagsList: [{
          title: '工作首页',
          path: '/home',
          name: 'home'
        }]
      }
    },
    methods: {
      isActive(path) {
        return path === this.$route.fullPath
      },
      // 关闭单个标签
      closeTags(targetName, action) {
        if (action === 'remove') {
          var index = this.findIndex(targetName);
          const delItem = this.tagsList.splice(index, 1)[0]
          const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
          if (item) {
            delItem.path === this.$route.fullPath && this.$router.push(item.path)
          } else {
            this.$router.push('/')
          }
        }
      },
      // 设置标签
      setTags(route) {
        if (!route.meta.root) {
          return
        }
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath
        })
        if (!isExist) {
          if (this.tagsList.length >= 30) { // 最多允许放置30个标签
            this.tagsList.shift()
          }
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath,
            name: route.matched[1].components.default.name
          })
        }
        this.$bus('tags', this.tagsList)
      },
      //
      scroll(e) {
        this.$refs.tagsBox.scrollBy(-e.wheelDeltaY, 0)
      },
      onTagClick(tab, event) {
        this.$router.push(tab.name)
      },

      findIndex(path) {
        let position = -1
        for (let i = 0, len = this.tagsList.length; i < len; i++) {
          if (this.tagsList[i].path === path) {
            position = i
            break
          }
        }
        return position
      }
    },
    computed: {
      currentTabIndex () {
        var fullPath = this.$route.fullPath;
        if(null != fullPath && "" != fullPath){
          return "/" + fullPath.split("/")[1];
        }
        this.$router.push('/')
      },
      showTags() {
        return this.tagsList.length > 0
      }
    },
    watch: {
      $route(newValue, oldValue) {
        this.setTags(newValue)
      }
    },
    created() {
      this.setTags(this.$route)
    }
  }
</script>

<style lang="scss">
  .el-tabs--card>.el-tabs__header {
    background-color: #F5F7FA;
    border-bottom: 1px solid #E4E7ED;
    margin: 0;
    text-align:center;
  }
  .el-tabs--card>.el-tabs__header .is-active{
    background-color: #fff;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item{
    width:100px;
  }
   .el-tabs__header {
     padding: 0;
     position: relative;
     margin: 0 0 15px;
   }
  .tags {
    position: relative;
    height: 42px;
    z-index: 1;
    overflow: hidden;
    background: #fff;
  }

</style>
