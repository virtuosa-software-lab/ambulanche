module.exports = (Sequelize, sequelize) => {
  return sequelize.define('cardapio', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
