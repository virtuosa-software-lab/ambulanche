const Router = require('express')
const list = require('./list')
const create = require('./create')
const update = require('./update')
const usuarioRouter = Router()

usuarioRouter.get('/', (req, res) => {
  list(req, res)
})

usuarioRouter.post('/', (req, res) => {
  create(res, req.body)
})

usuarioRouter.put('/:id', (req, res) => {
  update(res, req.body, req.params.id)
})

module.exports = { usuarioRouter }
  