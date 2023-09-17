import { conexao } from "./connection.js";

export async function Login(cliente){
    let comando = `insert into tb_cliente(nm_cliente, ds_email, ds_cpf, ds_senha, ds_telefone, ds_reclamacao, id_cartao)
    values(?, ?, ?, ?, ?, ?, ?)`;

    let [info] = await conexao.query(comando, [
        cliente.email,
        cliente.nome,
        cliente.telefone,
        cliente.cpf,
        cliente.senha
    ])

    cliente.id = info.insertId

    return cliente;

}

