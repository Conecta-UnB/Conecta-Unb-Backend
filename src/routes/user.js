const userRoutes = require('express').Router();

const UserController = require('../controllers/userController');

userRoutes.post('/create', UserController.create);

module.exports = userRoutes;
