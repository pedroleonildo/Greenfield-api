import { conexao } from "./connection.js";

export async function LoginAdm(adm){
        let comando = `insert into tb_admin(ds_email, ds_senha)
        values(?, ?)`

        let [info] = await conexao.query(comando, [
            adm.email,
            adm.senha
        ])

        adm.id = info.insertId;
        return adm
}
