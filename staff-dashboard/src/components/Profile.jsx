import React, { useState } from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: ''
  })
  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setIsSaved(false)
  }

  const handleSave = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to save the profile
    console.log('Saving profile:', formData)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="bg-gray-100 min-h-screen -m-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-4xl">
        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Gender:
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg   bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date Of Birth:
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg   bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg  bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address:
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg  bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              className="bg-blue hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Save Profile
            </button>
            {isSaved && (
              <span className="text-green-600 font-medium">
                ✓ Profile saved successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
