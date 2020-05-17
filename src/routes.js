const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({
    evento: 'Be The Hero',
    aluno: 'Alexandre dos Santos'
  });
});

module.exports = routes;