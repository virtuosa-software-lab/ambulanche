const { restauranteRouter } = require('./restaurante/index')

const routes = (app) => {
  app.use('/api/usuarios', restauranteRouter)
  app.use('/api/restaurantes', restauranteRouter)
}

module.exports = routes
