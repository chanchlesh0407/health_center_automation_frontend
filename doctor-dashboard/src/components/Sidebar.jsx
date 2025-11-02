import React from 'react'
import { User, Calendar, Users } from 'lucide-react'

const Sidebar = ({ activeTab, onTabClick }) => {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-500">
        <h2 className="text-xl font-semibold">Welcome Back,</h2>
        <h1 className="text-2xl font-bold">Dr. Emily Carter</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-3">
          <button
            onClick={() => onTabClick('profile')}
            className={`w-full text-left px-4 py-4 rounded-lg transition-colors flex items-center space-x-3 ${
              activeTab === 'profile' 
                ? 'bg-blue-500 text-white' 
                : 'text-blue-100 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <User size={20} />
            <span className="text-lg font-medium">Profile</span>
          </button>
          <button
            onClick={() => onTabClick('appointments')}
            className={`w-full text-left px-4 py-4 rounded-lg transition-colors flex items-center space-x-3 ${
              activeTab === 'appointments' 
                ? 'bg-blue-500 text-white' 
                : 'text-blue-100 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <Calendar size={20} />
            <span className="text-lg font-medium">Appointments Scheduled</span>
          </button>
          <button
            onClick={() => onTabClick('patients')}
            className={`w-full text-left px-4 py-4 rounded-lg transition-colors flex items-center space-x-3 ${
              activeTab === 'patients' 
                ? 'bg-blue-500 text-white' 
                : 'text-blue-100 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <Users size={20} />
            <span className="text-lg font-medium">Patient List</span>
          </button>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t border-blue-500">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">EC</span>
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Emily Carter</p>
            <p className="text-xs text-blue-200">General Practitioner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

