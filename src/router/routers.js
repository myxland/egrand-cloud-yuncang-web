import Person from '@/views/module/me/person'

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('@/views/home/home'),
    meta: {
      title: '首页',
      root: true
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/firstPage/firstPage'),
        meta: {
          title: '工作首页',
          root: true
        }
      },
      {
        path: '/me',
        component: () => import('@/views/module/me'),
        meta: {
          title: '我',
          root: true
        },
        children: [
          {
            path: '',
            meta: { title: '我', root: true },
            component: Person
          },
          {
            path: '/me/file/:id',
            component: Person
          },
          {
            path: 'message',
            meta: { title: '我的提醒' },
            component: () => import('@/views/module/me/message')
          }
        ]
      },
      {
        path: '/group',
        component: () => import('@/views/module/group'),
        meta: {
          title: '组织',
          root: true
        }
      },
      {
        path: '/cloud',
        component: () => import('@/views/module/cloud'),
        meta: {
          title: '云仓',
          root: true
        },
        children: [
          {
            path: '',
            component: () => import('@/views/module/cloud/org'),
            meta: {
              title: '云仓',
              root: true
            }
          },
          {
            path: 'advSearch',
            component: () => import('@/views/module/cloud/search'),
            meta: { title: '云仓' }
          }
        ]
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404'),
        meta: {
          title: '404',
          root: true
        }
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/views/error-page/403'),
        meta: {
          title: '403',
          root: true
        }
      },
      {
        path: '/500',
        component: () => import('@/views/error-page/500'),
        meta: {
          title: '500',
          root: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
