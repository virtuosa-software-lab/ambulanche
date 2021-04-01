function applyAssociations(sequelize) {
  const { user, incoming, expense, category } = sequelize.models;

  user.hasMany(incoming)
  user.hasMany(expense)

  incoming.belongsTo(user)
  incoming.belongsTo(category)

  expense.belongsTo(user)
  expense.belongsTo(category)

  category.hasMany(incoming)
  category.hasMany(expense)
}

module.exports = { applyAssociations }
