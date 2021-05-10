const Router = require('express')
const list = require('./list')
const create = require('./create')
const userRouter = Router()

userRouter.get('/', (req, res) => {
  list(req, res)
})

userRouter.post('/', (req, res) => {
  create(req, res, req.body)
})

module.exports = { userRouter }
  