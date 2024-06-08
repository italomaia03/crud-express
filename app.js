const express = require("express");
const app = express();
const port = 3030;

app.use(express.json())

// Rota principal para a página inicial
app.get("/", (req, res) => {
  // Envie uma página HTML como resposta
  res.send("<html><body><h1>Página Inicial</h1></body></html>");
});

// Rota GET para CRUD de usuários (ainda sem implementação)
app.get("/users", (req, res) => {
  // Implemente a lógica para buscar usuários
  res.status(200).json({ users: getAllUsers() });
});

// Implemente outras rotas para criar, atualizar e excluir usuários

app.post('/users', (req, res) => {

})

app.put('/users/:id', (req, res) => {

})

app.delete("/users/:id", (req, res) => {
  const identification = parseInt(req.params.id);
  const existingUser = users.find(user => user.id === identification);

  if (existingUser) {
    deleteUserById(identification);
    res.status(204).send()
  } else {
    res.status(404).send(`Usuário com ID ${identification} não encontrado.`);
  }
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

