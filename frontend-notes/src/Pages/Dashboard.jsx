import { useEffect, useState } from "react";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleAddNote = async () => {
    if (!text.trim()) return;

    const res = await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: text })
    });

    const newNote = await res.json();
    setNotes([...notes, newNote[0]]);
    setText("");
  };

  return (
    <div className="p-6 bg-slate-800 h-screen">
      <h1 className="text-2xl mb-4 font-bold text-white">My Notes</h1>

      <textarea
        className="border w-full h-120 bg-gray-600 p-2 mb-3"
        placeholder="Write your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAddNote}
        className="bg-indigo-600 text-white p-2 rounded"
      >
        Add Note
      </button>

      <ul className="mt-6">
        {notes.map((note) => (
          <li key={note.id} className="border p-3 mb-2 rounded">
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
