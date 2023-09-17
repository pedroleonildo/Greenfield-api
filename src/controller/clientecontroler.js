import { Login } from "../repository/clienterepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post('/cliente/login', async (req, resp) => {
    try{
        let cliente = req.body;
        let r = await Login(cliente)
        resp.send(r)
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
    
})

export default endpoints;


