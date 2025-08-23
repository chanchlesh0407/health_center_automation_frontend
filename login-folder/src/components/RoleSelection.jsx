// components/RoleSelection.js
import React from 'react';
import { User, Heart, Shield } from 'lucide-react';

const RoleSelection = ({ onRoleSelect }) => {
  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Access patient records, manage appointments, and provide medical care',
      icon: <User className="w-12 h-12" />,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 'patient',
      title: 'Patient',
      description: 'View your medical records, book appointments, and manage your health',
      icon: <Heart className="w-12 h-12" />,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      id: 'staff',
      title: 'Staff Member',
      description: 'Manage hospital operations, schedules, and administrative tasks',
      icon: <Shield className="w-12 h-12" />,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            HealthCare Management System
          </h1>
          <p className="text-xl text-gray-600">
            Select your role to access the appropriate portal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => onRoleSelect('login', role.id)}
              className={`
                bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-gray-200
              `}
            >
              <div className={`
                bg-gradient-to-r ${role.color} ${role.hoverColor}
                rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6
                text-white transition-all duration-300
              `}>
                {role.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {role.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {role.description}
              </p>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  Click to continue
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;