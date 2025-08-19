import express from "express";

const app = express();
const PORT = 3004;

// Middleware to parse JSON & URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST JSON
app.post("/api/json", (req, res) => {
  res.json({
    received: req.body,
    message: "✅ JSON Data Received"
  });
});

// POST Form Data
app.post("/api/form", (req, res) => {
  res.json({
    received: req.body,
    message: "✅ Form Data Received"
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
