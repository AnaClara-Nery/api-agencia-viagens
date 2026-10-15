# API REST - Agência de Viagens

Prova P2 da disciplina CMP2304 - Tecnologia de Construção de Software I (PUC Goiás).
Aluna: Ana Clara Nery e Mello Figueiredo

API REST do recurso `pacote` (id, destino, dias, preco), em Node.js com Express e MySQL/MariaDB.

## Como executar

1. Execute o script `database.sql` no MySQL/MariaDB.
2. Ajuste usuário e senha em `config/db.js`.
3. Instale as dependências e suba o servidor:

   npm install
   npm start

Servidor em http://localhost:3000

## Rotas

| Método | Rota         | Descrição              |
| ------ | ------------ | ---------------------- |
| GET    | /pacote      | Lista todos os pacotes |
| GET    | /pacote/:id  | Busca um pacote por id |
| POST   | /pacote      | Cadastra um pacote     |
| PUT    | /pacote/:id  | Atualiza um pacote     |
| DELETE | /pacote/:id  | Remove um pacote       |

## Corpo para POST e PUT

    {
      "destino": "Fernando de Noronha",
      "dias": 7,
      "preco": 8900.00
    }

## Testes no Postman

Importe o arquivo `Agencia-de-Viagens.postman_collection.json` no Postman.
A variável `baseUrl` já aponta para http://localhost:3000.

## Tecnologias

Node.js, Express, nodemon, morgan, body-parser, CORS, módulo mysql, MariaDB/MySQL.