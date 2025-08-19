import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 4003;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("🚀 REST API is running...");
});

// 404 Handler (for unmatched routes)
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
