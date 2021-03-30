const userRoutes = require('express').Router();

const {
  celebrate,
} = require('celebrate');

const {
  userValidation,
} = require('../validations/userValidations');

const UserController = require('../controllers/userController');

userRoutes.post('/create', celebrate(userValidation), UserController.create);
userRoutes.post('/login', UserController.login);
userRoutes.get('/:matricula', UserController.read);
userRoutes.put('/:matricula', UserController.update);
userRoutes.delete('/:matricula', UserController.delete);

module.exports = userRoutes;
