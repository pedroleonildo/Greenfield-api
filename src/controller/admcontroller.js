import { LoginAdm } from "../repository/admrepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post('/adm/login', async (req, resp) => {
    try{
        let adm = req.body
        let r = await LoginAdm(adm)
        resp.send(r)
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    };
})



export default endpoints;