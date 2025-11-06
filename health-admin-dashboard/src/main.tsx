import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PatientsList from './pages/patients/PatientsList'
import PatientDetails from './pages/patients/PatientDetails'
import PatientForm from './pages/patients/PatientForm'
import AppointmentsList from './pages/appointments/AppointmentsList'
import AppointmentDetails from './pages/appointments/AppointmentDetails'
import AppointmentForm from './pages/appointments/AppointmentForm'
 

function Root() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <BrowserRouter>
      <DashboardLayout userName={'Admin'}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/patients/new" element={<PatientForm />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/patients/:id/edit" element={<PatientForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/appointments/:id" element={<AppointmentDetails />} />
          <Route path="/appointments/:id/edit" element={<AppointmentForm />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)



