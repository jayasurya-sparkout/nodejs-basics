import express from "express";
import path from "path";

const app = express();
const PORT = 3003;

// Serve JSON
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello JSON!",
    status: "✅ Working"
  });
});

// Serve static files (public folder)
const __dirname = process.cwd();
app.use(express.static(path.join(__dirname, "express", "public")));

// Example: visit http://localhost:3003/hello.txt (create file in /express/public)

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
