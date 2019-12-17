const key = 'VUE-CHAT-v3'

// 模拟数据
if (!localStorage.getItem(key)) {
  const now = new Date()

  const data = {
    // 登录用户
    user: {
      id: 'Simple',
      name: 'Simple',
      avatar: '@/assets/img/avatar.png'
    },
    // 用户列表
    userList: [
      {
        id: 'admin',
        name: 'Simple',
        avatar: '@/assets/img/vue.png'
      },
      {
        id: 'admin1',
        name: '马云',
        avatar: '@/assets/img/webpack.jpg'
      }
    ],
    // 会话列表
    sessionList: [
      {
        userId: 'admin',
        messages: [
          {
            text: 'Hello，Vue ！',
            date: now
          },
          {
            text: '百度一下: https://www.baidu.com/',
            date: now
          }
        ]
      },
      {
        userId: 'admin1',
        messages: [
          {
            text: 'Hello，Webpack',
            date: now
          }
        ]
      }
    ]
  }

  localStorage.setItem(key, JSON.stringify(data))
}

export default {
  fetch() {
    const data = JSON.parse(localStorage.getItem(key))
    data.user.id = localStorage.getItem('ms_username')
    data.user.name = localStorage.getItem('ms_username') === 'admin' ? 'Simple' : '马云'
    return data
  },
  save(store) {
    localStorage.setItem(key, JSON.stringify(store))
  }
}
