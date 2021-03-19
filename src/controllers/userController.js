const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {
  async create(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const role = 0;
    const body = request.body;
    const {
      nome, email, senha, telefone, matricula,
    } = body;
    console.log(body);

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(senha, salt);

    try {
      const user = await User.create({
        nome,
        matricula,
        email,
        senha: hash,
        telefone,
        role,
      });
      if (!user) {
        return response.status(500).json({
          message: 'Erro ao criar usuário!',
        });
      }
      return response.status(200).json({
        data: {
          user: {
            nome: user.nome,
            matricula: user.matricula,
            email: user.email,
            telefone: user.telefone,
            role: user.role,
          },
        },
        message: 'Usuário criado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: error,
      });
    }
  },
};
