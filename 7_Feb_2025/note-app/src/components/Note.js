import React, { useState } from "react";

const Note = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleUpdate = () => {
    onUpdate(note.id, text);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {isEditing ? (
        <textarea
          className="w-full p-2 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p>{note.text}</p>
      )}
      <div className="flex justify-between mt-2">
        {isEditing ? (
          <button className="bg-green-500 text-white p-2 rounded" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="bg-red-500 text-white p-2 rounded" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
