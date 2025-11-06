import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Patients from './components/Patients'
import Profile from './components/Profile'

const App = () => {
  const [currentView, setCurrentView] = useState('patients')

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-50 to-white">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 p-10 overflow-auto">
        {currentView === 'patients' && <div className="max-w-5xl mx-auto"><Patients /></div>}
        {currentView === 'profile' && <div className="max-w-5xl mx-auto"><Profile /></div>}
      </main>
    </div>
  )
}

export default App