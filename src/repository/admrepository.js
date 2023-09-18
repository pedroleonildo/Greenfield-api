import { conexao } from "./connection.js";

export async function Verificarlogin() {
  try {
    const comando = `
        select nm_usuario as nome,
        ds_email as email,
        ds_senha as senha
        from tb_admin;`;

    const [resposta] = await conexao.query(comando);

    return resposta[0];
    
  } catch (error) {
    throw error;
  }
}




