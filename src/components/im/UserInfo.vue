<template>
  <div class="chat-my-info">
    <header>
      <img :alt="user.name" :src="require('../../assets/img/avatar.png')" class="avatar" height="40" width="40">
      <p class="name">{{user.name}}</p>
    </header>
    <footer>
      <label>
        <input class="search" placeholder="搜索..." type="text" v-model="condition">
      </label>
    </footer>
  </div>
</template>

<script>
  export default {
    props: ['user', 'search'],
    data() {
      return {
        condition: ''
      }
    },
    watch: {
      condition() {
        this.$emit('update:search', this.condition)
      }
    }
  }
</script>

<style lang="scss">
  .chat-my-info {
    padding: 12px;
    border-bottom: solid 1px #24272C;

    footer {
      margin-top: 10px;
    }

    .avatar, .name {
      vertical-align: middle;
    }
    .avatar {
      border-radius: 2px;
    }
    .name {
      display: inline-block;
      margin: 0 0 0 15px;
      font-size: 16px;
    }
    .search {
      padding: 0 10px;
      width: 100%;
      font-size: 12px;
      color: #fff;
      height: 30px;
      line-height: 30px;
      border: solid 1px #3a3a3a;
      border-radius: 4px;
      outline: none;
      background-color: #26292E;
    }
  }
</style>
