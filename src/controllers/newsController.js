const { v4: uuidv4 } = require('uuid');

const News = require('../models/news');

module.exports = {

  async create(request, response) {
    const id = uuidv4();

    const {
      titulo, conteudo, id_user, autor, imagem,
    } = request.body;

    try {
      const news = await News.create({
        id,
        titulo,
        imagem,
        conteudo,
        id_user,
        autor,
      });
      if (!news) {
        return response.status(500).json({
          message: 'Erro ao criar notícia!',
        });
      }
      return response.status(200).json({
        data: {
          news: {
            id: news.id,
            titulo: news.titulo,
            imagem: news.imagem,
            conteudo: news.conteudo,
            id_user: news.id_user,
            autor: news.autor,
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
      const news = await News.findByPk(id);
      if (!news) {
        return response.status(500).json({
          message: 'Notícia não encontrado!',
        });
      }
      return response.status(200).json({
        data: {
          news: {
            titulo: news.titulo,
            conteudo: news.conteudo,
            id_user: news.id_user,
            autor: news.autor,
          },
        },
        message: 'Notícia encontrado com sucesso!',
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
      const news = await News.destroy({
        where: {
          id,
        },
      });
      if (news === 0) {
        return response.status(500).json({
          message: 'Erro ao deletar notícia!',
        });
      }
      return response.status(200).json({
        data: news,
        message: 'Notícia deletada com sucesso!',
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
      const news = await News.findAll();
      if (news.length === 0) {
        return response.status(404).json({
          message: 'Notícias não encontradas!',
        });
      }
      return response.status(200).json({
        data: {
          news,
        },
        message: 'Notícias encontradas com sucesso',
      });
    } catch (error) {
      return response.status(400).json({
        message: error,
      });
    }
  },
};
