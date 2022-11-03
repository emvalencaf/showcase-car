# Front-end do projeto showcase-car

O front-end desse projeto foi desenvolvido em javascript usando o framework ReactJS. Apesar de ter responsividade, esse projeto foi desenvovido primariamente para desktop.

Por ser apenas uma vitrine e não ter tantos links na navbar optou-se por não implementar o menu "hambúrger" - o que pode ser feito em uma próxima versão do projeto.

## Sobre o Projeto

O front-end do projeto possui duas services:

1. authService para autenticação, login, logout e registro de novos usuários;
2. carService para criar novos registros, modificar, atualizar e deletar.

Que são consumidas com o auxílio do redux (especificamente, por slices) para tratar os dados consumidos nas páginas e intermediar a alteração dos estados estabelecidos nas páginas.

### Sobre o dashboard

Não foi feito uma dashboard, mas foi deixado o início de uma.

No estado atual do projeto qualquer um pode se registrar como administrador, optou-se por essa simplificação uma vez que o objetivo principal do projeto é apenas o consumo das rotas privadas da API do backend usando a autenticação jwt.

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

Nesse projeto optou-se por usar o localStorage para salvar o token do usuário - que tem 7 dias para expirar (para rever isso, vá ao backend e reveja a função generateToken no arquivo generateToken.auth.js no diretório auth).

Uma outra opção seria o uso da sessionStorage.

### Sobre o consumo das rotas privadas ao admin

As rotas privadas de editar e deletar os registros dos carros ficam na página inicial e aparecem uma vez que o usuário está autenticado.

Para consumi-las é preciso um token válido, em razão do authGuard no backend.

#### Observação

É possível fazer um registro do user dentro do localStorage. Com isso, é possível ver os botões de deletar e editar abaixo dos cards dos carros e também os links para usuários autenticados.

Entretanto, como o token - possivelmente não será válido - as rotas continuam protegidas pelo authGuard.

Portanto, o projeto está limitado à apenas um mero uso funcional da autenticação - principalmente por ser meramente um exercício.