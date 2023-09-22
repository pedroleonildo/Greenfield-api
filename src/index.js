import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'

import admcontroller from './controller/admcontroller.js'
import clientecontroler from './controller/clientecontroler.js'
import categoriacontroller from './controller/categoriacontroller.js'
import infoprodutoscontroller from './controller/infoprodutoscontroller.js'
import produtoscontroller from './controller/produtoscontroller.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroler);

server.use(categoriacontroller);
server.use(infoprodutoscontroller);
server.use(admcontroller);
server.use(produtoscontroller);


server.listen(process.env.PORT, () => console.log(`A API subiu na porta ${process.env.PORT}`))

