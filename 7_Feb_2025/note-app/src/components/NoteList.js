import React, { useEffect, useState } from "react";
import Note from "./Note";

const NoteList = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  const updateNote = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button className="mt-2 bg-blue-500 text-white p-2 rounded" onClick={addNote}>
        Add Note
      </button>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} onUpdate={updateNote} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
