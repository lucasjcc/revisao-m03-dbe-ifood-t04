# Revisão módulo 03

## Descrição da proposta
Contruir uma RESTful API que simule funcionalidades de aplicativo de gestão financeira de gastos:

- [] Cadastrar usuário;
- [] Fazer login do usuário;
- [x] O usuário deve ser capaz de exibir seus os gasto;
- [x] O usuário deve ser capaz de detalhar um gasto;
- [] O usuário deve ser capaz de editar sua conta;
- [] O usuário deve ser capaz de editar um gasto;
- [] O usuário deve ser capaz de excluir um gasto;
- [] O usuário deve ser capaz de filtrar pelos gastos feitos em um período.
  
## Banco de dados

### Tabela usuarios
Essa tabela deve ter os seguintes campos:
- id (identificador único);
- nome (obrigatório);
- email (obrigatório e único);
- senha (obrigatório).

### Tabela gastos
Essa tabela deve ter os seguintes campos:
- id (identificador único);
- id_usuario (chave estrangeira);
- valor (maior que zero e obrigatório);
- data (data do gasto);
- descricao (optativo).

## Rotas

#### `POST` /`usuarios`
#### `POST` /`login`
#### `GET` /`gastos`
#### `GET` /`gastos/:id`
#### `PUT` /`gastos/:id`
#### `DELETE` /`gastos/:id`


