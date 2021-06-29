# Wa Project test

Repositório criado para teste de desenvolvedor júnior na empresa Wa Project. Foi realizado a construção de uma API para manutenção de laboratórios e exames 

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Docker] (https://www.docker.com/)

## Dependências
* Dotenv
* Express
* Knex
* Node
* Swagger

## Instalação

Realizar clone do projeto
```bash 
git clone https://github.com/ghabriel-fiorotti/waproject-test.git
```


Use o gerenciador de pacotes npm para instalar as dependências

```bash
npm install
```

O banco de dados foi configurado remotamente, não sendo necessário nenhuma ação. 

## Execução

Como forma de execução e testes da API, o projeto foi hospedado em container com docker na plataforma AWS. Para isso, segue abaixo a base da URL http://18.228.221.181:3000/ e para verificar as rotas criadas e disponíveis, basta acessar o swagger através deste lik: http://18.228.221.181:3000/doc e realizar os testes
