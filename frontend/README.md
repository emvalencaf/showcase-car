# Front-end do projeto showcase-car

O front-end desse projeto foi desenvolvido em javascript usando o framework ReactJS. Apesar de ter responsividade, esse projeto foi desenvovido primariamente para desktop.

## Sobre o Projeto

### Como fazer a conexão ao backend

A conexão com o backend será feita passando a url da API no arquivo config.utils.js no diretório utils, conforme o exemplo abaixo:
```
// API's url
export const api = 'http://localhost:5000/api';// insert here the API's url
export const uploads = 'http://localhost:5000/uploads';// url for our local image storage

```
Como o projeto acessa imagens dos carros salvos no servidor local também foi passado a url do storage.

Recomenda-se rever o arquivo app.js do backend, em específico o cors.

### Sobre a autenticação

Nesse projeto optou-se por usar o localStorage para salvar o jwt do usuário - que tem 7 dias para expirar (para rever isso, vá ao backend e reveja a função generateToken no arquivo generateToken.auth.js no diretório auth).

Uma outra opção seria o uso da sessionStorage.

## Sobre as limitações do projeto

- O projeto não se propôs apenas limitou-se a um mostruário;
- O projeto não implementou restrições para cadastro de administradores;