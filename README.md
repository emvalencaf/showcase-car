# showcase-car

[Em desenvolvimento] Projeto desenvolvido para a avaliação dos conhecimentos técnicos em desenvolvimento front-end e lógica de programação para o cargo fullstack JS da Verzel.

A proposta do teste é o desenvolvimento de um catálogo de veículos à venda.

## Sobre

O projeto foi dividido em dois: frontend e backend; cada um dos projetos possui o seu README instruindo os seus detalhes.

### Sobre as limitações do projeto

- O projeto não se limitou-se a um mostruário, deixando pronto fundamentos para prosseguir no desenvolvimento para um e-commerce;
- O projeto não implementou restrições para cadastro de administradores, tampouco desenvolveu uma dashboard para a administração mais completa. Embora tenha deixado bases para o desenvolvimento;

### Como usar

1. Leia o README dos diretórios do backend e frontend para a configuração correta do projeto;
2. Abra o terminal no backend da aplicação e digite o comando ``npm install`` para baixar os pacotes necessários ao backend da aplicação;
3. Ainda no backend, é preciso que sejam passadas, como variáveis de ambiente os seguintes dados:
````
DB_URL= // a outra parte da URL para a conexão com o banco de dados
DB_PASS= // a senha do usuário do banco de dados
DB_USER= // o nome de usuário do banco de dados
PORT= // a porta em que o servidor será passado
JWT_SECRET= // A senha JWT para gerar os tokens
````
4. Após as configurações, é possível a execução da aplicação em ambiente de produção (comando: `npm start`), ou em ambiente de desenvolvimento (comando: `npm run dev`), para a execução em ambiente de desenvolvimento as variáveis de ambiente deverão ser passadas em um arquivo ``.env`` que ficará na raiz do diertório do backend;
5. Para executar em ambiente de desenvolvimento, cheque se está instalado o pacote ``dotenv``;
7. Por último, cheque se há um diretório ``uploads > images > cars`` na raiz do diretório backend, caso não exista crio-o, do contrário as rotas que consumem o middleware ``imageUpload`` não funcionarão;
8. Vá agora ao diretório frontend e configure as URL do diretório upload para renderizar as imagens salvas no servidor e a URL da API, esses dados devem ser colocados no diretório ``src > utils > config.utils.js``, por exemplo:
```
// API's url
export const api = 'http://localhost:5000/api';// insert here the API's url
export const uploads = 'http://localhost:5000/uploads';// url for our local image storage

```
9. Abra um novo terminal na pasta frontend e digite o comando ``npm install`` para instalar todos os pacotes de dependência necessários para rodar o projeto;
10. No terminal da pasta frontend, digite o comando ```npm start`` para rodar o frontend do projeto.
