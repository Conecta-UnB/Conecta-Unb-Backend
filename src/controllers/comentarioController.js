const { v4: uuidv4 } = require('uuid');

const Comentario = require('../models/comentario');

module.exports = {

  async create(request, response) {
    const id = uuidv4();

    const {
      conteudo, id_user, id_forum,
    } = request.body;

    try {
      const comentario = await Comentario.create({
        id,
        conteudo,
        id_forum,
        id_user,
      });
      if (!comentario) {
        return response.status(500).json({
          message: 'Erro ao criar comentário!',
        });
      }
      return response.status(200).json({
        data: {
          comentario,
        },
        message: 'Comentário criado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async read(request, response) {
    const { id } = request.params;

    try {
      const comentario = await Comentario.findByPk(id);
      if (!comentario) {
        return response.status(500).json({
          message: 'Comentário não encontrado!',
        });
      }
      return response.status(200).json({
        data: {
          comentario,
        },
        message: 'Comentário encontrado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const comentario = await Comentario.destroy({
        where: {
          id,
        },
      });
      if (comentario === 0) {
        return response.status(500).json({
          message: 'Erro ao deletar comentário!',
        });
      }
      return response.status(200).json({
        data: comentario,
        message: 'Comentário deletado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async readAll(request, response) {
    try {
      console.log(Comentario.associations);
      const comentario = await Comentario.findAll();
      if (comentario.length === 0) {
        return response.status(404).json({
          message: 'Comentários não encontrados!',
        });
      }
      return response.status(200).json({
        data: {
          comentario,
        },
        message: 'Comentários encontrados com sucesso',
      });
    } catch (error) {
      return response.status(400).json({
        message: error,
      });
    }
  },
};
