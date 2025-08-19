import express from "express";

const app = express();
const PORT = 3005;

// Create Router
const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("👥 All Users"));
userRouter.get("/:id", (req, res) => res.send(`👤 User ID: ${req.params.id}`));

// Use Router
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
