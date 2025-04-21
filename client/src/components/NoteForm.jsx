// src/components/NoteForm.js
import React from "react";

const NoteForm = ({ form, onChange, onSubmit, isEditing }) => {
  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
      onSubmit={onSubmit}
    >
      <div style={{ padding: "2rem 2rem 2rem ", background: "#cbc6002b" }}>
        <input
          style={{
            border: "1px solid black",
            borderRadius: "0",
            padding: "0.5rem",
            margin: "0 0.5rem 0.5rem",
          }}
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={onChange}
        />
        <br />
        <textarea
          style={{
            border: "1px solid black",
            borderRadius: "0",
            padding: "0.5rem",
            margin: "0.5rem",
          }}
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={onChange}
        />
        <br />
        <button
          style={{
            margin: "0 0.5rem 0",
            width: "-webkit-fill-available",
            height: "30px",
          }}
          type="submit"
        >
          {isEditing ? "Update" : "Add"} Note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
