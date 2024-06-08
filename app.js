const express = require("express");
const z = require("zod");
const app = express();
const port = 3030;

app.use(express.json());

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

// Rota de criação com método POST
app.post("/users", (req, res) => {
  const dados = req.body;

  try {
    validarNovoUsuario(dados);
    createUser(dados);
    res.status(201).json({ ...dados });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

const userSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().nonnegative(),
  gender: z.string(),
});

function validarNovoUsuario(dados) {
  if (!dados) {
    throw new Error("Os dados do usuário não podem ser nulos");
  }

  const eValido = userSchema.safeParse(dados);

  if (!eValido.success) {
    throw new Error(
      eValido.error.issues.map((issue) => {
        const campo = issue.path[0];
        const message = issue.message;
        return `${campo}: ${message}\n`;
      })
    );
  }

  const eRepetido = users.find((user) => user.id === dados.id);

  if (eRepetido) {
    throw new Error(`Id inválido`);
  }
}
