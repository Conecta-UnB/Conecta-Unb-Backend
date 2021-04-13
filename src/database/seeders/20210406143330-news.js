module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('news', [
      {
        id: '4aa94e41-822c-4db7-9e42-799187f3be76',
        titulo: 'FGA agora tem asfalto',
        imagem: 'Finge que isso é uma imagem do asfalto da FGA',
        conteudo: 'Depois de mais de 10 anos a faculdade do Gama ganha asfalto, chega de chão batido',
        id_user: '160234845',
        autor: 'Quem escreveu',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '41fce677-a031-40d6-91d0-9f68bf72e18f',
        titulo: 'Novo prédio da FGA',
        imagem: 'Finge que isso é uma imagem do novo prédio',
        conteudo: 'A FGA ganhou um novo prédio, o prédio possui laboratórios',
        id_user: '160234845',
        autor: 'Quem escreveu',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('news', null, {});
  },
};
