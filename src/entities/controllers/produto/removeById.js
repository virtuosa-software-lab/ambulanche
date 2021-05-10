const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.cardapio_produto.destroy({ where: { produtoId: id } })
    .then(r => {
      db.produto.destroy({ where: { id } })
      .then( () => {
        res.status( 204 ).send()
      } )
      .catch( error => {
        res.status( 500 ).send( error )
      } )
    }).catch( error => {
      res.status( 500 ).send( error )
    } )
}
