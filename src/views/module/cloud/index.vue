<template>
  <ElContainer class="cloud" direction="vertical">
    <ElHeader style="font-size: 12px;height: 40px;line-height: 40px;border-bottom: 1px solid #e7e8ea;">
      <ElRow :gutter="20" style="height:100%;line-height: 40px;">
        <ElCol :span="12" style="height:40px;line-height: 40px;color:#f56c6c;">
          <i class="el-icon-chat-line-round" style="font-size:18px;"/>
          【云仓】存放了单位里各组织的全部资料，您可以选择某一个组织浏览，也可以全文检索您感兴趣的资料！
        </ElCol>
        <ElCol :span="12" style="text-align:right;">
          <i class="el-icon-delete-solid" style="color:#409eff;font-size:22px;"/>
          <span>资料暂存(112)</span>
          <i class="el-icon-star-on" style="color:#409eff;font-size:22px;"/>
          <span>资料收藏(43)</span>
        </ElCol>
      </ElRow>
    </ElHeader>
    <ElContainer>
      <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 220px;">
        <ElHeader style="font-size: 14px;height: 40px;line-height: 40px;border-bottom: 1px solid #e7e8ea;">
          <i class="fa fa-ellipsis-v" style="margin-right:10px;color:#409eff"/>按组织浏览
        </ElHeader>
        <ElMain style="padding:0">
          <ElTree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
            class="filter-tree"
            default-expand-all
            ref="tree">
              <span class="custom-tree-node" slot-scope="{ node }">
                <span>
                    <i :class="node.icon" style="font-size:16px;color:#409eff;"/>&nbsp;&nbsp;{{ node.label }}
                </span>
              </span>
          </ElTree>
        </ElMain>
      </ElAside>
      <RouterView :style="{height:viewHeight}" id="cloud-view"/>
    </ElContainer>
  </ElContainer>
</template>

<script>
  export default {
    name: 'cloud',
    data() {
      return {
        options: [{
          value: 'all',
          label: '全部'
        }],
        value: '',
        viewHeight: '100px;',
        radio: '1',
        tableData: [{
          name: '中心组学习文件',
          date: '2016-05-02(张三)',
          fileType: 'word',
          size: '10.1K'
        }, {
          name: '中心组学习文件',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }, {
          name: '中心组学习文件',
          date: '2016-05-02(张三)',
          fileType: 'pdf',
          size: '10.1K'
        }],
        data: [{
          label: '河源市税务局党委(888)',
          icon: 'fa fa-bars'
        }, {
          label: '河源市税务局机关',
          icon: 'fa fa-bars',
          children: [{
            label: '办公室(330)',
            icon: 'el-icon-office-building'
          }, {
            label: '纳税服务处(350)',
            icon: 'el-icon-office-building'
          }, {
            label: '征管和科技发展处(120)',
            icon: 'el-icon-office-building'
          }, {
            label: '人事处(89)',
            icon: 'el-icon-office-building'
          }, {
            label: '教育处(112)',
            icon: 'el-icon-office-building'
          }, {
            label: '系统党建工作处(112)',
            icon: 'el-icon-office-building'
          }]
        }, {
          label: '源城区税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: '东源县税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: '龙川县税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: '紫金县税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: ' 连平县税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: '高新区税务局机关',
          icon: 'fa fa-bars'
        }, {
          label: '江东新区税务局机关',
          icon: 'fa fa-bars'
        }],
        data1: [{
          label: '廉政工作(92)',
          icon: 'el-icon-folder-opened',
          children: [{
            label: '廉政风险点(20)',
            icon: 'el-icon-document'
          }, {
            label: '廉政教育(52)',
            icon: 'el-icon-document'
          }, {
            label: '廉政检查',
            icon: 'el-icon-folder-opened',
            children: [{
              label: '一季度检查(4)',
              icon: 'el-icon-document'
            }, {
              label: '一季度检查(6)',
              icon: 'el-icon-document'
            }, {
              label: '一季度检查(10)',
              icon: 'el-icon-document'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created() {
      setTimeout(() => {
        this.viewHeight = document.documentElement.clientHeight - 40 + 'px'
      }, 100)
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>