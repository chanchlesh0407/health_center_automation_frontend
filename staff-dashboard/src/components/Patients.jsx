import React, { useState } from 'react'
import CancelModal from './CancelModal'

const Patients = () => {
  const [filter, setFilter] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const patients = [
    {
      id: 1,
      time: '09:00 AM',
      name: 'Aarav Sharma',
      reason: 'Fever & Cold',
      appointmentType: 'Follow-up',
      status: 'Checked-In',
      contact: '+91 98765 43210'
    },
    {
      id: 2,
      time: '09:15 AM',
      name: 'Priya Patel',
      reason: 'Diabetes Review',
      appointmentType: 'Consultation',
      status: 'Scheduled',
      contact: '+91 87654 32109'
    },
    {
      id: 3,
      time: '09:30 AM',
      name: 'Rohan Kumar',
      reason: 'Back Pain',
      appointmentType: 'New Patient',
      status: 'Scheduled',
      contact: '+91 76543 21098'
    },
    {
      id: 4,
      time: '09:45 AM',
      name: 'Ananya Singh',
      reason: 'Pregnancy',
      appointmentType: 'Routine',
      status: 'Checked-In',
      contact: '+91 65432 10987'
    },
    {
      id: 5,
      time: '10:00 AM',
      name: 'Vikram Joshi',
      reason: 'Blood Pressure',
      appointmentType: 'Follow-up',
      status: 'In-Progress',
      contact: '+91 94321 09876'
    }
  ]

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(filter.toLowerCase()) ||
    patient.reason.toLowerCase().includes(filter.toLowerCase()) ||
    patient.appointmentType.toLowerCase().includes(filter.toLowerCase())
  )

  const handleCancelClick = (patient) => {
    setSelectedPatient(patient)
    setShowModal(true)
  }

  const handleCancelAppointment = () => {
    if (selectedPatient) {
      // Here you would typically make an API call to cancel the appointment
      console.log('Canceling appointment for:', selectedPatient.name)
      // Update the patients list to remove or update the canceled appointment
      alert(`Appointment for ${selectedPatient.name} has been canceled`)
    }
    setShowModal(false)
    setSelectedPatient(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Checked-In':
        return 'bg-green-100 text-green-800'
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'In-Progress':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Patients</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Time</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Patient Name</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Reason</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Appointment Type</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Status</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Contact</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <td className="py-3 px-4 text-gray-800">{patient.time}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">{patient.name}</td>
                <td className="py-3 px-4 text-gray-600">{patient.reason}</td>
                <td className="py-3 px-4 text-gray-600">{patient.appointmentType}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{patient.contact}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleCancelClick(patient)}
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <CancelModal
          patient={selectedPatient}
          onCancel={handleCancelAppointment}
          onGoBack={() => {
            setShowModal(false)
            setSelectedPatient(null)
          }}
        />
      )}
    </div>
  )
}

export default Patients
