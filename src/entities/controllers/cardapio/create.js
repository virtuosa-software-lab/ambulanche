const db = require('../../../infrastructure/database/index')

module.exports = (res, cardapio) => {
  db.cardapio.create(cardapio)
  .then( response => {
    res.status( 201 ).json({ id: response.id })
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
