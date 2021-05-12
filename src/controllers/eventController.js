const { v4: uuidv4 } = require('uuid');

const Event = require('../models/event');

module.exports = {
  async create(request, response) {
    const {
      titulo, descricao, date, organizador,
    } = request.body;

    const id = uuidv4();

    try {
      const event = await Event.create({
        id,
        titulo,
        descricao,
        date,
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
            date: event.date,
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
  async read(request, response) {
    const { id } = request.params;

    try {
      const event = await Event.findByPk(id);
      if (!event) {
        return response.status(500).json({
          message: 'Evento não encontrado!',
        });
      }
      return response.status(200).json({
        data: {
          event: {
            titulo: event.titulo,
            organizador: event.organizador,
            descricao: event.descricao,
            date: event.date,
          },
        },
        message: 'Evento encontrado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      titulo, descricao, organizador, date,
    } = request.body;

    try {
      const event = await Event.update({
        titulo,
        organizador,
        descricao,
        date,
      }, {
        where: {
          id,
        },
      });
      if (event[0] === 0) {
        return response.status(500).json({
          message: 'Erro ao atualizar evento!',
        });
      }
      return response.status(200).json({
        data: event[0],
        message: 'Evento atualizado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },

  async read_all(request, response) {
    try {
      const event = await Event.findAll();
      if (!event) {
        return response.status(500).json({
          message: 'Evento não encontrado!',
        });
      }
      return response.status(200).json(event);
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
      const event = await Event.destroy({
        where: {
          id,
        },
      });
      if (event === 0) {
        return response.status(500).json({
          message: 'Erro ao deletar evento!',
        });
      }
      return response.status(200).json({
        data: event,
        message: 'Evento deletado com sucesso!',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error,
      });
    }
  },
};
