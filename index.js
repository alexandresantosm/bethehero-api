const express = require('express');

const app = express(); //Criando a aplicação

app.get('/', (request, response) => {
  return response.json({
    evento: 'Be The Hero',
    aluno: 'Alexandre'
  });
});

app.listen(3333); // Mandando a aplicação escutar a porta 3333
