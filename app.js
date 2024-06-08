const express = require("express");
const app = express();
const port = 3030;

// Rota principal para a página inicial
app.get("/", (req, res) => {
  // Envie uma página HTML como resposta
  res.send("<html><body><h1>Página Inicial</h1></body></html>");
});

// Rota GET para CRUD de usuários (ainda sem implementação)
app.get("/users", (req, res) => {
  // Implemente a lógica para buscar usuários
  res.send("Lista de Usuários");
});

// Implemente outras rotas para criar, atualizar e excluir usuários
app.post("/users", (req, res) =>{

})

app.put("/users", (req, res) =>{
  
})

app.delete("/users", (req, res) =>{
  
})



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

let users = [
  {
    id: 1,
    name: "João da Silva",
    email: "joao@ufca.edu.br",
    age: 30,
    gender: "male",
  },
];

const getAllUsers = () => users;

const createUser = (newUser) => users.push(newUser);

const updateUserById = (userId, newUser) => {
  const user = users.find((user) => user.id === userId);
  if (user) {
    Object.assign(user, newUser);
  }
};

const deleteUserById = (userId) => {
  users = users.filter((user) => user.id !== userId);
};