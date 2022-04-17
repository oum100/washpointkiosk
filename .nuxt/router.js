import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _705740e3 = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _328ceca4 = () => interopDefault(import('../pages/Dashboard/index.vue' /* webpackChunkName: "pages/Dashboard/index" */))
const _f02a4bc8 = () => interopDefault(import('../pages/Device/index.vue' /* webpackChunkName: "pages/Device/index" */))
const _406ea434 = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _0d0a5b39 = () => interopDefault(import('../pages/Kiosk/index.vue' /* webpackChunkName: "pages/Kiosk/index" */))
const _c077b66a = () => interopDefault(import('../pages/login1.vue' /* webpackChunkName: "pages/login1" */))
const _2414f332 = () => interopDefault(import('../pages/photos/index.vue' /* webpackChunkName: "pages/photos/index" */))
const _4bd2eeb9 = () => interopDefault(import('../pages/Profile/index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _5693937a = () => interopDefault(import('../pages/Report/index.vue' /* webpackChunkName: "pages/Report/index" */))
const _b763bc46 = () => interopDefault(import('../pages/Setting.vue' /* webpackChunkName: "pages/Setting" */))
const _eb7202d2 = () => interopDefault(import('../pages/ShowMachine.vue' /* webpackChunkName: "pages/ShowMachine" */))
const _27be9d35 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _7ef2914c = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _900951a4 = () => interopDefault(import('../pages/Transaction/index.vue' /* webpackChunkName: "pages/Transaction/index" */))
const _5cd0d13d = () => interopDefault(import('../pages/xindex.vue' /* webpackChunkName: "pages/xindex" */))
const _cd509130 = () => interopDefault(import('../pages/auth/login/index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _84d5194c = () => interopDefault(import('../pages/auth/register/index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _3c63ac6e = () => interopDefault(import('../pages/Dashboard/revenue.vue' /* webpackChunkName: "pages/Dashboard/revenue" */))
const _03f0b690 = () => interopDefault(import('../pages/Dashboard/status.vue' /* webpackChunkName: "pages/Dashboard/status" */))
const _2e2a7682 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Cart",
    component: _705740e3,
    name: "Cart"
  }, {
    path: "/Dashboard",
    component: _328ceca4,
    name: "Dashboard"
  }, {
    path: "/Device",
    component: _f02a4bc8,
    name: "Device"
  }, {
    path: "/index%20copy",
    component: _406ea434,
    name: "index copy"
  }, {
    path: "/Kiosk",
    component: _0d0a5b39,
    name: "Kiosk"
  }, {
    path: "/login1",
    component: _c077b66a,
    name: "login1"
  }, {
    path: "/photos",
    component: _2414f332,
    name: "photos"
  }, {
    path: "/Profile",
    component: _4bd2eeb9,
    name: "Profile"
  }, {
    path: "/Report",
    component: _5693937a,
    name: "Report"
  }, {
    path: "/Setting",
    component: _b763bc46,
    name: "Setting"
  }, {
    path: "/ShowMachine",
    component: _eb7202d2,
    name: "ShowMachine"
  }, {
    path: "/test",
    component: _27be9d35,
    name: "test"
  }, {
    path: "/todos",
    component: _7ef2914c,
    name: "todos"
  }, {
    path: "/Transaction",
    component: _900951a4,
    name: "Transaction"
  }, {
    path: "/xindex",
    component: _5cd0d13d,
    name: "xindex"
  }, {
    path: "/auth/login",
    component: _cd509130,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _84d5194c,
    name: "auth-register"
  }, {
    path: "/Dashboard/revenue",
    component: _3c63ac6e,
    name: "Dashboard-revenue"
  }, {
    path: "/Dashboard/status",
    component: _03f0b690,
    name: "Dashboard-status"
  }, {
    path: "/",
    component: _2e2a7682,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
