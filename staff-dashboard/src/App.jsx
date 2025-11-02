import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Patients from './components/Patients'
import Profile from './components/Profile'

const App = () => {
  const [currentView, setCurrentView] = useState('patients')

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 bg-gray-100 p-6">
        {currentView === 'patients' && <Patients />}
        {currentView === 'profile' && <Profile />}
      </main>
    </div>
  )
}

export default App