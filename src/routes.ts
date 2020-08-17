import express from 'express';
const routes = express.Router();


routes.get('/', (request, response) =>{
    return response.json({ message: 'Versao da API 0.1'});
});

export default routes;