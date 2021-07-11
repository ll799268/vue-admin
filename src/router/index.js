import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  ease:'ease-in-out'
})

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.docTitle
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router