const comentarioRoutes = require('express').Router();

const ComentarioController = require('../controllers/comentarioController');

comentarioRoutes.post('/create', ComentarioController.create);
comentarioRoutes.get('/', ComentarioController.readAll);
comentarioRoutes.get('/:id', ComentarioController.read);
comentarioRoutes.delete('/:id', ComentarioController.delete);

module.exports = comentarioRoutes;
