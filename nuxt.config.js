const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Environment variables
  */
  env: {
    mode: process.env.NODE_ENV || 'production',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'IVR.DESIGN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name:'msapplication-TileColor', content:'#ffffff' },
      { name:'msapplication-TileImage', content:'/ms-icon-144x144.png' },
      { name:'theme-color', content:'#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Raleway'},
      { rel:'apple-touch-icon', sizes:'57x57', href:'/apple-icon-57x57.png' },
      { rel:'apple-touch-icon', sizes:'60x60', href:'/apple-icon-60x60.png' },
      { rel:'apple-touch-icon', sizes:'72x72', href:'/apple-icon-72x72.png' },
      { rel:'apple-touch-icon', sizes:'76x76', href:'/apple-icon-76x76.png' },
      { rel:'apple-touch-icon', sizes:'114x114', href:'/apple-icon-114x114.png' },
      { rel:'apple-touch-icon', sizes:'120x120', href:'/apple-icon-120x120.png' },
      { rel:'apple-touch-icon', sizes:'144x144', href:'/apple-icon-144x144.png' },
      { rel:'apple-touch-icon', sizes:'152x152', href:'/apple-icon-152x152.png' },
      { rel:'apple-touch-icon', sizes:'180x180', href:'/apple-icon-180x180.png' },
      { rel:'icon', type:'image/png', sizes:'192x192',  href:'/android-icon-192x192.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
      { rel:'icon', type:'image/png', sizes:'96x96', href:'/favicon-96x96.png' },
      { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
      { rel:'manifest', href:'/manifest.json'}],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/variables.scss',
    '@/assets/css/default.scss',
    '@/assets/css/index.scss',
    '@/assets/css/subpage.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // https://github.com/nuxt/nuxt.js/issues/2367
    { src: '~/middleware/connectionStatus.js', ssr: false },
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/filters' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  /*
  ** Axios
  */
  axios: {
    // proxyHeaders: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
    ** Post CSS
    */
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
      }),
    ],
  },
}
