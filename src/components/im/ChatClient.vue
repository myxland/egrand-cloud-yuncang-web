<template>
  <div :style="{left:`${position.x}px`,top:`${position.y}px`}" class="chat-client" v-chat-drag>
    <div class="sidebar">
      <UserInfo :search.sync="search" :user="user"/>
      <UserList :search="search" :session="session" :session-id.sync="sessionId" :user-list="userList"/>
    </div>
    <div class="main">
      <Toolbar :session="session" :user="user"/>
      <Message :session="session" :user="user" :user-list="userList" ref="message"/>
      <EditArea :session="session"/>
    </div>
  </div>
</template>

<script>
  import store from './store'
  import UserInfo from './UserInfo'
  import UserList from './UserList'
  import EditArea from './EditArea'
  import Message from './Message'
  import Toolbar from '@/components/im/Toolbar'
  import SockJS from 'sockjs-client'
  import Stomp from 'stompjs'

  export default {
    components: {
      Toolbar,
      UserInfo,
      UserList,
      EditArea,
      Message
    },
    bus: {
      send(msg) {
        this.$refs.message.scrollBottom()
        this.sendMsg(msg)
      },
      loginSuccess() {
        this.connect()
      }
    },
    data() {
      const serverData = store.fetch()
      const users = serverData.userList.filter(item => item.id !== serverData.user.id)
      return {
        // 登录用户
        user: serverData.user,
        // 用户列表
        userList: users,
        // 会话列表
        sessionList: serverData.sessionList,
        // 搜索key
        search: '',
        // 选中的会话Index
        sessionId: users[0].id,
        position: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      connect() {
        const host = 'http://10.1.10.46:8090'
        // 地址+端点路径，构建websocket链接地址,注意，对应config配置里的addEndpoint
        const socket = new SockJS(`${host}/myUrl?token=${localStorage.getItem('ms_username')}`)
        this.stompClient = Stomp.over(socket)
        this.stompClient.connect({}, this.onConnected)
      },
      onConnected(frame) {
        console.log('Connected:' + frame)
        // 监听的路径以及回调
        this.stompClient.subscribe('/user/queue/sendUser', this.showResponse)
      },
      showResponse(res) {
        if (!this.audio) {
          this.audio = document.createElement('audio')
          this.audio.setAttribute('autoplay', 'autoplay')
          this.audio.setAttribute('src', require('@/assets/voice/default.mp3'))
          this.$el.appendChild(this.audio)
        } else {
          this.audio.play()
        }
        this.session.messages.push({
          text: res.body,
          date: new Date()
        })
        this.$nextTick(() => {
          this.$refs.message.scrollBottom()
        })
      },
      disconnect() {
        if (this.stompClient) {
          this.stompClient.disconnect()
        }
      },
      sendMsg(msg) {
        this.stompClient.send('/sendMyUser', {}, JSON.stringify({
          message: msg,
          name: this.session.userId
        }))
      }
    },
    beforeDestroy() {
      this.disconnect()
    },
    mounted() {
      this.position.x = (window.document.body.clientWidth - 800) / 2
      this.position.y = (window.document.body.clientHeight - 500) / 2
      this.connect()
    },
    computed: {
      session() {
        for (let i = 0; i < this.sessionList.length; i++) {
          if (this.sessionId === this.sessionList[i].userId) {
            return this.sessionList[i]
          }
        }
        return {}
      }
    },
    watch: {
      // 每当sessionList改变时，保存到localStorage中
      sessionList: {
        deep: true,
        handler() {
          store.save({
            user: this.user,
            userList: this.userList,
            sessionList: this.sessionList
          })
        }
      },
      sessionId() {
        this.$refs.message.scrollBottom()
      }
    }
  }

</script>

<style lang="scss">
  .chat-client {
    overflow: hidden;
    height: 500px;
    width: 800px;
    z-index: 19891016;
    position: fixed;
    _position: absolute;
    pointer-events: auto;
    border-radius: 3px;

    .sidebar, .main {
      height: 100%;
    }

    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;
    }

    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>
