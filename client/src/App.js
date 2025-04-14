import { useEffect, useState } from "react";
import axios from "axios";

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
    setEditId(note.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/notes/${id}`);
    fetchNotes();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Noted</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{editId ? "Update" : "Add"} Note</button>
      </form>

      <hr />

      {notes.map((note) => (
        <div key={note.id} style={{ marginBottom: 16 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleEdit(note)}>Edit</button>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
