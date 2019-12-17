<template>
  <ElContainer direction="vertical">
    <ElHeader style="font-size: 14px;height:40px;line-height: 40px;">
      <i class="fa fa-ellipsis-v" style="margin-right:10px;color:#409eff"/>资料检索
    </ElHeader>
    <ElMain style="border-bottom: 1px solid #e7e8ea;height:160px;padding:0;">
      <ElContainer direction="vertical">
        <ElHeader style="font-size: 12px;height:125px;line-height: 40px;border-bottom: 1px solid #e7e8ea;text-align:right;">
          <ElRow>
            <ElCol :span="20">
              <ElRow>
                <ElCol :span="24">
                  <ElInput
                    style="width:450px;margin-right:10px;"
                    size="small"
                    placeholder="请输入检索关键字">
                    <i slot="prefix" class="el-input__icon el-icon-search"/>
                  </ElInput>
                  <ElRadio v-model="radio" label="1">标题</ElRadio>
                  <ElRadio v-model="radio" label="2">全文</ElRadio>
                  <ElButton type="primary" size="mini">检索</ElButton>
                </ElCol>
                <ElCol :span="24">
                  <ElRow>
                    <ElCol :span="6" style="text-align:right;">
                      标签：
                    </ElCol>
                    <ElCol :span="16">
                      <ElCheckboxGroup v-model="checkList">
                        <ElCheckbox label="全部"/>
                        <ElCheckbox label="党建"/>
                        <ElCheckbox label="业务"/>
                        <ElCheckbox label="计划"/>
                        <ElCheckbox label="总结"/>
                        <ElCheckbox label="汇报"/>
                        <ElCheckbox label="检查"/>
                      </ElCheckboxGroup>
                    </ElCol>
                    <ElCol :span="2">
                    </ElCol>
                  </ElRow>
                </ElCol>
                <ElCol :span="24">
                  <ElRow>
                    <ElCol :span="6" style="text-align:right;">
                      提交时间：
                    </ElCol>
                    <ElCol :span="18">
                      <ElCheckboxGroup v-model="submit_checkList">
                        <ElCheckbox label="全部"/>
                        <ElCheckbox label="一周内"/>
                        <ElCheckbox label="一个月内"/>
                        <ElCheckbox label="三个月内"/>
                        <ElCheckbox label="半年"/>
                        <ElCheckbox label="全年"/>
                        <ElCheckbox label="指定时间"/>
                      </ElCheckboxGroup>
                    </ElCol>
                  </ElRow>
                </ElCol>
              </ElRow>
            </ElCol>
            <ElCol :span="4">
            </ElCol>
          </ElRow>
        </ElHeader>
        <ElMain :style="{height:contentHeight}">
          <ElRow>
            <ElCol :span="12">
              <i class="fa fa-sort-desc" style="font-size:25px;margin-right:5px;"/>
              <span style="font-size:16px;font-weight:bold;">检索结果：</span>
              本次检索结果共10个文件
            </ElCol>
            <ElCol :span="12" style="text-align:right;">
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
          <ElMain>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
            <ElRow style="border-bottom:1px solid #ccc;padding:10px;">
              <ElCol :span="1">
                <i class="fa fa-file-word-o" style="color:#409eff"/>
              </ElCol>
              <ElCol :span="17">
                <span style="font-size:16px;">XXX第一季度<span style="color:#409eff">廉政</span>自查表</span>
                <br/>
                <span style="color:#409eff">廉政</span>
                风险点内容：财务管理。
                <span style="color:#409eff">廉政</span>
                风险点表现形式：项目资金分配的公正性。已建立防范管理制度情况：党组会议、局长办公会规定
                ，执行财务管理制度，严格执行新农合资金各项规定，认真执行制度，严格卫生行政许可和卫生行政处罚审批...<br/>
                提交人：王建国 2019-11-06 09:54 浏览次数：135次
              </ElCol>
              <ElCol :span="6" style="text-align:right;">
                <i class="fa fa-download" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-minus-square" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-share" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-trash-o" style="color:#ccc;margin-right:15px;"/>
                <i class="fa fa-star-o" style="color:#ccc;margin-right:15px;"/>
              </ElCol>
            </ElRow>
          </ElMain>
        </ElMain>
      </ElContainer>
    </ElMain>
  </ElContainer>
</template>

<script>
  export default {
    name: 'CloudSearch',
    data() {
      return {
        radio: '1',
        contentHeight: '100px',
        checkList: ['检查'],
        submit_checkList: ['全部'],
        options: [{
          value: 'all',
          label: '全部'
        }],
        value: ''
      }
    },
    created() {
      let that = this
      setTimeout(function() {
        that.contentHeight = document.documentElement.clientHeight - 220 + 'px'
      }, 100)
    }
  }
</script>

<style scoped>

</style>