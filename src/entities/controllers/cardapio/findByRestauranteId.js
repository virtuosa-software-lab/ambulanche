const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.cardapio.findOne({ where: { restauranteId: id }})
    .then( response => {
      res.status( 200 ).json( response )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
