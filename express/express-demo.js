import express from "express";

const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("🚀 Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
