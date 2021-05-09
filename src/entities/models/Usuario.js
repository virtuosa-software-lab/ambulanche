module.exports = (Sequelize, sequelize) => {
  return sequelize.define('usuario', {
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
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rg: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo_usuario: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rua: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: false
    },
    complemento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
