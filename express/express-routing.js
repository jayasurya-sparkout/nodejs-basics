import express from "express";

const app = express();
const PORT = 3002;

// Routing Example
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Express Routing Example!");
});

app.get("/about", (req, res) => {
  res.send("ℹ️ This is the About page.");
});

// Route params
app.get("/user/:name", (req, res) => {
  res.send(`👋 Hello, ${req.params.name}`);
});

// Query params
app.get("/search", (req, res) => {
  res.send(`🔍 You searched for: ${req.query.q}`);
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
