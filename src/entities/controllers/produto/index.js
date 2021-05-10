const Router = require('express')
const list = require('./list')
const create = require('./create')
const remove = require('./removeById')
const findAllByCardapioId = require('./findAllByCardapioId')
const produtoRouter = Router()

produtoRouter.get('/', (req, res) => {
  list(req, res)
})

produtoRouter.post('/:idCardapio', (req, res) => {
  create(res, req.body, req.params.idCardapio)
})

produtoRouter.delete('/:id', (req, res) => {
  remove(res, req.params.id)
})

produtoRouter.get('/:id/cardapio', (req, res) => {
  findAllByCardapioId(res, req.params.id)
})


module.exports = { produtoRouter }
