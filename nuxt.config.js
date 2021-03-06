module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PraxisPoetica',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website comunidad praxispoetica' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/datei18n.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify', 'axios'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    ppcdn: 'http://res.cloudinary.com/awebfactory/image/upload/v1506392555/'
  }
}
