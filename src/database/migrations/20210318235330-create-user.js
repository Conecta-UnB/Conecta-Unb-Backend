module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      matricula: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      senha: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
