// src/components/NoteList.js
import React from "react";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "15px",
        }}
      >
        {notes.map((note) => (
          <div
            key={note._id}
            style={{
              margin: "0.5rem",
              marginBottom: "1rem",
              width: "fit-content",
              padding: "0.5rem",
              height: "15rem",
              width: "20.5rem",
              border: "1px solid",
            }}
          >
            <div>
              <h3 style={{ margin: "0.5rem" }}>{note.title}</h3>
            </div>
            <div
              style={{
                height: "10rem",
                overflow: "auto",
                background: "rgb(246 245 212)",
                scrollbarWidth: "thin",
                border: "1px solid transparent",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <p style={{ margin: "0", padding: "0.5rem" }}>{note.content}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                height: "2rem",
                margin: "0.5rem 0",
              }}
            >
              <button style={{ width: "100%" }} onClick={() => onEdit(note)}>
                Edit
              </button>
              <button
                style={{ width: "100%" }}
                onClick={() => onDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
