use greenfield;

create table tb_cartao(
id_cartao int primary key auto_increment,
nr_cartao int,
nm_titular varchar(100),
vl_cartao decimal(15,2),
ds_cartao varchar(100),
ds_cpf_titular_cartao varchar(100),
dt_nascimento date
);

create table tb_cliente(
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_cpf varchar(100),
ds_senha varchar(100),
ds_telefone varchar(100),
ds_reclamacao varchar(100),
id_cartao int,
foreign key (id_cartao) references tb_cartao (id_cartao)
);

create table tb_admin(
id_admin int primary key auto_increment,
ds_email varchar(100),
ds_senha varchar(100)
);

create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(100) 
);

create table tb_informacoes_produto(
id_informacoes_produto int primary key auto_increment,
ds_material varchar(100),
ds_dimencoes varchar(100),
ds_extra varchar(1000) 
);