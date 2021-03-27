const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {
  async create(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const {
      nome, email, senha, telefone, matricula,
    } = request.body;
    const role = 0;
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
        message: 'error',
        error,
      });
    }
  },

  async login(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const {
       email, senha
    } = request.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(senha, salt);

    try {
      const user = await User.findOne({
        where:{
          email,
        }
      })
      if(user && bcrypt.compareSync(senha, user.senha)){
        return response.status(200).json({
          message: 'login efetuado com sucesso',
          nome: user.nome,
          matricula: user.matricula,
          email: user.email,
          telefone: user.telefone,
          role: user.role,
        })
      }
      return response.status(400).json({
        message: 'usuario e/ou senha incorreta'
      })
    }
    catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async read(request, response) {
    const { matricula } = request.params;

    try {
      const user = await User.findByPk(matricula);
      if (!user) {
        return response.status(500).json({
          message: 'Usuário não encontrado!',
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
        message: 'Usuário encontrado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async update(request, response) {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const { matricula } = request.params;
    const {
      nome, email, senha, telefone,
    } = request.body;
    const role = 0;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(senha, salt);

    try {
      const user = await User.update({
        nome,
        email,
        senha: hash,
        telefone,
        role,
      }, {
        where: {
          matricula,
        },
      });
      if (user[0] === 0) {
        return response.status(500).json({
          message: 'Erro ao atualizar usuário!',
        });
      }
      return response.status(200).json({
        data: user[0],
        message: 'Usuário atualizado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async delete(request, response) {
    const { matricula } = request.params;

    try {
      const user = await User.destroy({
        where: {
          matricula,
        },
      });
      if (user === 0) {
        return response.status(500).json({
          message: 'Erro ao deletar usuário!',
        });
      }
      return response.status(200).json({
        data: user,
        message: 'Usuário deletado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

};
