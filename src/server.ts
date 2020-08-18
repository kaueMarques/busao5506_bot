import express from 'express';
import routes from './routes';

require('dotenv').config();

const Token = process.env.TOKEN;
const Port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);


app.listen(Port,()=>{
    console.log('\x1b[33m%s\x1b[0m',`>iniciando na porta ${Port}...\n>server OK  - Sem erros detectados, até o momento\n`);
});