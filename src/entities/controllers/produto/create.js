const db = require('../../../infrastructure/database/index')

module.exports = (res, produto, idCardapio) => {
  db.produto.create(produto)
  .then( response => {

    db.cardapio_produto.create({ cardapioId: idCardapio, produtoId: response.id })
      .then(r => {
        res.status( 201 ).send()
      }).catch( error => {
        res.status( 500 ).send( error )
      } )
  } )
  .catch( error => {
    res.status( 500 ).send( error )
  } )
}
