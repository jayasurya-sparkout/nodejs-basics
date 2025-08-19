import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 4003;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("🚀 REST API is running...");
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
