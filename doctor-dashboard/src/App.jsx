import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import AppointmentsList from './components/AppointmentsList'
import PatientDetailsModal from './components/PatientDetailsModal'
import { appointments } from './utils/constants'

const App = () => {
  const [activeTab, setActiveTab] = useState('appointments')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  
  // Profile form state
  const [profileData, setProfileData] = useState({
    email: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    qualification: '',
    registrationNumber: '',
    clinicAddress: '',
    aadharNumber: '',
    accountNumber: '',
    specialization: '',
    yearsExperience: '',
    availabilitySchedule: '',
    panNumber: ''
  })

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const saveProfile = () => {
    console.log('Saving profile data:', profileData)
    alert('Profile saved successfully!')
    // In a real app, you would save this to a backend API
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation Sidebar */}
      <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
          {activeTab === 'profile' ? (
            <Profile
              profileData={profileData}
              onProfileChange={handleProfileChange}
              onSave={saveProfile}
            />
          ) : (
            <AppointmentsList
              appointments={appointments}
              onPatientSelect={setSelectedPatient}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          )}
        </div>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  )
}

export default App
