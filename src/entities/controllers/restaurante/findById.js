const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.restaurante.findOne({ where: { id }})
    .then( response => {
      res.status( 200 ).json( response )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
