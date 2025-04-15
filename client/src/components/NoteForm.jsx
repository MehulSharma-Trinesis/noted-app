// src/components/NoteForm.js
import React from "react";

const NoteForm = ({ form, onChange, onSubmit, isEditing }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={onChange}
      />
      <br />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={onChange}
      />
      <br />
      <button type="submit">{isEditing ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;
