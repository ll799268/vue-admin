const Login = () => import('@views/Login')
const Layout = () => import('@views/Layout')

import serviceRoutesFormat from '@libs/serviceRoutesFormat'

const routes = [{
  name: 'login',
  path: '/login',
  component: Login,
  title: '登录',
  meta: {
    docTitle: '登录'
  }
},
{
  path: '/layout',
  component: Layout,
  children: serviceRoutesFormat()
},
{
  name: '404',
  path: '*',
  redirect: '/layout',
  title: '首页',
  meta: {
    docTitle: '首页'
  }
}]

export default routes