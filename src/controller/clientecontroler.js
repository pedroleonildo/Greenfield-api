import { Router } from "express";
import { cadastro, verificarLoginc } from "../repository/clienterepository";


const endpoint = Router();


endpoint.post('/inserircadastro', async (req, resp) => {
    try {
        const cliente = await req.body;

        //validaçoes abaixo

        if(!cliente.cliente)
            throw new Error('⚠ cliente obrigatório')

        if(!cliente.email)
            throw new Error('⚠ email obrigatório')

        if(!cliente.telefone)
            throw new Error('⚠ telefone obrigatorio')

        if(!cliente.cpf)
            throw new Error('⚠ telefone obrigatorio')

        if(!cliente.senha)
            throw new Error('⚠ telefone obrigatorio')

        const dados = await c(cliente)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

    endpoint.get('/login', async (req, resp) => {
        try {
        const credencial = await verificarLoginc();
        resp.json(credencial);
        } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
        }
    });
  
  export default endpoint;



