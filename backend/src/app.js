/*  Métodos HTTP:
*   GET: Buscar/Listar informações do back-end
*   POST: Criar uma informação no back-end
*   PUT: Alterar uma informação no back-end
*   DELETE: Deletar uma informação no back-end
*/

/*  TIPO DE PARÂMETROS:
*
*   QUERY PARMS: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
*   ROUTE PARMS: Parâmetros utilizados para identificar recursos
*   REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
*/


const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());


module.exports = app;