const {userRouter} = require('./usuario/index')

const routes = (app) => {
  app.use('/api/usuarios', userRouter)
}

module.exports = routes
