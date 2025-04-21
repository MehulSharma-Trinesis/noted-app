import { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("/api/notes");
    setNotes(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`/api/notes/${editId}`, form);
    } else {
      await axios.post("/api/notes", form);
    }
    setForm({ title: "", content: "" });
    setEditId(null);
    fetchNotes();
  };

  const handleEdit = (note) => {
    setForm({ title: note.title, content: note.content });
    setEditId(note._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/notes/${id}`);
    fetchNotes();
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>📝 Noted</h1>
      <NoteForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing={!!editId}
      />
      <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
