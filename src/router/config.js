import BasicLayout from '@/layouts/BasicLayout'

const routes = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/homepage',
    children: [
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/pages/Setting'),
      },
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import('@/pages/Homepage'),
      },
    ],
  },
  //   {
  //     path: '/403',
  //     name: '403',
  //     component: () => import('../pages/exception/403')
  //   },
  //   {
  //     path: '/404',
  //     name: '404',
  //     component: () => import('../pages/exception/404')
  //   },
  //   {
  //     path: '/500',
  //     name: '500',
  //     component: () => import('../pages/exception/500')
  //   },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

export default routes
