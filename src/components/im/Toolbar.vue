<template>
  <div class="chart-toolbar">
   <span @mousemove.stop style="cursor: text">{{session.userId==='admin'?'Simple':'马云'}}</span>
    <i class="el-icon-close" style="position: absolute;right: 10px;align-self: center;cursor: pointer" @click="$bus('closeChatWindow')"/>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    props: ['session', 'user']
  }
</script>

<style lang="scss">
  .chart-toolbar {
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
  }
</style>
