const db = require('../../../infrastructure/database/index')

module.exports = (req, res) => {
  db.usuario.findAll()
    .then( userResponse => {
      res.status( 200 ).json( userResponse )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
