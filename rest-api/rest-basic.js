import express from "express";

const app = express();
const PORT = 4002;

// Middleware to parse JSON
app.use(express.json());

// Sample data (in-memory DB)
let users = [
  { id: 1, name: "Hardin", email: "hardin@example.com", age: 27 },
  { id: 2, name: "Tessa", email: "tessa@example.com", age: 25 },
];

// ✅ GET all users
app.get("/users", (res) => {
  res.json(users);
});

// ✅ GET single user by id
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

// ✅ POST new user
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { id: users.length + 1, name, email, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

// ✅ PUT (update user)
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age || user.age;
  res.json(user);
});

// ✅ DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 REST API running at http://localhost:${PORT}`);
});
