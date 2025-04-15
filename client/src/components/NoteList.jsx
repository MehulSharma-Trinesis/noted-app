// src/components/NoteList.js
import React from "react";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      <hr />
      {notes.map((note) => (
        <div key={note.id} style={{ marginBottom: 16 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
