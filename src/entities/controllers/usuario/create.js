const db = require('../../../infrastructure/database/index')

module.exports = (res, usuario) => {
  db.usuario.create(usuario)
  .then( userResponse => {
    res.status( 201 ).json({ id: userResponse.id })
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
