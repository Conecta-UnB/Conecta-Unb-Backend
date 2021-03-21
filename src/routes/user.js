const userRoutes = require('express').Router();

const {
    celebrate
} = require('celebrate');

const {
    userValidation
} = require('../validations/userValidations');

const UserController = require('../controllers/userController');

userRoutes.post('/create', celebrate(userValidation), UserController.create);

module.exports = userRoutes;
