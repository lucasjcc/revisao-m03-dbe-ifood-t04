create database gestao_financeira;
drop database gestao_financeira;

drop table usuarios;
create table usuarios (
    id serial primary key,
    nome varchar(100) not null,
    email varchar(60) not null unique,
    senha text not null
);

drop table gastos;
create table gastos (
	id serial primary key,
  id_usuario integer references usuarios(id),
  valor integer not null check(valor > 0),
  data date default current_date,
  descricao text
);

INSERT INTO
	usuarios (nome, email, senha)
VALUES
	('caldeira', 'caldeira@gmail.com', '123');
  
SELECT
	*
FROM 
	usuarios
WHERE
	email = 'caldeira@gmail.com';
  
INSERT INTO
	gastos (id_usuario, valor, data, descricao)
VALUES
	(18, 730, '21-01-2023', 'Caixa de leite');
  
INSERT INTO
	gastos (id_usuario, valor)
VALUES
	(18, 1100);

SELECT 
	*
FROM 
	gastos
WHERE 
	id_usuario = 18
