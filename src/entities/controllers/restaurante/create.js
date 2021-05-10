const db = require('../../../infrastructure/database/index')

module.exports = (res, restaurante) => {
  db.restaurante.create(restaurante)
  .then( response => {
    res.status( 201 ).json({ id: response.id })
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
