const db = require('../../../infrastructure/database/index')

module.exports = (req, res) => {
  db.produto.findAll()
    .then( response => {
      res.status( 200 ).json( response )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
