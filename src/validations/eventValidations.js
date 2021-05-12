const {
  Segments,
  Joi,
} = require('celebrate');

const eventValidation = {
  [Segments.BODY]: Joi.object().keys({
    titulo: Joi.string().required().max(30),
    organizador: Joi.string().required(),
    date: Joi.date().required(),
    descricao: Joi.string().required().max(300),
  }),
};

module.exports = eventValidation;
