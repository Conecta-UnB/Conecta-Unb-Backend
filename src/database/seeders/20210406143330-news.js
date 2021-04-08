module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('news', [
      {
        id: '1',
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
