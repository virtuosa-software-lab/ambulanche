const Router = require('express')
const list = require('./list')
const userRouter = Router()

userRouter.get('/', (req, res) => {
  list(req, res)
})

module.exports = { userRouter }
  