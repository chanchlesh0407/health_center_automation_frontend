import React from 'react'

const Sidebar = ({ currentView, setCurrentView }) => {
  return (
    <div className="w-64 bg-blue-600 min-h-screen p-6 flex flex-col shadow-lg border-r border-blue-200">
      <div className="mb-8">
        <p className="text-white text-sm mb-1">Welcome Back,</p>
        <h2 className="text-2xl font-bold text-white">Divyansh Chourey</h2>
      </div>

      <div className="mb-4">
        <p className="text-white text-sm mb-3 font-semibold">Menu</p>
        <button
          onClick={() => setCurrentView('profile')}
          className={`w-full py-3 px-4 rounded-lg text-left font-medium transition-colors duration-200 ${
            currentView === 'profile'
              ? 'bg-blue-500 text-white shadow-md'
              :  'text-white '
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setCurrentView('patients')}
          className={`w-full py-3 px-4 rounded-lg text-left font-medium transition-colors duration-200 mt-2 ${
            currentView === 'patients'
              ? 'bg-blue-500 text-white shadow-md'
              :  'text-white '
          }`}
        >
          View Patients
        </button>
      </div>
    </div>
  )
}

export default Sidebar
