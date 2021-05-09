module.exports = (Sequelize, sequelize) => {
  return sequelize.define('produto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
  })
}
