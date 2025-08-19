import express from "express";
import session from "express-session";

const app = express();
const PORT = 3010;

app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`👀 Views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send("Welcome! Refresh to increase views.");
  }
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
