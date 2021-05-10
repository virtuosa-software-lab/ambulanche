const db = require('../../../infrastructure/database/index')

module.exports = (res, id) => {
  db.cardapio_produto.findAll({ where: { cardapioId: id }})
    .then( async response => {

      let produtos = []
      for (let i=0; i<response.length; ++i) {
        let c = response[i]
        await db.produto.findOne({ where: { id: c.produtoId } })
          .then(r => {
            produtos.push(r)
          })
          .catch(error => {
            res.status( 400 ).send( error )
          })
      }
      
      res.status( 200 ).json( produtos )
    } )
    .catch( error => {
      res.status( 400 ).send( error )
    } )
}
