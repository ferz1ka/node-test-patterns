# Aplicações testáveis com Node.js

> Essa aplicação é utilizada como base para demonstrar como podemos utilizar de patterns conhecidos na programação para facilitar a escrita de testes automatizados (inversão de dependências, pattern de repositórios e in-memory test database)

Esse repositório contém uma aplicação Node.js de base que possui apenas uma funcionalidade de criação de pedidos (`src/create-order.js`).

Essa funcionalidade salva as informações do pedido no banco de dados e determina a prioridade do pedido com base no seu valor: Se o valor for maior que 3000 então é um pedido prioritário;

Ainda na aplicação, possuímos um arquivo de testes para a funcionalidade (`src/create-order.test.js`) que basicamente testa:

1. Se é possível criar um pedido;
2. Se os pedidos estão sendo priorizados corretamente;
3. Se o e-mail de confirmação está sendo enviado;

## Executando

Para o projeto funcionar é necessário que você esteja com o PostgreSQL executando em sua máquina. Rcomendo utilizar o Docker para subir o banco de dados:

```
docker run --rm -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=app -p 5432:5432 postgres
```

Além disso, é necessário criar um arquivo `.env` na raiz do projeto com as variáveis ambiente para conexão com o banco de dados:

```
PGUSER=docker
PGHOST=localhost
PGPASSWORD=docker 
PGDATABASE=app 
PGPORT=5432 
```