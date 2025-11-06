import React from 'react'

const Sidebar = ({ currentView, setCurrentView }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-500 to-blue-500 min-h-screen p-6 flex flex-col shadow-md border rounded-lg">
      <div className="mb-8">
        <p className="text-blue-100 text-sm mb-1">Dashboard</p>
        <h2 className="text-lg font-semibold text-white">Welcome Back,</h2>
        <h1 className="text-xl font-bold text-white">Divyansh Chourey</h1>
      </div>

      <div className="mb-4 space-y-2">
        <button
          onClick={() => setCurrentView('profile')}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
            currentView === 'profile'
              ? 'bg-blue-100 text-blue-900'
              : 'hover:bg-blue-700 hover:text-white text-white'
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setCurrentView('patients')}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
            currentView === 'patients'
              ? 'bg-blue-100 text-blue-900'
              : 'hover:bg-blue-700 hover:text-white text-white'
          }`}
        >
          View Patients
        </button>
      </div>
    </div>
  )
}

export default Sidebar
