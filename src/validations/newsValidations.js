const {
  Segments,
  Joi,
} = require('celebrate');

const newsValidation = {
  [Segments.BODY]: Joi.object().keys({
    titulo: Joi.string().required(),
    imagem: Joi.string().required(),
    conteudo: Joi.string().required(),
    id_user: Joi.string().required().min(9).max(9),
    autor: Joi.string().required(),
  }),
};

module.exports = {
  newsValidation,
};
