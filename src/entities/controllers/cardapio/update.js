const db = require('../../../infrastructure/database/index')

module.exports = (res, cardapio, id) => {
  db.cardapio.update( cardapio, { where: { id: id }} )
  .then( () => {
    res.status( 204 ).send()
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
