const Router = require('express')
const list = require('./list')
const create = require('./create')
// const update = require('./update')
const cardapioRouter = Router()

cardapioRouter.get('/', (req, res) => {
  list(req, res)
})


cardapioRouter.get('/:id', (req, res) => {
  // list(req, res)
})

cardapioRouter.post('/', (req, res) => {
  create(res, req.body)
})

cardapioRouter.put('/:id', (req, res) => {
  // update(res, req.body, req.params.id)
})

module.exports = { cardapioRouter }
  