import express from "express";
import cors from "cors";

const app = express();
const PORT = 3012;

// Allow all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("🌍 CORS Enabled");
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
