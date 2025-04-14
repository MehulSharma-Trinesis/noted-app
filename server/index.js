import express from "express";

const app = express();
const PORT = 5000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(PORT, () => {
  console.log("server running on http://localhost:${PORT}");
});
