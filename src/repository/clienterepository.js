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




export async function Loginc(email, senha) {
    let sql = `
    SELECT ds_email, ds_senha FROM tb_cliente WHERE ds_email = ? and ds_senha = ?;
    `
  
    let respostas = await conexao.query(sql, [email,senha]);

    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
  }

export async function inserirReclamacao(reclamacao){
    let comando = `
    insert into tb_reclamacao (ds_reclamacao)
                        value(?)`

    let [info] = await conexao.query(comando, [
        reclamacao.textoreclamacao
    ]);

    reclamacao.id = info.insertId;

    return reclamacao;
}

