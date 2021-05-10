const { v4: uuidv4 } = require('uuid');

const Forum = require('../models/forum');
const Comentario = require('../models/comentario');

module.exports = {

  async create(request, response) {
    const id = uuidv4();

    const {
      titulo, descricao, id_user,
    } = request.body;

    try {
      const forum = await Forum.create({
        id,
        titulo,
        descricao,
        id_user,
      });
      if (!forum) {
        return response.status(500).json({
          message: 'Erro ao criar notícia!',
        });
      }
      return response.status(200).json({
        data: {
          forum: {
            id: forum.id,
            titulo: forum.titulo,
            descricao: forum.descricao,
            id_user: forum.id_user,
          },
        },
        message: 'Notícia criado com sucesso!',
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
      const forum = await Forum.findByPk(id);
      if (!forum) {
        return response.status(500).json({
          message: 'Fórum não encontrado!',
        });
      }
      return response.status(200).json({
        data: {
          forum,
        },
        message: 'Fórum encontrado com sucesso!',
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
      const forum = await Forum.destroy({
        where: {
          id,
        },
      });
      if (forum === 0) {
        return response.status(500).json({
          message: 'Erro ao deletar fórum!',
        });
      }
      return response.status(200).json({
        data: forum,
        message: 'Fórum deletado com sucesso!',
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
      console.log(Forum.associations);
      const forum = await Forum.findAll();
      if (forum.length === 0) {
        return response.status(404).json({
          message: 'Fóruns não encontrados!',
        });
      }
      return response.status(200).json({
        data: {
          forum,
        },
        message: 'Fóruns encontrados com sucesso',
      });
    } catch (error) {
      return response.status(400).json({
        message: error,
      });
    }
  },

  async readAllComments(request, response) {
    try {
      const forum = await Forum.findAll({
        include: {
          model: Comentario,
          required: true,
        },
      });
      if (forum.length === 0) {
        return response.status(404).json({
          message: 'Fóruns não encontrados!',
        });
      }
      return response.status(200).json({
        data: {
          forum,
        },
        message: 'Fóruns encontrados com sucesso',
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error,
      });
    }
  },
};
