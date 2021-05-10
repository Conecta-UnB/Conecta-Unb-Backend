module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('forums', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      id_user: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'matricula',
        },
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
    await queryInterface.dropTable('forums');
  },
};
