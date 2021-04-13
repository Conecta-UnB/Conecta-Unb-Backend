const bcrypt = require('bcrypt');

const saltRounds = Number(process.env.SALT_ROUNDS);
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        matricula: '160234845',
        nome: 'nome',
        telefone: '61999999999',
        email: 'nome@email.com',
        senha: bcrypt.hashSync('senhasenha', salt),
        role: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        matricula: '165334345',
        nome: 'senhorTeste',
        telefone: '61999999999',
        email: 'senhorTeste@test.com',
        senha: bcrypt.hashSync('amoASenhoraTeste', salt),
        role: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
