import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import clientecontroler from './controller/clientecontroler.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroler);

server.listen(process.env.PORT, () => console.log(`A API subiu na porta ${process.env.PORT}`))

