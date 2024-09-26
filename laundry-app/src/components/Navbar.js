import React from 'react';
import './Navbar.css';

function Navbar({ onNavigate, isLoggedIn, onLogout }) {
  return (
    <nav>
      <div className="navbar-brand">CompanyName</div>
      <ul>
        <li>
          <button onClick={() => onNavigate('home')}>Home</button>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <button onClick={() => onNavigate('login')}>Login</button>
            </li>
            <li>
              <button onClick={() => onNavigate('signup')}>Signup</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => onNavigate('laundryReminders')}>Laundry Reminders</button>
            </li>
            <li>
              <button onClick={() => onNavigate('choreManagement')}>Chore Management</button>
            </li>
            <li>
              <button onClick={() => onNavigate('laundryQueue')}>Laundry Queue</button>
            </li>
            <li>
              <button onClick={() => onNavigate('supplyTracker')}>Supply Tracker</button>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
