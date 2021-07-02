const Login = () => import('@views/Login')
const Layout = () => import('@views/Layout')

const Home = () => import('@views/modules/Home')
const MembersList = () => import('@views/modules/MembersManage/MembersList')
const MembersStatistics = () => import('@views/modules//MembersManage/MembersStatistics')
const UserList = () => import('@views/modules/UserManage/UserList')
const UserStatistics = () => import('@views/modules/UserManage/UserStatistics')


const routes = [{
  name: 'login',
  path: '/login',
  component: Login,
  title: '登录'
},
{
  path: '/layout',
  component: Layout,
  children: [{
    name: 'home',
    path: '',
    component: Home,
    title: '首页'
  },
  {
    name: 'membersList',
    path: 'membersList',
    component: MembersList,
    title: '会员列表'
  },
  {
    name: 'membersStatistics',
    path: 'membersStatistics',
    component: MembersStatistics,
    title: '会员统计'
  },
  {
    name: 'userList',
    path: 'userList',
    component: UserList,
    title: '用户列表'
  },
  {
    name: 'userStatistics',
    path: 'userStatistics',
    component: UserStatistics,
    title: '用户统计'
  }],
 
},
{
  name: '404',
  path: '*',
  redirect: '/layout',
  title: '首页'
}]

export default routes