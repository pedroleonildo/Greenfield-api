import { conexao } from "./connection.js";

export async function Listartodos(){
    let sql = `select nm_produto,
    ds_fabricante,
    vl_preco,
    nr_garantia,
    ds_produto,
    vl_preco_promocao,
    bt_promocao,
    qtd_estoque,
    nm_categoria,
    ds_material, 
    ds_dimencoes, 
    ds_extra
    from tb_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto.id_categoria
    inner join tb_informacoes_produto on tb_informacoes_produto.id_informacoes_produto = tb_produto.id_informacoes_produto;`

    let resp = await conexao.query(sql)

    return resp
}

export async function Cadastrarproduto(produtos){
    let sql = `insert into tb_produto(nm_produto, ds_fabricante, vl_preco, nr_garantia, ds_produto, id_categoria, vl_preco_promocao, bt_promocao, qtd_estoque, id_informacoes_produto)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.preco_promo,
        produtos.promocao,
        produtos.estoque,
        produtos.infoproduto
    ])

    produtos.id = info.insertID

    return produtos;
}

export async function Editarproduto(id, produtos){
    let sql = `update tb_produto set 
    nm_produto = ?,
    ds_fabricante = ?,
    vl_preco = ?,
    nr_garantia = ?,
    ds_produto = ?,
    id_categoria = ?,
    vl_preco_promocao  = ?,
    bt_promocao  = ?,
    qtd_estoque = ?,
    id_informacoes_produto = ?
    where id_produto = ?`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.preco_promo,
        produtos.promocao,
        produtos.estoque,
        produtos.infoproduto,
        id
    ])

    let linha = info.affectedRows;
    return linha
}