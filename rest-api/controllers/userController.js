import Users from "../data/users.js";   // 👈 with .js

// Get all users
export const getAllUsers = (req, res) => {
  res.json(Users);
};

// Get User by ID
export const getUserById = (req, res) => {
  const user = Users.find((user) => user.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

// Create new user
export const createUser = (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { id: Users.length + 1, name, email, age };
  Users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
export const updateUser = (req, res) => {
  const user = Users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age || user.age;
  res.json(user);
};

// Delete user
export const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = Users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  Users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
};
