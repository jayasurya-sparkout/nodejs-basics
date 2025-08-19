import express from "express";

const app = express();
const PORT = 3008;

// Custom Logger Middleware
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("🏠 Home Page");
});

app.get("/about", (req, res) => {
  res.send("ℹ️ About Page");
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
