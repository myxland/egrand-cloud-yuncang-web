<template>
  <div class="chat-friends" ref="content">
    <ul>
      <template v-for="(item) in localUsers">
        <li :class="{ active: session.userId === item.id }" :key="item.id" @click="select(item)">
          <img :alt="item.name"
               :src="(item.id==='admin')?require('../../assets/img/vue.png'):require('../../assets/img/webpack.jpg')"
               class="avatar" height="30" width="30">
          <p class="name">{{item.name}}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>

  import OverlayScrollbars from 'overlayscrollbars'
  import 'overlayscrollbars/css/OverlayScrollbars.css'

  export default {
    props: ['userList', 'sessionId', 'session', 'search'],
    data() {
      return {
      }
    },
    mounted() {
      this.messageBox = OverlayScrollbars(this.$refs.content, {
        className: 'os-theme-light',
        scrollbars: {
          autoHide: 's',
          autoHideDelay: 500
        }
      })
    },
    methods: {
      select(value) {
        this.$emit('update:sessionId', value.id)
      }
    },
    computed: {
      localUsers() {
        if (this.search) {
          return this.userList.filter(item => item.name.indexOf(this.search) > -1)
        }
        return this.userList
      }
    }
  }
</script>

<style lang="scss">

  .chat-friends {
    height: calc(100% - 105px);
    overflow-y: scroll;

    li {
      padding: 12px 15px;
      border-bottom: 1px solid #292C33;
      cursor: pointer;
      transition: background-color .1s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
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
    }
  }
</style>
