import conexao from "./connection.js";

export async function Loginadm(email, senha) {
  let sql = `
  SELECT ds_email, ds_senha FROM tb_admin WHERE ds_email = ? and ds_senha = ?;
  `

  let respostas = await conexao.query(sql, [email,senha]);
  
  let linhas = respostas[0];
  let linha = linhas[0];
  console.log(linha)

  return linha;
}




