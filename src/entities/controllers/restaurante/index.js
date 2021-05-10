const Router = require('express')
const list = require('./list')
const create = require('./create')
const update = require('./update')
const restauranteRouter = Router()

restauranteRouter.get('/', (req, res) => {
  list(req, res)
})

restauranteRouter.post('/', (req, res) => {
  create(res, req.body)
})

restauranteRouter.put('/:id', (req, res) => {
  update(res, req.body, req.params.id)
})

module.exports = { restauranteRouter }
  