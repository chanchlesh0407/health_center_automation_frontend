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
    <div className="">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b pb-3">Personal Information</h3>
        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500">Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-500">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="123, Main Street, Anytown, USA"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
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
