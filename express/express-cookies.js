import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3009;

app.use(cookieParser());

// Set cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Hardin", { maxAge: 60000 });
  res.send("🍪 Cookie set!");
});

// Get cookie
app.get("/get-cookie", (req, res) => {
  res.send(`👤 Username cookie: ${req.cookies.username}`);
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
