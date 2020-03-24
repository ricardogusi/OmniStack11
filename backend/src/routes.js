const express = require('express');

const ongController = require('./controllers/ongcontroller')
const incidentController = require('./controllers/incidentcontroller')
const profileController = require('./controllers/profilecontroller')
const sessioncontroller = require('./controllers/sessioncontroller')

const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);


routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;