<template>
  <ElContainer class="person">
    <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 180px;">
      <ElContainer direction="vertical">
        <ElHeader style="font-size: 16px;height: 40px;line-height: 40px;border-bottom: 1px solid #e7e8ea;">
          操作中心
        </ElHeader>
        <ElMain style="padding:0">
          <ElTree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
            class="filter-tree"
            default-expand-all>
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span style="font-size:14px;">
                  <i :class="data.icon" style="font-size:16px;color:#409eff;"/>&nbsp;&nbsp;{{ node.label }}
              </span>
            </span>
          </ElTree>
        </ElMain>
      </ElContainer>
    </ElAside>
    <router-view></router-view>
  </ElContainer>
</template>

<script>
  export default {
    name: 'me',
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created() {
      this.data = [
        {
          label: '我的工作',
          children: [
            {
              label: '我的提醒',
              icon: 'el-icon-chat-line-square',
              path: '/me/message'
            },
            {
              label: '个人文件',
              icon: 'el-icon-document',
              path: '/me'
            },
            {
              label: '与我协作',
              icon: 'el-icon-folder-checked'
            }
          ]
        },
        {
          label: '我的收藏',
          icon: 'el-icon-folder-opened'
        },
        {
          label: '常用标签',
          icon: 'el-icon-collection-tag'
        },
        {
          label: '我的邮件',
          icon: 'el-icon-message'
        },
        {
          label: '在线交流',
          icon: 'el-icon-chat-dot-round'
        }
      ]
    },
    methods: {
      handleNodeClick(node) {
        console.log(node.path)
        this.$router.push({ path: node.path })
      }
    }
  }
</script>
