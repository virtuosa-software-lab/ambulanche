const db = require('../../../infrastructure/database/index')

module.exports = (res, usuario, id) => {
  db.usuario.update( usuario, { where: { id: id }} )
  .then( () => {
    res.status( 204 ).send()
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
