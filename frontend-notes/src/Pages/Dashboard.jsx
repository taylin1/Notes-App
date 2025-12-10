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

       {/* MAIN CONTENT LAYOUT */}
      <div className="flex flex-1 ">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-60 bg-slate-800 border-r border-slate-700 p-4">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:bg-slate-700 p-2 rounded-lg">
              All Notes
            </li>
            <li className="cursor-pointer hover:bg-slate-700 p-2 rounded-lg">
              Personal
            </li>
            <li className="cursor-pointer hover:bg-slate-700 p-2 rounded-lg">
              Work
            </li>
          </ul>
        </aside>
        </div>
      </div>
  </>
  )
}

export default Dashboard
