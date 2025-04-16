let notes = [];

exports.getNotes = (req, res) => {
  res.json(notes);
};

exports.createNote = (req, res) => {
  const note = { id: Date.now(), ...req.body };
  notes.push(note);
  res.status(201).json(note);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((note) => note.id == id);
  if (index === -1) return res.status(404).json({ message: "Note not found" });
  notes[index] = { ...notes[index], ...req.body };
  res.json(notes[index]);
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id != id);
  res.json({ message: "Note deleted" });
};
