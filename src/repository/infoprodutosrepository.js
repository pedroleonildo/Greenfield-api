import { conexao } from "./connection.js";

export async function Listarinfo(){
    let sql = 'select * from tb_informacoes_produto'
    let resp = await conexao.query(sql)

    return resp;
}

export async function Cadastrainfo(info){
    let sql = `insert into tb_informacoes_produto(ds_material, ds_dimencoes, ds_extra)
    values(?, ?, ?)`

    let [infor] = await conexao.query(sql, [
        infor.material,
        infor.dimencoes,
        infor.extra
    ])

    infor.id = infor.insertID

    return infor;

}