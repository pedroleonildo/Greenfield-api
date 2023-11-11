import conexao from "./connection.js";

export async function Listartodos(){
    let sql = `SELECT *
    FROM tb_produto
    INNER JOIN tb_categoria
    ON tb_categoria.id_categoria = tb_produto.id_categoria `

    let [resp] = await conexao.query(sql)

    return resp
}

export async function Listarfavo(id){
    let sql = `select * from tb_produto 
    where bt_favorito = true and id_categoria = ?`

    let [resp] = await conexao.query(sql, [id])

    return resp
}

export async function Listarnome(nome){
    let sql = `select * 
    from tb_produto
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    where nm_produto like ?`

    const [resp] = await conexao.query(sql, [`%${nome}%`])

    return resp
}

export async function Listarporid(id){
    let sql = `select * 
    from tb_produto
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    where id_produto = ?`

    const [resp] = await conexao.query(sql, [id])

    return resp[0]
}

export async function Listarporcategoria(id){
    let sql = `select * 
    from tb_produto
    inner join tb_categoria
    on tb_produto.id_categoria = tb_categoria.id_categoria
    where tb_produto.id_categoria = ?`

    const [resp] = await conexao.query(sql, [id])

    return resp
}

export async function Cadastrarproduto(produtos){
    let sql = `insert into tb_produto(nm_produto, ds_fabricante, vl_preco, nr_garantia, ds_produto, id_categoria, vl_preco_promocao, bt_promocao, qtd_estoque, ds_material, ds_dimensoes, ds_extra, ds_img1, ds_img2, ds_img3)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

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
        produtos.material,
        produtos.dimensoes,
        produtos.extra,
        produtos.imagem1,
        produtos.imagem2,
        produtos.imagem3
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
    ds_material = ?,
    ds_dimensoes = ?,
    ds_extra = ?
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
        produtos.dimensoes,
        produtos.material,
        produtos.extra
    ])

    let linha = info.affectedRows;
    return linha
}

export async function Favorito(id, produtos){
    let sql = `update tb_produto set bt_favorito = ? where id_produto = ?`

    let [info] = await conexao.query(sql, [produtos.favorito, id])

    let linha = info.affectedRows;
    return linha
}

export async function deletarproduto(id){
    let sql = `delete from tb_produto where id_produto = ?`

    let [info] = await conexao.query(sql, [id])

    let linha = info.affectedRows;
    return linha;
}

export async function EnviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('produtosIma', imagem)
    const resposta = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })

    return resposta.status; 
}

export function BuscarImagem(imagem) {
    console.log(`${api.getUri()}/${imagem}`);

    return `${api.getUri()}/${imagem}`
}

export async function alterarImagem(imagem, id) {
    const comando = `
        update tb_produto
        set ds_img1 = ?
        where id_produto = ?
    `

    const [resp] = await conexao.query(comando, [imagem, id]);
    return resp.affectedRows;
}
