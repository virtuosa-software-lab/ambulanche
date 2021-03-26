module.exports = (Sequelize, sequelize) => {
  return sequelize.define('incoming', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE
    }
  })
}
