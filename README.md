# API Simples de Usuários

## Descrição da Atividade

Esta atividade consiste em desenvolver uma API simples para a disciplina de Programação Web. A API permite criar, atualizar e remover usuários, utilizando persistência em memória. O objetivo é praticar a criação de rotas e manipulação de dados com Node.js e Express.js.

## Tecnologias Usadas

- **Node.js**: v20.14.0
- **Express.js**: v4.19.2

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js v20.14.0
- npm (gerenciador de pacotes do Node.js)

### Passos

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd <DIRETORIO_DO_PROJETO>
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```

5. **Acesse a API:**

   A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Criar Usuário

- **URL:** `/users`
- **Método:** `POST`
- **Descrição:** Cria um novo usuário.
- **Body:**

  ```json
  {
    "name": "João da Silva",
    "email": "joao@ufca.edu.br",
    "age": 30,
    "gender": "male"
  }
  ```

### Atualizar Usuário

- **URL:** `/users/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza as informações de um usuário existente.
- **Body:**

  ```json
  {
    "name": "João da Silva",
    "email": "joao@ufca.edu.br",
    "age": 30,
    "gender": "male"
  }
  ```

### Remover Usuário

- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Descrição:** Remove um usuário existente.

## Aprendizados

Durante o desenvolvimento desta atividade, os seguintes aprendizados foram adquiridos:

1. **Configuração de um projeto Node.js e Express.js:** Aprendemos a configurar um projeto utilizando Node.js e Express.js, instalando e gerenciando dependências com o npm.

2. **Criação de rotas:** Praticamos a criação de rotas para manipulação de dados, incluindo métodos HTTP como POST, PUT e DELETE.

3. **Manipulação de dados em memória:** Implementamos a persistência de dados em memória, o que envolveu a manipulação de estruturas de dados básicas do JavaScript.

4. **Teste de APIs:** Aprendemos a testar endpoints de uma API utilizando ferramentas como Postman para garantir que as rotas estavam funcionando conforme o esperado.

Este projeto proporcionou uma base sólida para o desenvolvimento de APIs mais complexas no futuro, com persistência em bancos de dados reais e outras funcionalidades avançadas.
