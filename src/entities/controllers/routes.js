const { usuarioRouter } = require('./usuario/index')
const { restauranteRouter } = require('./restaurante/index')
const { produtoRouter } = require('./produto/index')
const { cardapioRouter } = require('./cardapio/index')

const routes = (app) => {
  app.use('/api/usuarios', usuarioRouter)
  app.use('/api/restaurantes', restauranteRouter)
  app.use('/api/produtos', produtoRouter)
  app.use('/api/cardapios', cardapioRouter)
}

module.exports = routes
