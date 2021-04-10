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
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('news', null, {});
  },
};
