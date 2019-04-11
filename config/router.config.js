export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['loginUser'],
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './home/index', title: '首页' },
      {
        title: 'exception',
        path: '/exception',
        routes: [
          // Exception
          {
            path: '/exception/403',
            title: 'not-permission',
            component: './exception/403',
          },
          {
            path: '/exception/404',
            title: 'not-find',
            component: './exception/404',
          },
          {
            path: '/exception/500',
            title: 'server-error',
            component: './exception/500',
          },
        ],
      },
      { path: '/404', component: '404' },
    ],
  },
  /* // TabBar
  {
    path: '/tabbar',
    component: '../layouts/TabBarLayout',
    routes: [
      { path: '/tabbar', redirect: '/tabbar/index' },
      {
        path: '/tabbar/index',
        title: 'index',
        component: './tabbar/index',
        iconName: 'alipay',
      },
      {
        path: '/tabbar/koubei',
        title: 'Koubei',
        component: './tabbar/Koubei',
        iconName: 'koubei',
      },
      {
        path: '/tabbar/friend',
        title: 'Friend',
        component: './tabbar/Friend',
        iconName: 'friend',
      },
      {
        path: '/tabbar/my',
        title: 'My',
        component: './tabbar/Koubei',
        iconName: 'my',
      },
    ],
  }, */
];
