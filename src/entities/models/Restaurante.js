module.exports = (Sequelize, sequelize) => {
  return sequelize.define('restaurante', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
