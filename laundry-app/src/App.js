import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import LaundryReminders from './components/LaundryReminders';
import ChoreManagement from './components/ChoreManagement';
import LaundryQueue from './components/LaundryQueue';
import SupplyTracker from './components/SupplyTracker';

function App() {
  // State for authentication and active view
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  // Handle navigation from Navbar
  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  // Handle login/signup
  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveComponent('home'); // Navigate to Home or Dashboard after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveComponent('home'); // Navigate back to Home on logout
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar onNavigate={handleNavigation} isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Main content area */}
      <div style={{ padding: '2rem', marginTop: '4rem' }}> {/* Adjust margin to compensate for fixed navbar */}
        {/* Conditional rendering based on the active component */}
        {activeComponent === 'home' && <h2>Welcome to the Laundry & Chore Scheduler App</h2>}
        {activeComponent === 'login' && <Login onLogin={handleLogin} />}
        {activeComponent === 'signup' && <Signup onRegister={handleLogin} />}

        {/* Features accessible after login */}
        {isLoggedIn && activeComponent === 'laundryReminders' && <LaundryReminders />}
        {isLoggedIn && activeComponent === 'choreManagement' && <ChoreManagement />}
        {isLoggedIn && activeComponent === 'laundryQueue' && <LaundryQueue />}
        {isLoggedIn && activeComponent === 'supplyTracker' && <SupplyTracker />}
      </div>
    </div>
  );
}

export default App;
