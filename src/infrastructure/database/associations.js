function applyAssociations(sequelize) {
  const { usuario, restaurante, produto, cardapio } = sequelize.models;

  usuario.hasMany(restaurante)

  restaurante.hasMany(cardapio)
  restaurante.belongsTo(usuario)

  produto.hasMany(cardapio)

  // cardapio.belongsTo(usuario)
  // cardapio.belongsTo(category)

  // category.hasMany(restaurante)
  // category.hasMany(expense)
}

module.exports = { applyAssociations }
