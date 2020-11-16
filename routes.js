const express = require('express');

const routes = express.Router();

const AuthController = require('./src/controllers/AuthController');
const DashboardController = require('./src/controllers/DashboardController');

routes.get('/login', AuthController.get);
routes.post('/login', AuthController.post);

routes.get('/dashboard', DashboardController.get);
routes.get('/menus', DashboardController.menus);

routes.get('/comprovante/historico/:unidade', DashboardController.historico);

module.exports = routes;