import express from "express";

const app = express();
const PORT = 3006;

// Example Route
app.get("/", (req, res) => {
  throw new Error("💥 Something went wrong!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
