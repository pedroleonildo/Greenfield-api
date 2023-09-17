import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'

import clientecontroler from './controller/clientecontroler.js'
import categoriacontroller from './controller/categoriacontroller.js'
import infoprodutoscontroller from './controller/infoprodutoscontroller.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroler);

server.use(categoriacontroller);
server.use(infoprodutoscontroller);

server.listen(process.env.PORT, () => console.log(`A API subiu na porta ${process.env.PORT}`))

