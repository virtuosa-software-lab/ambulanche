const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.cardapio_produto.findAll({ where: { cardapioId: id }})
    .then( response => {

      let produtos = []
      response.forEach(c => {
        db.produto.findOne({ where: { id: c.produtoId } })
          .then(r => {
            produtos.push(r)
          })
          .catch(error => {
            res.status( 400 ).send( error )
          })
      })

      res.status( 200 ).json( produtos )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
