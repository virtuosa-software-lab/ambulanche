const app = require('./app')
const db = require('./infrastructure/database/index')

const PORT = process.env.PORT || 9000

db.sequelize.sync()
  .then(r => {
    app.listen(PORT, () => {
      console.log(`carteirinha is listening on port ${PORT}`)
    })
  }).catch(err => {
    console.log(err)
  })
