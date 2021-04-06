module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('news', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      conteudo: {
        type: Sequelize.STRING,
      },
      id_user: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'matricula',
        },
      },
      autor: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('news');
  },
};
