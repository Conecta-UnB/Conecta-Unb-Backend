module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comentarios', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      conteudo: {
        type: Sequelize.STRING,
      },
      id_forum: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'forums',
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('comentarios');
  },
};
