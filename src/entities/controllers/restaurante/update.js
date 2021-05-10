const db = require('../../../infrastructure/database/index')

module.exports = (res, restaurante, id) => {
  db.restaurante.update( restaurante, { where: { id: id }} )
  .then( () => {
    res.status( 204 ).send()
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
