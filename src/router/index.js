import Vue from 'vue'
import Router from 'vue-router'
import myPluginRouter from '@/components/example/index'
import Custom from '@/components/custom'

Vue.use(Router)
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/component'
    },
    {
      path: '/component',
      component: Custom,
      children: [
        ...myPluginRouter
      ]
    },
  ]
})
export default router
