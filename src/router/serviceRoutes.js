const Home = () => import('@views/modules/Home')
const MembersList = () => import('@views/modules/MembersManage/MembersList')
const MembersStatistics = () => import('@views/modules//MembersManage/MembersStatistics')
const UserList = () => import('@views/modules/UserManage/UserList')
const UserStatistics = () => import('@views/modules/UserManage/UserStatistics')

const routerConfig = [
  {
    id: '1',
    name: 'home',
    path: '',
    component: Home,
    title: '首页',
    icon: 'el-icon-menu'
  },
  {
    id: '2',
    title: '会员管理',
    icon: 'el-icon-user-solid',
    children: [{
      id: '2-1',
      name: 'membersList',
      path: 'membersList',
      component: MembersList,
      title: '会员列表'
    },
    {
      id: '2-2',
      name: 'membersStatistics',
      path: 'membersStatistics',
      component: MembersStatistics,
      title: '会员统计'
    }]
  },
  {
    id: '3',
    title: '用户管理',
    icon: 'el-icon-s-custom',
    children: [{
      id: '3-1',
      name: 'userList',
      path: 'userList',
      component: UserList,
      title: '用户列表'
    },
    {
      id: '3-2',
      name: 'userStatistics',
      path: 'userStatistics',
      component: UserStatistics,
      title: '用户统计'
    }]
  }
]

export default routerConfig