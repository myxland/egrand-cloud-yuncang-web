<template>
  <ElContainer class="organize" direction="vertical">
    <ElHeader style="font-size: 12px;height: 40px;line-height: 40px;border-bottom: 1px solid #e7e8ea;">
      <ElRow :gutter="20" style="height:100%;line-height: 40px;">
        <ElCol :span="12" style="height:40px;line-height: 40px;color:#f56c6c;">
          <i class="el-icon-chat-line-round" style="font-size:18px;"/>
          【组织】存放我在组织和我管理组织的全部资料，您可以按组织浏览，也可以全文检索您需要的资料！
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
      <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 190px;">
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
      <ElContainer direction="vertical">
        <ElMain style="padding:0">
          <ElHeader style="font-size: 12px;height: 120px;border-bottom: 1px solid #e7e8ea;padding:0 5px;">
            <ElRow>
              <ElCol :span="24">
                <span
                  style="cursor: pointer;font-size: 12px;margin-top: 8px;color: rgb(72, 168, 237);z-index: 2;position: absolute;right: 27px;">
                  <ElInput
                    placeholder="请输入内容"
                    size="mini"
                    style="width:300px;margin-right:20px;">
                    <i class="el-input__icon el-icon-search" slot="prefix"/>
                  </ElInput>
                  <ElRadio label="1" v-model="radio">标题</ElRadio>
                  <ElRadio label="2" v-model="radio">全文</ElRadio>
                  <ElButton size="mini" type="primary">检索</ElButton>
                </span>
                <ElTabs>
                  <ElTabPane>
                    <span slot="label" style="font-size:12px;"><i class="el-icon-coordinate"/> 固定分类</span>
                    <div style="padding:12px;">
                      <ElRow :gutter="20" style="font-size:16px;margin-bottom:12px;">
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作计划(3)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>上级检查(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>业务工作(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作总结(5)
                        </ElCol>
                      </ElRow>
                      <ElRow :gutter="20" style="font-size:16px;">
                        <ElCol :span="6" style="color:#409eff;"><i class="fa fa-folder" style="margin-right:5px;"/>廉政工作(92)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-plus" style="margin-right:5px;color:#a7a7a7;"/>添加</ElCol>
                      </ElRow>
                    </div>
                  </ElTabPane>
                  <ElTabPane>
                    <span slot="label" style="font-size:12px;"><i class="el-icon-edit"/> 自定义分类</span>
                  </ElTabPane>
                  <ElTabPane label="标签">
                    <span slot="label" style="font-size:12px;"><i class="el-icon-collection"/> 标签</span>
                  </ElTabPane>
                </ElTabs>
              </ElCol>
            </ElRow>
          </ElHeader>
          <ElContainer>
            <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 210px;">
              <ElMain style="padding:0">
                <ElTree
                  :data="data1"
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
            <ElContainer direction="vertical">
              <ElHeader style="background-color: #fff;height: 40px;overflow: hidden;border-bottom: 1px solid #f5f6f9;">
                <ElRow :gutter="20" style="height:100%;line-height: 40px;">
                  <ElCol :span="10">
                    <ElButton icon="el-icon-download" size="mini">下载</ElButton>
                    <ElButton icon="el-icon-delete" size="mini">删除</ElButton>
                    <ElButton icon="el-icon-position" size="mini">发送</ElButton>
                    <ElButton icon="el-icon-coin" size="mini">暂存</ElButton>
                    <ElButton icon="el-icon-star-off" size="mini">收藏</ElButton>
                  </ElCol>
                  <ElCol :span="14" style="text-align:right">
                    按时间：
                    <ElSelect placeholder="请选择" size="mini" style="width:120px;" v-model="value">
                      <ElOption
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in options">
                      </ElOption>
                    </ElSelect>
                    <ElInput
                      placeholder="当前文件夹搜索"
                      size="mini"
                      style="width:150px;">
                      <i class="el-input__icon el-icon-search" slot="prefix"/>
                    </ElInput>
                  </ElCol>
                </ElRow>
              </ElHeader>
              <ElContainer>
                <ElTable :data="tableData" :style="{height:contentHeight}" class="table-box-person">
                  <ElTableColumn label="名称" prop="name">
                    <template slot-scope="scope">
                    <span style="height:40px;line-height:40px;">
                      <span
                        :style="'color:' + ('word' === scope.row.fileType ? '#409eff' : ('excel' === scope.row.fileType ? '#72dca2' : '#ff7398')) + ';font-size:25px;vertical-align: middle;'">
                        <i :class="'fa fa-file-' + scope.row.fileType + '-o'"/>
                      </span>
                      <span style="margin-left: 8px;">{{scope.row.name}}</span>
                    </span>
                    </template>
                  </ElTableColumn>
                  <ElTableColumn label="修改时间(修改人)" prop="date" width="280">
                  </ElTableColumn>
                  <ElTableColumn label="大小" prop="size" width="120">
                  </ElTableColumn>
                </ElTable>
              </ElContainer>
            </ElContainer>
          </ElContainer>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </ElContainer>
</template>

<script>
  export default {
    name: 'group',
    data() {
      return {
        contentHeight: '100px;',
        radio: '1',
        options: [{
          value: 'all',
          label: '全部'
        }],
        value: '全部',
        tableData: [{
          name: 'XX季度廉政自查表',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }, {
          name: 'XX季度廉政自查表',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }, {
          name: 'XX季度廉政自查表',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }, {
          name: 'XX季度廉政自查表',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }, {
          name: 'XX季度廉政自查表',
          date: '2016-05-02(张三)',
          fileType: 'excel',
          size: '10.1K'
        }],
        data: [{
          label: '我所在组织',
          icon: 'el-icon-user-solid',
          children: [{
            label: '机关第一党支部',
            icon: 'el-icon-office-building'
          }, {
            label: '办公室',
            icon: 'el-icon-office-building'
          }, {
            label: '扶贫工作领导小组',
            icon: 'el-icon-office-building'
          }]
        }, {
          label: '我管理的组织',
          icon: 'el-icon-s-custom'
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
        this.contentHeight = document.documentElement.clientHeight - 200 + 'px'
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