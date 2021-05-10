const Router = require('express')
const list = require('./list')
const create = require('./create')
const update = require('./update')
const userRouter = Router()

userRouter.get('/', (req, res) => {
  list(req, res)
})

userRouter.post('/', (req, res) => {
  create(res, req.body)
})

userRouter.put('/:id', (req, res) => {
  update(res, req.body, req.params.id)
})

module.exports = { userRouter }
  