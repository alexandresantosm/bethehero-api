const express = require('express');

const DonationStandsController = require('./controllers/DonationStandsController');

const routes = express.Router();

// Listagem de posto de doação
routes.get('/donation_stands', DonationStandsController.index);

// Cadastro de posto de doação
routes.post('/donation_stands', DonationStandsController.create);

module.exports = routes;