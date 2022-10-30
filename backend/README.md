# Backend showcase-car

O backend desse projeto foi desenvolvido usando o NodeJS com o framework do Express e com o banco de dados do mongoDB.

## Como fazer a conexão ao mongoDB

Para fazer a conexão ao mongoDB é necessário passar os valores das credenciais do usuário a url do banco dde dados via as seguintes variáveis de ambiente:
```
    DB_URL= // para a URL
    DB_USER = // para o usuário
    DB_PASS = // para a senha
```
Com isso será construído algo similar a essa url: mongodb+srv://<DB_USER>:<DB_PASS>@<DB_URL>

## Como abrir o servidor

