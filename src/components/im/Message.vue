<template>
  <div class="chat-message-box" ref="content">
    <ul>
      <li :key="index" v-for="(item,index) in session.messages">
        <p class="time"><span>{{item.date | dateTime}}</span></p>
        <div :class="{ self: item.self }" class="main">
          <img :src="getAvatar(item)" alt="" class="avatar" height="30" width="30"/>
          <div class="text">{{item.text}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import OverlayScrollbars from 'overlayscrollbars'
  import 'overlayscrollbars/css/OverlayScrollbars.css'

  export default {
    props: ['session', 'user', 'userList'],
    bus: {
      showChatWindow() {
        setTimeout(this.scrollBottom)
      }
    },
    methods: {
      scrollBottom() {
        this.$nextTick(() => {
          this.messageBox.scroll({
            x: '0%',
            y: '100%'
          })
        })
      },
      getAvatar(item) {
        if (this.session.userId === 'admin') {
          if (item.self) {
            return require('../../assets/img/webpack.jpg')
          } else {
            return require('../../assets/img/vue.png')
          }
        }
        if (this.session.userId === 'admin1') {
          if (item.self) {
            return require('../../assets/img/vue.png')
          } else {
            return require('../../assets/img/webpack.jpg')
          }
        }
      }
    },
    mounted() {
      this.messageBox = OverlayScrollbars(this.$refs.content, {
        scrollbars: {
          autoHide: 's',
          autoHideDelay: 500
        },
        callbacks: {
          onInitialized: () => {
            this.scrollBottom()
          }
        }
      })
    }
  }
</script>

<style lang="scss">
  .chat-message-box {
    padding: 10px 15px;
    overflow-y: scroll;
    height: calc(100% - 160px - 50px);

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 15px;
    }

    .time {
      margin: 7px 0;
      text-align: center;

      > span {
        display: inline-block;
        padding: 0 18px;
        font-size: 12px;
        color: #fff;
        border-radius: 2px;
        background-color: #dcdcdc;
      }
    }

    .avatar {
      float: left;
      margin: 0 10px 0 0;
      border-radius: 3px;
    }

    .text {
      display: inline-block;
      position: relative;
      padding: 0 10px;
      max-width: calc(100% - 40px);
      min-height: 30px;
      line-height: 2.5;
      font-size: 12px;
      text-align: left;
      word-break: break-all;
      background-color: #fafafa;
      border-radius: 4px;

      &:before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: #fafafa;
      }
    }

    .self {
      text-align: right;

      .avatar {
        float: right;
        margin: 0 0 0 10px;
      }

      .text {
        background-color: #b2e281;

        &:before {
          right: inherit;
          left: 100%;
          border-right-color: transparent;
          border-left-color: #b2e281;
        }
      }
    }
  }
</style>
