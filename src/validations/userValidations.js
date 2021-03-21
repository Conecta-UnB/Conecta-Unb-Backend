const {
    Segments,
    Joi,
  } = require('celebrate');
  
  const userValidation = {
    [Segments.BODY]: Joi.object().keys({
        matricula: Joi.string().required().min(9).max(9),
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        senha: Joi.string().required().min(6),
        telefone: Joi.string().required().min(11).max(11)
    }),
  };
  
  const loginValidation = {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6)
    }),
  };
  
  module.exports = {
    userValidation,
    loginValidation
  };