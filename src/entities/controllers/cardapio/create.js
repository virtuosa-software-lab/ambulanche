const db = require('../../../infrastructure/database/index')

module.exports = (res, cardapio) => {
  const produtos = [ ...cardapio.produtos ]
  cardapio.produtos = undefined

  produtos.forEach(p => {
    db.produto.create(p)
      .then(r => {
        cardapio.produtoId = r.id
        db.cardapio.create(cardapio)
        .then( response => {
          res.status( 201 ).json({ id: response.id })
        } )
        .catch( error => {
          res.status( 500 ).send( error )
        } )
      }).catch( error => {
        res.status( 500 ).send( error )
      } )
  })
}
