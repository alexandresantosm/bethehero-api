const express = require('express');

const DonationStandsController = require('./controllers/DonationStandsController');
const DonationController = require('./controllers/DonationController');
const ProfileDonationController = require('./controllers/ProfileDonationController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Rota de login
routes.post('/sessions', SessionController.create);

// Listagem de posto de doação
routes.get('/donation_stands', DonationStandsController.index);

// Cadastro de posto de doação
routes.post('/donation_stands', DonationStandsController.create);

// Listagem de doações de um único posto de doação
routes.get('/profile', ProfileDonationController.index);

// Listagem de doação
routes.get('/donations', DonationController.index);

// Cadastro de doação
routes.post('/donations', DonationController.create);

// Deletar doação
routes.delete('/donations/:id', DonationController.delete);

module.exports = routes;