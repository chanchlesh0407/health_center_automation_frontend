// components/LoginPage.js
import React, { useState } from 'react';
import { User, Heart, Shield, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { getRoleConfig } from '../utils/roleConfig.jsx';
import { validateLoginForm } from '../utils/validation.jsx';

const LoginPage = ({ role, onBack, onRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const roleConfig = getRoleConfig(role);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateLoginForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate login success
    onLogin({
      email: formData.email,
      role: role,
      name: `${role.charAt(0).toUpperCase() + role.slice(1)} User`
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`
              bg-gradient-to-r ${roleConfig.color}
              rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white
            `}>
              {roleConfig.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {roleConfig.title}
            </h2>
            <p className="text-gray-600">
              {roleConfig.subtitle}
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`
                  w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${errors.email ? 'border-red-500' : 'border-gray-300'}
                `}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`
                    w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12
                    ${errors.password ? 'border-red-500' : 'border-gray-300'}
                  `}
                  placeholder="Enter your password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className={`
                w-full py-3 px-4 bg-gradient-to-r ${roleConfig.color}
                text-white font-medium rounded-lg hover:shadow-lg transform transition-all duration-200
                hover:scale-105 focus:ring-4 focus:ring-blue-300
              `}
            >
              Sign In
            </button>
          </div>

          {/* Register Link - Only show for patients */}
          {role === 'patient' && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={onRegister}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Register here
                </button>
              </p>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-6 text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to role selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;