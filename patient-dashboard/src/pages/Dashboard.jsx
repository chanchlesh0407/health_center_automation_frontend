


import { useState } from "react";
import { User, Calendar, FileText, Menu, X } from "lucide-react";
import Appointment from "../components/Appointment";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Profile");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    dateOfBirth: "",
    bloodGroup: "",
    height: "",
    weight: "",
    bloodPressure: "",
    allergies: "",
    pastDisease: "",
    familyHistory: "",
    chronicDiseases: "",
  });

  const menuItems = [
    { id: "Profile", label: "Profile", icon: User },
    { id: "Appointment", label: "Appointment", icon: Calendar },
    { id: "Records", label: "Records", icon: FileText },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    alert("Profile saved successfully!");
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-blue-500 to-blue-500 text-white p-6 transition-all duration-300 shadow-md border rounded-lg${
          isSidebarExpanded ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          {isSidebarExpanded && (
            <div>
              <p className="text-blue-100 text-sm mb-1">Dashboard</p>
              <h2 className="text-lg font-semibold">Welcome Back,</h2>
              <h1 className="text-xl font-bold">Divyansh Chourey</h1>
            </div>
          )}
          <button
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className={`p-2 hover:bg-blue-700 rounded-lg transition-colors ${
              isSidebarExpanded ? "" : "mx-auto"
            }`}
          >
            {isSidebarExpanded ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
                  activeMenu === item.id
                    ? "bg-blue-100 text-blue-900"
                    : "hover:bg-blue-700 hover:text-white"
                }`}
                title={!isSidebarExpanded ? item.label : ""}
              >
                <Icon size={20} />
                {isSidebarExpanded && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-auto">
        {activeMenu === "Profile" && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Personal Info */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b pb-3">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-500">Email</label>
                  <p className="mt-1 text-gray-800 font-medium p-3 rounded-lg bg-blue-50">
                    divyanshchourey@gmail.com
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">
                    Phone Number
                  </label>
                  <p className="mt-1 text-gray-800 font-medium p-3 rounded-lg bg-blue-50">
                    +91 9876543210
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Gender</label>
                  <p className="mt-1 text-gray-800 font-medium p-3 rounded-lg bg-blue-50">
                    Male
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Address</label>
                  <p className="mt-1 text-gray-800 font-medium p-3 rounded-lg bg-blue-50">
                    123, Main Street, Anytown, USA
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">DOB</label>
                  <p className="mt-1 text-gray-800 font-medium p-3 rounded-lg bg-blue-50">
                    20/05/2000
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Info */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-6 border-b pb-3">
                Medical Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-500">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Height</label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="cm"
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="kg"
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">
                    Blood Pressure
                  </label>
                  <input
                    type="text"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                    placeholder="high/low"
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Allergies</label>
                  <input
                    type="text"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">
                    Past Disease
                  </label>
                  <input
                    type="text"
                    name="pastDisease"
                    value={formData.pastDisease}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">
                    Sugar Level
                  </label>
                  <input
                    type="text"
                    name="sugarLevel"
                    value={formData.sugarLevel}
                    onChange={handleChange}
                    placeholder="high/low"
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500">
                    Family History
                  </label>
                  <input
                    type="text"
                    name="familyHistory"
                    value={formData.familyHistory}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-500">
                    Chronic Diseases
                  </label>
                  <input
                    type="text"
                    name="chronicDiseases"
                    value={formData.chronicDiseases}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Appointment Section */}
        {activeMenu === "Appointment" && (
          <div className="max-w-5xl mx-auto">
            <Appointment />
          </div>
        )}

        {/* Records Section */}
        {activeMenu === "Records" && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-700">
                <FileText size={26} /> Medical Records
              </h2>
              <div className="text-center py-16 text-gray-500">
                <FileText size={64} className="mx-auto mb-4 text-gray-300" />
                <p className="text-lg">No medical records available</p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Upload Records
                </button>
              </div>
            </div>
          </div>
        )}




   

      </div>
    </div>
  );
}
