const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //Criando a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // Mandando a aplicação escutar a porta 3333
