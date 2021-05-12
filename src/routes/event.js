const eventRoutes = require('express').Router();

const EventController = require('../controllers/eventController');

eventRoutes.post('/create', EventController.create);
eventRoutes.get('/read/:id', EventController.read);
eventRoutes.put('/update/:id', EventController.update);
eventRoutes.delete('/delete/:id', EventController.delete);
eventRoutes.get('/read_all', EventController.read_all);

module.exports = eventRoutes;
