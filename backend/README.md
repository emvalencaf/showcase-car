# Backend showcase-car

O backend desse projeto foi desenvolvido usando o NodeJS com o framework do Express e com o banco de dados do mongoDB.

## Sobre o projeto

O design pattern escolhido foi o Repository para separar as regras do negócio das requisições ao banco de dados.

Consequentemente, os controller ficaram responsáveis apenas pelas regras de negócio e os repositórios pelas interações com o banco de dados.

## Como fazer a conexão ao mongoDB

Para fazer a conexão ao mongoDB é necessário passar os valores das credenciais do usuário (do banco de dados) e a url do banco dde dados via as seguintes variáveis de ambiente:
```
    DB_URL= // para a URL
    DB_USER = // para o usuário
    DB_PASS = // para a senha
```
Com isso será construído algo similar a essa url: mongodb+srv://<DB_USER>:<DB_PASS>@<DB_URL>

## Como abrir o servidor

Há das formas de abrir o servidor dessa API:

1. Em servidor em ambiente de desenvolvimento;
2. Em servidor de produção.

### Ambiente de desenvolvimento

Em ambiente de desenvolvimento essa API tem suas variáveis de ambiente passadas em um arquivo .env em que deverão ser colocadas as seguintes variáveis:
``
    DB_URL= // para a URL
    DB_USER = // para o usuário
    DB_PASS = // para a senha
``
Configurado o arquivo .env na raiz do projeto backend basta abrir o terminal e digitar o comando: ``npm run dev ``.

### Ambiente de produção

Para funcionar em ambiente de produção basta configurar as variáveis de ambiente e executar o comando ``npm start``.