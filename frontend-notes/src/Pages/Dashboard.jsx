import { useState } from "react";
import API_URL from "../services/api.js";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // Add notes to the dashboard

  const handleAddNote = async () => {
    if (!title || !content) {
      setError("Please fill in both fields");
      return;
    }

    // API to fetch notes
    try {
      const response = await fetch(`${API_URL}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      await response.json();

      setNotes((previousNotes) => {
        return [
          ...previousNotes,
          {
            title: title,
            content: content,
          },
        ];
      });

      // Reset input fields after the note has been added
      setTitle("");
      setContent("");

      // Clear any existing error messages
      setError("");

      // Catch any errors if there is
    } catch (err) {
      setError("Failed to add note:" + err);
    }
  };

  return (
    //Dashboard
  
    <div className="bg-slate-900 h-screen p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Noti Dashboard</h1>

      <div className="mb-4">
        <input
          className="w-full p-2 mb-2 font-bold text-white text-xl"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 border border-white text-white h-80 bg-gray-800"
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleAddNote}
          className="mt-2 bg-indigo-600 px-4 py-2 rounded"
        >
          Add Note
        </button>

        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>

      <div>
        <h2 className="text-xl mb-2 mt-10">My Notes</h2>

        {notes.length === 0 && <p>No notes yet</p>}

        {notes.map((note, index) => (
          <div key={index} className="bg-slate-800 p-3 mb-2 rounded">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}

      </div>
      
    </div>
  );
}

export default Dashboard;
