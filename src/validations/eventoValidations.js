const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const eventoValidation = {
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().required().min(10).max(100),
        descricao: Joi.string().required().min(20).max(1000),
        imagem: Joi.binary().allow(null),
        organizador: Joi.string().required()
    }),
  };
  
  module.exports = {
    eventoValidation
  };