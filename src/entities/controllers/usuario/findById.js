const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.usuario.findOne({ where: { id }})
    .then( userResponse => {
      res.status( 200 ).json( userResponse )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
