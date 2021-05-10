const Router = require('express')
const list = require('./list')
const findById = require('./findById')
const create = require('./create')
const update = require('./update')
const restauranteRouter = Router()

restauranteRouter.get('/', (req, res) => {
  list(req, res)
})

restauranteRouter.get('/:id', (req, res) => {
  findById(res, req.params.id)
})

restauranteRouter.post('/', (req, res) => {
  create(res, req.body)
})

restauranteRouter.put('/:id', (req, res) => {
  update(res, req.body, req.params.id)
})

module.exports = { restauranteRouter }
  