import express from "express";
import cors from "cors";
import pkg from "body-parser";

const { json } = pkg;
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// In-memory store
let notes = [];
let id = 1;

// Routes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: id++, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = notes.find((n) => n.id == id);
  if (!note) return res.status(404).json({ error: "Note not found" });

  note.title = title;
  note.content = content;
  res.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  notes = notes.filter((n) => n.id != id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
