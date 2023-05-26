## Description

Resumo do POC (Proof of Concept) de uma API de cadastro de clientes com contatos usando MySQL com Docker Compose, Node.js e NestJS, Swagger:

O objetivo deste POC foi desenvolver uma API para gerenciar o cadastro de clientes e seus respectivos contatos. Para isso, utilizamos o banco de dados MySQL em conjunto com o Docker Compose para facilitar a configuração e execução do ambiente de desenvolvimento.

A linguagem de programação escolhida foi o Node.js e o framework utilizado foi o NestJS, que é baseado no Express.js e fornece uma estrutura robusta e escalável para a criação de APIs em Node.js. O NestJS utiliza o TypeScript, o que traz a vantagem de adicionar tipagem estática ao código e melhorar a produtividade do desenvolvimento.

O POC foi dividido em diferentes etapas. Primeiro, configuramos o ambiente de desenvolvimento usando o Docker Compose. Definimos o serviço do MySQL, configuramos o banco de dados e as tabelas necessárias para armazenar os clientes e seus contatos.

Em seguida, implementamos as rotas e controladores no NestJS para criar, atualizar, ler e deletar clientes e contatos. Utilizamos o Swagger para documentar a API e fornecer uma interface interativa para testar as rotas. O Swagger facilita o entendimento e uso da API pelos desenvolvedores e fornece uma documentação completa das operações disponíveis.

Além disso, implementamos validações de entrada nos dados enviados pela API, garantindo que as informações fornecidas estejam corretas e completas. Também adicionamos autenticação e autorização para proteger os dados e controlar o acesso à API.

Por fim, realizamos testes para garantir o funcionamento correto da API. Testamos as diferentes operações, incluindo a criação, atualização, leitura e exclusão de clientes e contatos. Também testamos os cenários de erro e validamos se as respostas estão corretas de acordo com as especificações da API.

O POC foi concluído com sucesso, demonstrando a viabilidade da criação de uma API de cadastro de clientes com contatos usando MySQL com Docker Compose, Node.js e NestJS. O uso do Swagger facilitou a documentação e testes da API, enquanto o Docker Compose permitiu a configuração rápida e fácil do ambiente de desenvolvimento.

[Frontend](https://github.com/eskokado/m6t14-contatos-reactjs) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## preparar .env
```
Copiar .env_example para .env
```

## Docker Mysql

```
$ docker-compose up -d
```

## migration
```
$ npx prisma generate
$ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger - local

[Documentação](http://localhost:3000/api)

## Stay in touch

- Author: Edson Shideki Kokado - [Linkedin](https://www.linkedin.com/in/edson-shideki-kokado/) 
| [Github](https://github.com/eskokado/) 
| [Portfólio](https://eskcti.com.br)
- Projeto: [Github](https://github.com/eskokado/m6t14-contatos-api-nestjs)
- Frontend: [Github](https://github.com/eskokado/m6t14-contatos-reactjs)

## License

Nest is [MIT licensed](LICENSE).
