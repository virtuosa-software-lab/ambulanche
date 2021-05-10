function applyAssociations(sequelize) {
  const { usuario, restaurante, produto, cardapio } = sequelize.models;

  usuario.hasMany(restaurante)

  restaurante.hasMany(cardapio)
  restaurante.belongsTo(usuario)

  produto.belongsToMany(cardapio, { through: 'cardapio_produto' })
  cardapio.belongsToMany(produto, { through: 'cardapio_produto' })
}

module.exports = { applyAssociations }
