import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../services/api.js";
import { supabase } from "../supabaseClient";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Logout action 
  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    localStorage.removeItem("user");
    navigate("/");
    setLoading(false);
  };

  // Add notes to the dashboard

    const handleAddNote = async () => {
  if (!title || !content) {
    setError("Please fill in both fields");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/notes`, {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add note");
    }

    await response.json();

    setNotes((prev) => [
  ...prev,
  { 
    title: title || "",    // fallback to empty string
    content: content || "" // fallback to empty string
  }
]);

    setTitle("");
    setContent("");
    setError("");
  } catch (err) {
    setError(err.message);
  }
};

  
  return (
    //Dashboard
  
    <div className="bg-slate-900 min-h-screen p-4 sm:p-6 text-white overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Noti Dashboard</h1>
        <button
          onClick={handleLogout}
          disabled={loading}
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-white font-semibold">
         {loading ? "Logging out..." : "Logout"}
        </button>
      </div>

      <div className="mb-4">
        <input
          className="w-full p-2 mb-2 font-bold text-white text-xl"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 border border-white text-white h-40 sm:h-60 md:h-80 bg-gray-800"
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handleAddNote}
            className="bg-indigo-600 px-4 py-2 rounded"
          >
            Add Note
          </button>
        </div>

        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>

      <div>
        {/* Display notes */}
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
