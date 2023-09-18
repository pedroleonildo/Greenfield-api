import { conexao } from "./connection.js";

export async function Listarinfo(){
    let sql = 'select * from tb_informacoes_produto'
    let [resp] = await conexao.query(sql)

    return resp;
}

export async function Cadastrainfo(infor){
    let sql = `insert into tb_informacoes_produto(ds_material, ds_dimensoes, ds_extra)
    values(?, ?, ?)`

    let [info] = await conexao.query(sql, [
        infor.material,
        infor.dimensoes,
        infor.extra
    ])

    infor.id = info.insertID

    return infor;

}