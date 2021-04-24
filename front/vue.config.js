module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: process.env.BASE_URL,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'carteirinha',
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'pt_BR',
      fallbackLocale: 'en_US',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
