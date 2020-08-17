import express from 'express';
import routes from './routes';

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);
console.log("\n>server OK - Sem erros detectados, até o momento\n");