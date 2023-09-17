import { Listarinfo, Cadastrainfo } from "../repository/infoprodutosrepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/info', async (req, resp) => {
    try{
        let dados = await Listarinfo();
        resp.send(dados);
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})

endpoints.post('/info', async (req, resp) => {
    try{
        let infor = req.body;
        let r = await Cadastrainfo(infor)
        resp.send(r)
    }

    catch(err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
})

export default endpoints;