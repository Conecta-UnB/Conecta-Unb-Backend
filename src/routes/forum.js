const forumRoutes = require('express').Router();

const ForumController = require('../controllers/forumController');

forumRoutes.post('/create', ForumController.create);
forumRoutes.get('/', ForumController.readAll);
forumRoutes.get('/comments', ForumController.readAllComments);
forumRoutes.get('/:id', ForumController.read);
forumRoutes.delete('/:id', ForumController.delete);

module.exports = forumRoutes;
