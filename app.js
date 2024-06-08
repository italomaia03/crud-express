const express = require("express");
const app = express();
const port = 3030;

app.use(express.json())

let users = [
  { id: 1,
    name: "João da Silva", 
    email: "joao@ufca.edu.br", 
    age: 30, 
    gender: "male",},
];

// Rota principal para a página inicial
app.get("/", (req, res) => {
  // Envie uma página HTML como resposta
  res.send("<html><body><h1>Página Inicial</h1></body></html>");
});

// Rota GET para CRUD de usuários (ainda sem implementação)
app.get("/users", (req, res) => {
  // Implemente a lógica para buscar usuários
  res.status(200).send(users);
});

app.get('/users/:id', (req, res) => {
  res.json(searchUsersForID(req.params.id));
})


// Implemente outras rotas para criar, atualizar e excluir usuários
app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).send('Usuário dacastrado com sucesso!')
})

app.put('/users/:id', (req, res) => {

})

app.delete('/user/:id', (req, res) => {

})


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



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

function searchUsersForID(id) {
  return users.filter(users => users.id == id)
}
