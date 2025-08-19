import express from "express";

const app = express();
const PORT = 3001;

// Middleware Example
app.use((req, res, next) => {
  console.log(`📢 ${req.method} ${req.url}`);
  next(); // move to next handler
});

app.get("/", (req, res) => {
  res.send("✅ Middleware executed before this route!");
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
