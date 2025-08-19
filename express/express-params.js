import express from "express";

const app = express();
const PORT = 3007;

// Route Params
app.get("/products/:id", (req, res) => {
  res.send(`🛒 Product ID: ${req.params.id}`);
});

// Query Params
app.get("/search", (req, res) => {
  const { q, category } = req.query;
  res.send(`🔍 Search: ${q}, Category: ${category}`);
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
