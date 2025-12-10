import React from 'react'

function Dashboard() {
  return (
  <>
<div className="h-screen flex flex-col bg-slate-900 text-white">

      {/* HEADER */}
      <header className="w-full bg-slate-800 px-6 py-4 flex items-center justify-between shadow-lg">
        <h1 className="text-2xl font-bold">Noti Dashboard</h1>

        <div className="flex items-center gap-4 w-1/2">
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full bg-slate-700 text-white rounded-xl px-3 py-2 focus:outline-none"
          />

          <button className="bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
            New Note
          </button>
        </div>
      </header>
  </>
  )
}

export default Dashboard
