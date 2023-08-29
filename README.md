# Revisão módulo 03

## Descrição da proposta
Contruir uma RESTful API que simule funcionalidades de aplicativo de gestão financeira de gastos:

- [] Cadastrar usuário;
- [] Fazer login do usuário;
- [v] O usuário deve ser capaz de editar sua conta;
- [x] O usuário deve ser capaz de exibir seus os gasto;
- [x] O usuário deve ser capaz de detalhar um gasto;
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


# Proposta de estrutura de pasta

- src
  - controladores
    * regras de negócio + responder e pegar o que vem da requisição
  - intermediários
    * validações
  - config
    * configurações de funcionalidades externas (banco de dados, serviço de e-mail...)
  - repositorios
    * consultas no banco de dados
  - utils (funções utilitárias)
    * regra das exclusão. Se não for nenhum de cima, vem pra cá


