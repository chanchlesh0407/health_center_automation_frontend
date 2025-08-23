// App.js - Main Application Component
import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection.jsx';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('role-selection');
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Navigation function
  const navigateTo = (page, role = null) => {
    setCurrentPage(page);
    if (role) setSelectedRole(role);
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSelectedRole(null);
    setCurrentPage('role-selection');
  };

  // Login success handler
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  // Register success handler
  const handleRegisterSuccess = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  // Render current page based on state
  const renderCurrentPage = () => {
    if (isLoggedIn) {
      return <Dashboard user={currentUser} onLogout={handleLogout} />;
    }

    switch (currentPage) {
      case 'role-selection':
        return <RoleSelection onRoleSelect={navigateTo} />;
      case 'login':
        return (
          <LoginPage
            role={selectedRole}
            onBack={() => navigateTo('role-selection')}
            onRegister={() => navigateTo('register')}
            onLogin={handleLoginSuccess}
          />
        );
      case 'register':
        return (
          <RegisterPage
            role={selectedRole}
            onBack={() => navigateTo('login')}
            onRegister={handleRegisterSuccess}
            onRoleSelection={() => navigateTo('role-selection')}
          />
        );
      default:
        return <RoleSelection onRoleSelect={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {renderCurrentPage()}
    </div>
  );
};

export default App; 