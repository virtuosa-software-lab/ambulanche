require('reflect-metadata')
const express = require('express')
const morgan = require('morgan')
const flash = require('express-flash')
const cors = require('cors')

const routes = require('./entities/controllers/routes')


const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(flash())
app.use(cors())

routes(app)

module.exports = app
