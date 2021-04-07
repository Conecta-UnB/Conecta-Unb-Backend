const Event = require('../models/event');

module.exports = {
  async create(request, response) {
    const {
      titulo, descricao, imagem, organizador,
    } = request.body;

    console.log({
      titulo, descricao, imagem, organizador,
    });

    try {
      const event = await Event.create({
        titulo,
        descricao,
        imagem,
        organizador,
      });
      if (!event) {
        return response.status(500).json({
          message: 'Erro ao criar evento!',
        });
      }
      return response.status(200).json({
        data: {
          event: {
            titulo: event.titulo,
            descricao: event.descricao,
            imagem: event.imagem,
            organizador: event.organizador,
          },
        },
        message: 'Evento criado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },
};