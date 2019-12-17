<template>
  <div style="background-color: #e4e4e4">
    <ElContainer class="homePage" direction="vertical">
      <ElHeader style="font-size: 12px;height: 160px;line-height: 40px;border-bottom: 1px solid #e7e8ea;padding:0;">
        <ElRow>
          <ElCol :span="12" style="height: 100%;border: 1px solid #e9e9e9;background-color: #fff;">
            <ElRow style="border-bottom:1px solid #e9e9e9;">
              <ElCol :span="24">
                <i class="fa fa-bars" style="padding:10px;"/>常用功能
              </ElCol>
            </ElRow>
            <ElRow style="height:116px;padding:10px;">
              <ElCol :span="24">
                <ElRow>
                  <ElCol :span="6" style="text-align:center">
                    <ElBadge :value="15" class="item" type="warning">
                      <i class="fa fa-download" style="font-size:45px;color:#409eff;margin-top:10px;"/>
                    </ElBadge>
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    <ElBadge :value="10" class="item" type="primary">
                      <i class="fa fa-cart-arrow-down" style="font-size:45px;color:#409eff;margin-top:10px;"/>
                    </ElBadge>
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    <ElBadge :value="23" class="item" type="warning">
                      <i class="fa fa-star-o" style="font-size:45px;color:#409eff;margin-top:10px;"/>
                    </ElBadge>
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    <ElBadge :value="8" class="item" type="warning">
                      <i class="fa fa-comments-o" style="font-size:45px;color:#409eff;margin-top:10px;"/>
                    </ElBadge>
                  </ElCol>
                </ElRow>
                <ElRow>
                  <ElCol :span="6" style="text-align:center">
                    资料接收
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    资料暂存
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    资料收藏
                  </ElCol>
                  <ElCol :span="6" style="text-align:center">
                    工作互动
                  </ElCol>
                </ElRow>
              </ElCol>
            </ElRow>
          </ElCol>
          <ElCol :span="12" style="height: 100%;border: 1px solid #e9e9e9;background-color: #fff;">
            <ElRow style="border-bottom:1px solid #e9e9e9;">
              <ElCol :span="24">
                <i class="fa fa-envelope-o" style="padding:10px;"/>我的消息
              </ElCol>
            </ElRow>
            <ElRow style="height:116px;">
              <ElCol :span="24">
                <ElRow>
                  <ElCol :span="10">
                    <span style="margin-left:15px;"><i class="fa fa-volume-down"
                                                       style="color:#409eff;margin-right:10px;"/>2019年第二季度中心组学习资料已经更新</span>
                  </ElCol>
                  <ElCol :span="8" style="text-align:center;">
                    2019/10/25
                  </ElCol>
                  <ElCol :span="6">
                    <ElTag type="success">已读</ElTag>
                  </ElCol>
                </ElRow>
                <ElRow>
                  <ElCol :span="10">
                    <span style="margin-left:15px;"><i class="fa fa-volume-down"
                                                       style="color:#409eff;margin-right:10px;"/>2019年第二季度中心组学习资料已经更新</span>
                  </ElCol>
                  <ElCol :span="8" style="text-align:center;">
                    2019/10/25
                  </ElCol>
                  <ElCol :span="6">
                    <ElTag type="success">已读</ElTag>
                  </ElCol>
                </ElRow>
              </ElCol>
            </ElRow>
          </ElCol>
        </ElRow>
      </ElHeader>
      <ElContainer direction="vertical">
        <ElMain style="padding:0">
          <ElHeader style="font-size: 12px;height: 117px;border-bottom: 1px solid #e7e8ea;padding:0;">
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
                <ElTabs style="background-color: #fff" type="card">
                  <ElTabPane>
                    <span slot="label" style="font-size:12px;"><i class="el-icon-coordinate"/> 常用资料</span>
                    <div style="padding:12px;">
                      <ElRow :gutter="20" style="font-size:14px;margin-bottom:12px;">
                        <ElCol :span="4" style="color:#409eff;"><i class="fa fa-folder" style="margin-right:5px;"/>中心组学习(92)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>党委会议(8)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>民主生活会(8)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>局长办公会(5)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>专题工作会议(5)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>分管工作情况(5)
                        </ElCol>
                      </ElRow>
                      <ElRow :gutter="20" style="font-size:14px;">
                        <ElCol :span="4"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>风险与问题(92)
                        </ElCol>
                        <ElCol :span="4"><i class="fa fa-plus" style="margin-right:5px;color:#a7a7a7;"/>添加</ElCol>
                      </ElRow>
                    </div>
                  </ElTabPane>
                  <ElTabPane>
                    <span slot="label" style="font-size:12px;"><i class="el-icon-edit"/> 待整理</span>
                    <div style="padding:12px;">
                      <ElRow :gutter="20" style="font-size:14px;margin-bottom:12px;">
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作计划(3)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>上级检查(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>业务工作(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作总结(5)
                        </ElCol>
                      </ElRow>
                      <ElRow :gutter="20" style="font-size:14px;">
                        <ElCol :span="6" style="color:#409eff;"><i class="fa fa-folder" style="margin-right:5px;"/>廉政工作(92)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-plus" style="margin-right:5px;color:#a7a7a7;"/>添加</ElCol>
                      </ElRow>
                    </div>
                  </ElTabPane>
                  <ElTabPane style="height:100%;">
                    <span slot="label" style="font-size:12px;"><i class="el-icon-collection"/> 待提交</span>
                    <div style="padding:12px;">
                      <ElRow :gutter="20" style="font-size:14px;margin-bottom:12px;">
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作计划(3)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>上级检查(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>业务工作(8)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-folder" style="margin-right:5px;color:#a7a7a7;"/>工作总结(5)
                        </ElCol>
                      </ElRow>
                      <ElRow :gutter="20" style="font-size:14px;">
                        <ElCol :span="6" style="color:#409eff;"><i class="fa fa-folder" style="margin-right:5px;"/>廉政工作(92)
                        </ElCol>
                        <ElCol :span="6"><i class="fa fa-plus" style="margin-right:5px;color:#a7a7a7;"/>添加</ElCol>
                      </ElRow>
                    </div>
                  </ElTabPane>
                </ElTabs>
              </ElCol>
            </ElRow>
          </ElHeader>
          <ElContainer>
            <ElAside style="background-color: #fcfcfc;border-right: 1px solid #ededed;width: 250px;">
              <ElMain style="padding:0">
                <ElTree
                  :data="data1"
                  :props="defaultProps"
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
  </div>
</template>

<script>
  export default {
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
          name: '2019年第一季度中心组学习通知',
          date: '2016-05-02(张三)',
          fileType: 'word',
          size: '10.1K'
        }, {
          name: '2019年第一季度中心组学习材料',
          date: '2016-05-02(张三)',
          fileType: 'pdf',
          size: '10.1K'
        }, {
          name: '2019年第一季度中心组领导发言',
          date: '2016-05-02(张三)',
          fileType: 'word',
          size: '10.1K'
        }, {
          name: '2019年第一季度中心组会议记录',
          date: '2016-05-02(张三)',
          fileType: 'word',
          size: '10.1K'
        }, {
          name: '2019年第一季度中心组学习领导发言大纲',
          date: '2016-05-02(张三)',
          fileType: 'word',
          size: '10.1K'
        }],
        data1: [{
          label: '中心组学习(92)',
          icon: 'el-icon-folder-opened',
          children: [{
            label: '学习管理办法(20)',
            icon: 'el-icon-document'
          }, {
            label: '学习计划(52)',
            icon: 'el-icon-document'
          }, {
            label: '2019第一季度中心组学习',
            icon: 'el-icon-folder-opened',
            children: [{
              label: '会议通知(4)',
              icon: 'el-icon-document'
            }, {
              label: '学习材料(6)',
              icon: 'el-icon-document'
            }, {
              label: '主题发言稿(10)',
              icon: 'el-icon-document'
            }, {
              label: '领导发言大纲(5)',
              icon: 'el-icon-document'
            }, {
              label: '学习会议纪要(8)',
              icon: 'el-icon-document'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*home.css*/

  .spanmenu {
    height: 33px;
    width: 100%;
    display: block;
  }

  div, ul, li, p {
    margin: 0;
    padding: 0;
  }

  .menuLi {
    background: rgba(221, 221, 221, 0.1);
    height: 100%;
    overflow: auto;
  }

  .menuLi::-webkit-scrollbar {
    width: 0;
  }

  .menuLi li {
    cursor: pointer;
    height: 33px;
    line-height: 33px;
    font-size: 12px;
    padding: 3px;
    padding-left: 5px;
    list-style: none;
    border: none;
  }

  .change_top {
    position: absolute;
    top: 0 !important;
  }

  .left_right_btn {
    height: 22px;
  }

  .left_right_btn a img {
    margin-top: 5px;
  }

  .img_nav {
    display: inline-block;
    float: left;
    vertical-align: middle;
  }

  .img_nav2 {
    display: inline-block;
    float: left;
  }

  .click {
    width: 165px;
    margin: 2px;
    clear: both;
    background: none;
  }

  .click1 {
    width: 60px;
    height: 50px;
    line-height: 18px;
    float: left;
    box-sizing: border-box;
    padding: 4px 1px 1px 1px;
    text-align: center;
    margin-bottom: 5px;
  }

  .click1 img {
    width: 16px;
    height: 16px;
    padding: 0;
    white-space: pre-wrap;
  }

  .click1:hover {
    background-color: rgba(72, 84, 106, 0.1);;
  }

  .logout {
    border-top: 1px solid #e3e3e3;
    clear: both;
    height: 25px;
    line-height: 25px;
  }

  .position_down {
    margin-left: 4% !important;
    padding: 0 0 !important;
    font-size: 12px;
    text-align: center;
  }

  .el-menu-item,
  .el-submenu__title {
    height: 33px !important;
    line-height: 33px;
    font-size: 12px !important;
    font-family: 'MicrosoftYaHei', serif;
  }

  .el-submenu .el-menu-item {
    min-width: 180px !important;
    overflow: hidden;
    font-size: 12px;
    height: 33px !important;
    line-height: 33px;
  }

  .el-submenu__title:hover {
    background-color: rgba(47, 121, 193, 0.3);
    box-shadow: 5px 3px 5px #888;
  }

  /*子菜单*/

  .el-menu .el-menu-item {
    background-color: rgba(47, 121, 193, 0.1);
  }

  .el-menu .el-menu-item:hover {
    background-color: rgba(47, 121, 193, 0.3);
  }

  .el-submenu__title .el-menu-item:hover {
    background-color: rgba(47, 121, 193, 0.3);
    box-shadow: 10px 3px 5px #888;
    /*border-bottom: 1px solid #fff;*/
  }

  .el-submenu__title .el-menu-item li:hover {
    border-bottom: 1px solid #eeeeee;
  }

  /*子菜单选中*/

  .el-menu .el-menu-item.is-active {
    background-color: rgba(47, 121, 193, 0.3);
    border-left: 2px solid #2F79C1;
    box-sizing: border-box;
  }

  .el-submenu.is-active.is-opened .el-submenu__title:hover {
    /*background-color: rgba(47,121,193,0.3);*/
    box-shadow: 10px 3px 5px #888;
  }

  .el-menu-item_children {
    padding-left: 10px;
    overflow-x: scroll;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .el-menu-item_children::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /*.el-submenu .el-menu-item:hover {
  }

  .el-submenu .el-menu-item.is-active,
  .el-menu-item.is-active,
  .el-submenu .el-menu-item.is-active:hover,
  .el-menu-item.is-active:hover {
    background-color: rgba(47,121,193,0.2);
    color: #2F79C1;
    border-left: 2px solid #2F79C1;
    box-sizing: border-box;
    box-shadow:3px 0px 2px #888888 inset;
  }

  .el-submenu .el-menu-item.is-active:hover {

  }*/

  #el-menu {
    background-color: transparent;
  }

  .el-menu .iconfont {
    vertical-align: baseline;
    margin-right: 6px;
  }

  .warp-breadcrum {
    border-bottom: 1px solid #efefef;
    padding-bottom: 3px;
  }

  .warp-main {
    padding-top: 20px;
  }

  .childers {
    right: -136px;
    padding-left: 0;
  }

  .childers_li {
    margin-left: 100px;
  }

  .menu-color {
    background-color: #333744;
  }

  .three_child {
    height: 100%;
    width: 140px !important;
    /*background-color: rgba(72, 84, 106, 0.1);*/
  }

  #srcoll_sider {
    position: relative;
    height: 100%;
  }

  .three_childs {
    position: absolute;
  }

  .three_title {
    width: 85%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    padding: 10px 10px;
    font-size: 12px;
    font-weight: bold;
    background: #dce0e5;
  }

  .three_trees {
    overflow-y: auto;
    overflow-x: hidden;
    height: 580px;
  }

  .menu-toggles {
    display: inline-block;
    background: rgb(238, 240, 246);
    /*background: url(sq2.png);*/
    height: 24px;
    line-height: 24px;
    position: absolute;
    top: 50%;
    left: -1px;
    z-index: 9;
    border: 1px solid #fff;
    box-shadow: 2px 0 1px #888;
  }

  .three_title_child {
    width: 100%;
    font-size: 12px;
    line-height: 40px;
    font-weight: bold;
    cursor: pointer;
  }

  .three_child .no_border {
    border: none;
    font-size: 12px;
    background: none;
  }

  .color_change {
    color: #8DB5DD;
  }

  .iconCls {
    vertical-align: middle;
    padding-right: 9px;
  }

  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    min-width: 900px;
    /*background: #F7BA2A;*/
  }

  .container .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
  }

  .icon-list li {
    float: left;
    width: 100%;
    text-align: center;
    height: 60px;
    color: #fff;
    font-size: 13px;
    margin-top: 15px;
    margin-right: -1px;
    margin-bottom: -1px;
    display: list-item;
    cursor: pointer;
  }

  .icon-list li span {
    display: inline-block;
    vertical-align: middle;
  }

  .icon-list li i {
    display: block;
    font-size: 32px;
    color: #3daaf9;
    transition: color .15s linear;
  }

  .icon-list li .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
  }

  .container .topbar-wrap {
    height: 50px;
    padding: 0;
  }

  .headerW {
    width: 702px;
    display: inline-block;
    height: 50px;
    background-position: -9px 20px;
  }

  .headerW-img {
    height: 30px;
    position: absolute;
    top: 10px;
  }

  .container .topbar-wrap .topbar-btn {
    color: #fff;
    /*background-image: url(../postimg/logo_cxfxcd.png);*/
  }

  /*右边账户按钮*/

  .container .topbar-wrap .user_btn {
    background-image: none !important;
  }

  /*头部右按钮*/

  /*.container .topbar-wrap .head_btn {
    margin-right: 40px;
  }*/

  .container .topbar-wrap .head_btn .margin_image a {
    vertical-align: middle;
    margin-right: 20px;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    width: 42px;
  }

  .container .topbar-wrap .head_btn .margin_image a img {
    vertical-align: middle;
    cursor: pointer;
    display: inline-block;
  }

  .container .topbar-wrap .head_btn .margin_image .span {
    display: inline-block;
    width: 10px;
    vertical-align: middle;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
  }

  .container .topbar-wrap .head_btn .margin_image span.em {
    background: #ff9900;
    border-radius: 4px;
    margin-left: 4px;
    color: #fff;
    font-size: 12px;
    padding: 2px;
  }

  .container .topbar-wrap .help_btn {
    margin-right: 32px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  /*头部导航*/

  .container .topbar-wrap .topbar-btn:hover {
    //cursor: pointer;
  }

  .container .topbar-wrap .topbar-logo {
    float: left;
    text-align: center;
    width: 64px;
    // line-height: 20px;
  }

  .container .topbar-wrap .topbar-title {
    float: left;
    width: 702px;
    height: 50px;
    font-family: 'MicrosoftYaHei', serif;
  }

  .container .topbar-wrap .topbar-account {
    float: right;
    margin-top: 15px;
    padding-right: 12px;
  }

  .container .topbar-wrap .userinfo-inner {
    cursor: pointer;
    //color: #fff;
    padding-left: 10px;
    margin-right: 30px;
  }

  .container .homeMainContainer {
    display: flex;
    overflow: hidden;
    height: calc(100% - 50px);
  }

  .fullhomeMainContainer {
    height: 100% !important;
  }

  /*路径，面包屑*/

  .container .navboard {
    border-radius: 4px !important;
    background: #f9f9f9;
  }

  .container .el-breadcrumb {
    font-size: 12px !important;
    line-height: normal;
  }

  .container .navboard img {
    margin-right: 5px;
    cursor: pointer;
  }

  .tab_home {
    position: relative;
  }

  .home_tab_plan .el-tabs__content {
    padding: 0 !important;
  }

  .home_tab_plan .el-tabs__item {
    background: rgba(10, 0, 0, 0);
    border-radius: 10px 16px 0 0;
    /*box-shadow: 0 2px 2px rgba(0, 0, 0, .4);*/
    height: 24px;
    // line-height: 24px;
  }

  .tab_button {
    position: absolute;
    top: 0;
    right: 15px;
  }

  .tab_button a .img_nav,
  .tab_button a .img_nav2 {
    width: 16px;
    height: 16px;
  }

  /*滚动条样式*/

  .menu-expanded::-webkit-scrollbar {
    width: 0 !important;
  }

  /* 这是针对缺省样式 (必须的) */

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  /* 滚动条的滑轨背景颜色 */

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
  }

  /* 滑块颜色 */

  ::-webkit-scrollbar-button {
    background-color: rgba(0, 0, 0, 0);
    height: 0;
    width: 0;
  }

  /* 滑轨两头的监听按钮颜色 */

  ::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0);
  }

  /* 横向滚动条和纵向滚动条相交处尖角的颜色 */

  .container aside {
    flex: 0 0 157px;
    background: #fff;
    display: block !important;
  }

  .container aside .el-menu {
    height: 95%;
    width: auto !important;
    /*折叠树*/
    border-radius: 0;
    background-color: #FCFCFC;
  }

  .container aside .menu-color {
    background-color: #333744
  }

  .container aside .collapsed {
    width: 50px;
  }

  aside .collapsed .submenu {
    position: absolute;
    top: 0;
    left: 50px;
    z-index: 9999;
    height: auto;
    display: none;
  }

  .scrollthis {
    height: 10px;
  }

  #srcoller {
    overflow: auto;
  }

  #srcoller::-webkit-scrollbar {
    width: 0;
  }

  /*左列表*/

  .container .submenu__title {
    height: 33px !important;
    font-size: 12px;
  }

  .container .menu-collapsed {
    flex: 0 0 50px;
    width: 50px;
  }

  .container .menu-expanded {
    flex: 0 0 180px;
    width: 200px;
    /*overflow-y: auto;
      overflow-x: auto;*/
    /*左边滚动*/
  }

  .container .menu-toggle {
    background: rgb(238, 240, 246);
    text-align: center;
    color: #8DB5DD;
    height: 25px;
    line-height: 28px;
  }

  .container .content-container {
    flex: 1;
    position: relative;
    padding: 0 !important;
    border-top: none;
  }

  .container .content-container .content-wrapper {
    box-sizing: border-box;
  }

  .home_tab_plan .el-tabs__nav-scroll {
    background-color: #409eff;
    width: calc(100% - 84px);
  }

  .home_tab_plan .el-tabs__nav-next {
    right: 90px;
  }

  .home_tab_plan .el-tabs__nav-next, .home_tab_plan .el-tabs__nav-prev {
    line-height: 32px;
  }

  /************样式引*************/

  .fullscreen {
    height: 28px;
    width: 62px;
    margin-top: 5px;
  }

  .el-button.clean-button1 {
    background: url("../../assets/img/pullscreen.png") no-repeat;
    background-size: 16px 16px;
    width: 22px;
    border: none;
    cursor: pointer;
    padding-right: 40px;
    margin-top: 1px;
    opacity: 0.6;
    display: inline-block;
    z-index: 99999;
  }

  .el-button.clean-button2 {
    background: url("../../assets/img/esc.png") no-repeat;
    background-size: 16px 16px;
    width: 22px;
    border: none;
    cursor: pointer;
    padding-right: 40px;
    /*margin: 10px 23px;*/
    opacity: 0.6;
    display: inline-block;
    z-index: 99999;
  }

  /*2.6重修-ajaxlu*/
  .el-button.hyht_seceen_back:hover {
    background: url("../../assets/img/hyht_qp.png") no-repeat;
    width: 22px;
    border: none;
    cursor: pointer;
    opacity: 0.6;
    padding: 15px;
    display: inline-block;
    z-index: 99999;
    margin: 0;
  }

  .hyht_seceen_full.el-button:hover {
    background: url("../../assets/img/hyht_tp.png") no-repeat;
    z-index: 99999;
    width: 22px;
    border: none;
    cursor: pointer;
    padding-right: 40px;
    opacity: 0.6;
    display: inline-block;
    margin-top: 4px;
  }

  .tab_home .el-tabs .el-tabs__content {
    width: 95%;
  }

  /* tab右键操作 */
  .context-menu {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    padding: 0;
    text-align: center;
    background-color: #fff;
    border: 1px solid #D3DCE6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    border-radius: 2px;
  }

  .context-menu li {
    list-style: none;
    line-height: 28px;
    width: 120px;
    height: 28px;
    color: #666;
  }

  /*左右全屏按钮*/
  .container .navboard .fullscreenbtn {
    display: inline-block;
    width: auto;
  }

  .container .navboard .fullscreenbtn .fullscreenbtn_tp {
    //margin-top: 5px;
    width: 20px;
  }

  .container .navboard .fullscreenbtn .fullscreenbtn_qp {
    //margin-top: 5px;
    width: 20px;
  }

  .container .navboard .hyht_home_tab .el-tabs__header {
    border-bottom-color: #fff;
  }

  .container .navboard .tab_button {
    width: auto;
  }

  .container .navboard .tab_button a {
    display: inline-block;
    width: 22px;
  }

  .container .navboard .tab_button a .img_nav,
  .tab_button a .img_nav2 {
    width: 20px;
    height: 20px;
  }

  .margin_image {
    margin-right: 10px;
  }

  /*tab更新*/
  .navboard {
    height: 100%;
  }

  .home_tab_plan .el-tab-pane {
    height: 100%;
  }

  .home_tab_plan .el-tabs__content {
    padding: 0;
  }

  .home_tab_plan .el-tab-pane div,
  .home_tab_plan .el-tab-pane div iframe {
    height: 100%;
  }

  .home_group_btn {
    background-color: #409eff;
    clear: both;
    height: 30px;
    position: absolute;
    line-height: 30px;
    right: 0;
    width: 90px;
    z-index: 100;
    overflow: hidden;
  }

  .home_group_btn .tab_button {
    position: absolute;
    //top: -2px;
    right: 4px;
    //width: 7%;
  }

  .home_tab_plan.el-tabs--border-card {
    border: none;
    box-shadow: none;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__item {
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin: 5px 2px 0 2px;
    max-width: 160px;
    padding: 0 10px !important;
    color: #666;
    z-index: 99;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__item .el-icon-close {
    float: right;
    margin-top: 7px;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__nav {
    padding-left: 5px;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__header {
    background-color: #409eff;
    height: 31px;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__item.is-active {
    background: #fff;
    border: 1px solid #ccc;
    color: #666;
    border-bottom-color: #fff;
  }

  .home_tab_plan.el-tabs--border-card .el-tabs__nav-wrap {
    top: 3px;
  }

  .hyht_border_bottom {
    position: absolute;
    top: 32px;
    left: 0;
    height: 1px;
    width: 100%;
    z-index: 10;
    transform: scale(1);
    border-top: 1px solid #ccc;
    box-shadow: inset 0 1px hsla(0, 0%, 100%, .6);
    background-color: #fff;
  }

  .el-tabs.el-tabs--border-card {
    position: relative;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.cur,
  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.curSelectedNode {
    background-image: none;
    color: #2F76B1 !important;
    background: #f8f8f8;
    border-bottom: 1px solid #e5e5e5;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.cur span.button,
  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.curSelectedNode span.button {
    position: relative;
    left: -30px;
    border-right: 0 solid transparent;
    -webkit-filter: drop-shadow(30px 0 #2F76B1);
    filter: drop-shadow(30px 0 #2F76B1);
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.cur .node_name,
  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0.curSelectedNode .node_name {
    color: #2F76B1 !important;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0 span.button {
    margin-right: 5px;
    margin-top: 8px;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0 {
    border-bottom: 1px solid #e5e5e5;
    color: #666 !important;
    background: #f8f8f8;
    height: 30px;
    line-height: 30px;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0 span {
    font-weight: 400;
    color: #666;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0:hover {
    background: #fff;
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0:hover span.button {
    position: relative;
    left: -30px;
    border-right: 0 solid transparent;
    -webkit-filter: drop-shadow(30px 0 #2F76B1);
    filter: drop-shadow(30px 0 #2F76B1);
  }

  #tjfxMenu .menu_section .ztree.sysMenuBtn li a.level0:hover .node_name {
    color: #2F76B1 !important;
  }

  #tjfxMenu .menu_section .inputBox {
    border-bottom: 1px solid #e5e5e5;
  }

  .sanjiaobutton {
    position: absolute;
    display: inline-block;
    height: 20px;
    width: 9px;
    left: 1px;
    cursor: pointer;
    z-index: 46;
    top: 323px;
    color: #B6D2ED;
    transform: rotate(180deg)
  }

  .sanjiao_class {
    position: absolute;
    display: inline-block;
    height: 20px;
    width: 9px;
    left: -4px;
    cursor: pointer;
    z-index: 46;
    top: 323px;
    color: #B6D2ED;
    transform: rotate(0deg)
  }

  #line {
    position: relative;
    height: 100%;
    width: 6px;
    overflow: hidden;
    background: #ECF4F7;
    cursor: w-resize;
  }

  #aside {
    max-width: 300px;
  }

  .tab_home .el-tabs {
    width: 94%;
  }

  .tab_home .el-icon-arrow-left {
    display: none;
  }

  .tab_home .el-icon-arrow-right {
    display: none;
  }

  #emper-tab > .el-tabs__content {
    height: calc(100% - 32px);
  }

  .tab_home .el-tabs .el-tabs__content {
    width: 100%;
  }

  .tab_home .el-tabs {
    width: 100%;
  }

  .tab_home .el-tabs__content {
    padding: 0 0 0 0 !important
  }

  .tab_home .el-tabs__item,
  .el-tabs__item:before,
  .el-tabs__item:after {
    background-color: transparent;
  }

  #iframeOut::-webkit-scrollbar,
  iframe::-webkit-scrollbar {
    width: 0;
  }

  iframe .-o-scrollbar {
    -moz-appearance: none !important;
    width: 0 !important;
  }

  iframe {
    -ms-scroll-chaining: chained;
    -ms-overflow-style: none;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    -ms-overflow-style: none;
    overflow: auto;
  }

  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    background-color: #fff;
    border-right-color: rgb(209, 219, 229);
    border-left-color: rgb(209, 219, 229);
  }

  .el-tabs {
    height: 100% !important;
  }

  .homePage {
    .el-badge__content {
      background-color: #e6a23c;
    }

    .el-tabs__header {
      margin: 0 !important;
    }

    .table-box-person {
      height: 100%;

      th {
        background-color: #e4e4e4;
        color: #606266;
        padding: 0 !important;
        height: 30px;
        line-height: 30px;
      }

      td {
        height: 40px;
        line-height: 40px;
        padding: 8px !important;
        font-size: 14px;
        border-bottom: 0 !important;
      }
    }
  }

</style>
