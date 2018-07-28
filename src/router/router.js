import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    path: '/home',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    path: '/test',
    component: r => require.ensure([], () => r(require('../page/test')), 'test')
  }, {
    path: '/mine',
    component: r => require.ensure([], () => r(require('../page/mine')), 'mine')
  }, {
    path: '/personal',
    component: r => require.ensure([], () => r(require('../page/personal')), 'personal')
  }, {
    path: '/login',
    component: r => require.ensure([], () => r(require('../page/login')), 'login')
  }, {
    path: '/register',
    component: r => require.ensure([], () => r(require('../page/register')), 'register')
  }
  ]
}]
