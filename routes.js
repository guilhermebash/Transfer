const express = require('express');

const routes = express.Router();

const AuthController = require('./src/AuthController');
const DashboardController = require('./src/DashboardController');

routes.get('/login', AuthController.get);
routes.post('/login', AuthController.post);

routes.get('/dashboard', DashboardController.get);

module.exports = routes;