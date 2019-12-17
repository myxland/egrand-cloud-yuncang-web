<template>
  <ElContainer>
    <ElMain id="personFileMain" style="padding:0">
      <ElHeader style="height: 60px;overflow: hidden;border-bottom: 1px solid #e7e8ea;">
        <ElRow :gutter="20" style="height:100%;line-height: 60px;">
          <ElCol :span="12" style="display:flex">
            <div style="flex: 0 0 auto;">
              <i class="el-icon-folder-opened" style="font-size:38px;color:#52a2d7;line-height: 60px;height: 60px;"/>
            </div>
            <div style="flex: 1 1 auto;margin-left:5px;">
              <div style="display: flex;color: #252e36;font-size: 16px;line-height: 22px;margin-top:15px;">
                <ElBreadcrumb separator-class="el-icon-arrow-right">
                  <ElBreadcrumbItem :to="{ path: '/' }">个人文件</ElBreadcrumbItem>
                </ElBreadcrumb>
                <i class="el-icon-star-off"
                   style="font-size:20px;color:#52a2d7;margin-left:5px;cursor:pointer;"
                   title="添加收藏"/>
              </div>
              <div style="display: flex;color: #747b93;height: 18px;line-height: 18px;overflow: hidden;">已用 17.21 MB/共
                20.00 GB
              </div>
            </div>
          </ElCol>
          <ElCol :span="12" style="text-align:right">
            <ElButton circle size="mini" style="margin-right:0;" type="danger">周</ElButton>
            <ElButton round size="mini" style="margin-left:0;"><i class="el-icon-plus"
                                                                  style="font-size:8px;color:#52a2d7;"/>协作成员
            </ElButton>
            <ElButton size="mini">分享<i class="el-icon-caret-bottom"/></ElButton>
            <ElButton size="mini"><i class="el-icon-more"/></ElButton>
          </ElCol>
        </ElRow>
      </ElHeader>
      <ElContainer direction="vertical">
        <ElHeader style="background-color: #fff;height: 40px;overflow: hidden;border-bottom: 1px solid #ededed;">
          <ElRow :gutter="20" style="height:100%;line-height: 40px;">
            <ElCol :span="12">
              <ElButton icon="el-icon-plus" size="mini" type="primary">新建</ElButton>
              <ElButton size="mini" type="primary">上传<i class="el-icon-upload el-icon--right"/></ElButton>
            </ElCol>
            <ElCol :span="12" style="text-align:right">
              <ElInput
                placeholder="请输入内容"
                size="mini"
                style="width:200px;">
                <i class="el-input__icon el-icon-search" slot="prefix"/>
              </ElInput>
              <span style="margin-left:20px;">
                  <i class="el-icon-menu" style="color:#409eff"/>
                  <i class="el-icon-caret-bottom" style="color:#409eff"/>
                </span>
            </ElCol>
          </ElRow>
        </ElHeader>
        <ElContainer>
          <div style="width:100%;">
            <easy-cm :arrow="true"
                    :itemSize="12"
                    :list="$util.getFileContextMenu('file')"
                    :tag="1"
                    @ecmcb="onFileContextMenuClick"/>
            <easy-cm :arrow="true"
                    :itemSize="12"
                    :list="$util.getFileContextMenu('folder')"
                    :tag="2"
                    @ecmcb="onFolderContextMenuClick"/>
            <ElTable :data="fileData"
                     :style="{height:contentHeight}"
                     @row-contextmenu="onRowContextMenu"
                     @row-dblclick="onRowDblClick"
                     class="table-box-person"
                     height="434">
              <ElTableColumn label="名称" prop="name">
                <template slot-scope="scope">
                  <span style="height:40px;line-height:40px;cursor:pointer;">
                    <span
                      :style="'color:' + $util.getFileColor(scope.row.fileType) + ';font-size:25px;vertical-align: middle;'">
                      <i :class="$util.getFileIcon(scope.row.fileType)"/>
                    </span>
                    <span style="margin-left: 8px;">{{scope.row.name}}</span>
                    <span class="u-btn"><i class="fa fa-star-o"/><i class="el-icon-collection-tag"/></span>
                  </span>
                </template>
              </ElTableColumn>
              <ElTableColumn label="修改时间(修改人)" prop="date" width="280">
                <template slot-scope="scope">
                  <span class="date" style="margin-left: 8px;">{{scope.row.date}}</span>
                  <span class="u-btn" style="position:absolute;;height:58px;line-height:58px;top:0;left:0;">
                    <ElButton size="small" v-if='$util.isFolder(scope.row.fileType)'>协作成员</ElButton>
                    <ElButton size="small" v-if='!$util.isFolder(scope.row.fileType)'>编辑</ElButton>
                    <ElButton size="small">分享</ElButton>
                    <ElButton
                      @click="onMoreClick($event, ($util.isFolder(scope.row.fileType) ? '2' : '1'), scope.row.id)"
                      icon="el-icon-more"
                      size="small"/>
                  </span>
                </template>
              </ElTableColumn>
              <ElTableColumn label="大小" prop="size" width="120">
              </ElTableColumn>
            </ElTable>
          </div>
        </ElContainer>
      </ElContainer>
    </ElMain>
  </ElContainer>
</template>

<script>
  export default {
    name: 'person',
    data() {
      return {
        dialogVisible: false,
        contentHeight: '100px;',
        id: 0,
        fileData: []
      }
    },
    created() {
      const that = this
      setTimeout(function() {
        that.contentHeight = document.documentElement.clientHeight - 220 + 'px'
      }, 100)
      this.initPage()
    },
    methods: {
      initPage() {
        this.id = this.$route.params.id ? this.$route.params.id : 0
        console.log(this.id);
        if(1 == this.id){
          this.fileData = [
            {
              id: 1,
              name: '我的文件夹',
              date: '2016-05-02(张三)',
              fileType: 'folder',
              size: '10.1K'
            }
          ]
        }else {
          this.fileData = [
            {
              id: 1,
              name: '我的文件夹',
              date: '2016-05-02(张三)',
              fileType: 'folder',
              size: '10.1K'
            },
            {
              id: 2,
              name: '中心组学习文件',
              date: '2016-05-02(张三)',
              fileType: 'word',
              size: '10.1K'
            },
            {
              id: 3,
              name: '中心组学习文件',
              date: '2016-05-02(张三)',
              fileType: 'excel',
              size: '10.1K'
            },
            {
              id: 4,
              name: '中心组学习文件',
              date: '2016-05-02(张三)',
              fileType: 'pdf',
              size: '10.1K'
            }
          ]
        }
      },
      onMoreClick(e, tag, id) {
        this.id = id
        this.$root.$emit('easyAxis', {
          tag: tag,
          x: e.clientX,
          y: e.clientY
        })
      },
      onRowContextMenu(row, event) {
        this.id = row.id
        event.stopPropagation()
        event.preventDefault()
        this.$root.$emit('easyAxis', {
          tag: this.$util.isFolder(row.fileType) ? '2' : '1',
          x: event.clientX,
          y: event.clientY
        })
      },
      onRowDblClick(row) {
        if (this.$util.isFolder(row.fileType)) {
          this.$router.push({ path: '/me/file/file1$file2$' + row.id })
        }
      },
      onFileContextMenuClick(indexList) {
        console.log(this.id)
        console.log(indexList)
      },
      onFolderContextMenuClick(indexList) {
        console.log(this.id)
        console.log(indexList)
      }
    },
    watch: {
      '$route'() {
        // 重新获取数据
        this.initPage()
      }
    }
  }
</script>

<style scoped>

</style>
