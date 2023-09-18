import conexao from './connection.js';

 export async function cadastro(cliente){
    let comando = `insert into tb_cliente(nm_cliente, ds_email, ds_cpf, ds_senha, ds_telefone)
    values(?, ?, ?, ?, ?);`;

    let [info] = await conexao.query(comando, [

        cliente.nome,
        cliente.email,
        cliente.cpf,
        cliente.senha,
        cliente.telefone,

    ])

    cliente.id = info.insertId

    return cliente;

}




export async function verificarLoginc() {

    const comando = `
      SELECT ds_email as email, ds_senha as senha
      FROM tb_cadastro_cliente
    `;
    const [resposta] = await conexao.query(comando);
    resposta[0]
}

