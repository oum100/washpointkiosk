export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'webkiosk',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ant-design-vue'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/content'
  ],

  // serverMiddleware: [
  //   '~/backend/index'
  // ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:5001',
    credentials: true
  },
  auth: {
    strategies: {
      local: {
        token: {
          // property: "token", // property name that the Back-end sends for you as a access token for saving on localStorage and cookie of user browser
          global: true,
          required: true,
          maxAge: 1800,
        },
        user: {
          // property: "user",
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v1.0.0/user/login', method: 'post', propertyName: 'token' },
          user: { url: '/api/v1.0.0/user/me', method: 'get', propertyName: 'user' },
          // login: { url: '/api/v1.0.0/user/login', method: 'post', propertyName: 'data.token' },
          // user: { url: '/api/v1.0.0.1/user/me1', method: 'get', propertyName: 'data' },
          logout: false
        },
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/auth/login'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
