<template>
  <ElContainer>
    <ElMain style="padding:0">
      <ElHeader style="font-size: 12px;height: 120px;border-bottom: 1px solid #e7e8ea;padding:0 5px;">
        <ElRow>
          <ElCol :span="24">
            <span style="cursor: pointer;font-size: 12px;margin-top: 8px;color: rgb(72, 168, 237);z-index: 2;position: absolute;right: 27px;">
              <ElInput
                style="width:300px;margin-right:20px;"
                size="mini"
                placeholder="请输入内容">
                <i slot="prefix" class="el-input__icon el-icon-search"/>
              </ElInput>
              <ElRadio v-model="radio" label="1">标题</ElRadio>
              <ElRadio v-model="radio" label="2">全文</ElRadio>
              <ElButton type="primary" size="mini">检索</ElButton>
              <ElButton type="primary" size="mini" @click.native="onAdvSearch">高级检索</ElButton>
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
                    <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#409eff;"/>廉政工作(14)
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
        <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 200px;">
          <ElMain style="padding:0">
            <ElTree
              class="filter-tree"
              :data="data1"
              :props="defaultProps"
              default-expand-all
              @node-click="handleNodeClick"
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
                <ElButton size="mini" icon="el-icon-download">下载</ElButton>
                <ElButton size="mini" icon="el-icon-delete">删除</ElButton>
                <ElButton size="mini" icon="el-icon-position">发送</ElButton>
                <ElButton size="mini" icon="el-icon-coin">暂存</ElButton>
                <ElButton size="mini" icon="el-icon-star-off">收藏</ElButton>
              </ElCol>
              <ElCol :span="14" style="text-align:right">
                按时间：
                <ElSelect size="mini" v-model="value" placeholder="请选择" style="width:120px;">
                  <ElOption
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </ElOption>
                </ElSelect>
                <ElInput
                  style="width:150px;"
                  size="mini"
                  placeholder="当前文件夹搜索">
                  <i slot="prefix" class="el-input__icon el-icon-search"/>
                </ElInput>
              </ElCol>
            </ElRow>
          </ElHeader>
          <ElContainer>
            <ElTable class="table-box-person" :data="tableData" :style="{height:contentHeight}">
              <ElTableColumn prop="name" label="名称">
                <template slot-scope="scope">
                    <span style="height:40px;line-height:40px;">
                      <span :style="'color:' + ('word' === scope.row.fileType ? '#409eff' : ('excel' === scope.row.fileType ? '#72dca2' : '#ff7398')) + ';font-size:25px;vertical-align: middle;'">
                        <i :class="'fa fa-file-' + scope.row.fileType + '-o'"/>
                      </span>
                      <span style="margin-left: 8px;">{{scope.row.name}}</span>
                    </span>
                </template>
              </ElTableColumn>
              <ElTableColumn prop="date" label="修改时间(修改人)" width="280">
              </ElTableColumn>
              <ElTableColumn prop="size" label="大小" width="120">
              </ElTableColumn>
            </ElTable>
          </ElContainer>
        </ElContainer>
      </ElContainer>
    </ElMain>
  </ElContainer>
</template>

<script>
  export default {
    name: 'CloudOrg',
    data() {
      return {
        options: [{
          value: 'all',
          label: '全部'
        }],
        value: '',
        contentHeight: '100px;',
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
      const that = this
      setTimeout(function() {
        that.contentHeight = document.documentElement.clientHeight - 200 + 'px'
      }, 100)
    },
    methods: {
      initPage() {
        // todo
      },
      onAdvSearch() {
        this.$router.push({ path: '/cloud/advSearch' })
      },
      handleNodeClick(data) {
        console.log(data)
      }
    },
    watch: {
      '$route'() {
        this.initPage()
      }
    }
  }
</script>

<style scoped>

</style>