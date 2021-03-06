import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          noCache: true
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import('@/views/tools'),
        meta: {
          title: '工具'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: {
          title: '关于',
          noCache: true
        }
      }
    ]
  }
]

export default routes
