const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const noticiaValidation = {
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().required().min(10).max(100),
        conteudo: Joi.string().required().min(20).max(1000),
        imagem: Joi.binary().allow(null),
        autor: Joi.string().required()
    }),
  };
  
  module.exports = {
    noticiaValidation
  };