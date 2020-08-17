import express from 'express';
import routes from './routes';

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(routes);


app.listen(PORT,()=>{
    console.log('\x1b[33m%s\x1b[0m',`>iniciando na porta ${PORT}...\n>server OK  - Sem erros detectados, até o momento\n`);
});