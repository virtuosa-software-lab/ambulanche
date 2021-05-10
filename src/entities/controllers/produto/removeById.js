const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.produto.destroy({ where: { id } })
  .then( () => {
    res.status( 204 ).send()
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
