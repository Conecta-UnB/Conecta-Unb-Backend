const newsRoutes = require('express').Router();

const {
  celebrate,
} = require('celebrate');

const {
  newsValidation,
} = require('../validations/newsValidations');

const NewsController = require('../controllers/newsController');

newsRoutes.post('/create', celebrate(newsValidation), NewsController.create);
newsRoutes.get('/', NewsController.readAll);
newsRoutes.get('/:id', NewsController.read);
newsRoutes.delete('/:id', NewsController.delete);

module.exports = newsRoutes;
