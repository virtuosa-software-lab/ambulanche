const Router = require('express')
const list = require('./list')
const create = require('./create')
const remove = require('./removeById')
const produtoRouter = Router()

produtoRouter.get('/', (req, res) => {
  list(req, res)
})

produtoRouter.post('/', (req, res) => {
  create(res, req.body)
})

produtoRouter.delete('/:id', (req, res) => {
  remove(res, req.params.id)
})

module.exports = { produtoRouter }
