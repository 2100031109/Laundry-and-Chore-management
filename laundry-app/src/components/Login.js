import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './Login.css'; // Import custom CSS

function Login({ onToggle, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success(`Logged in with email: ${email}`, {
        position: 'top-right', // Correct position value
      });
      onLogin();
    } else {
      toast.error('Please enter valid credentials', {
        position: 'top-right', // Correct position value
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p className="toggle-link" onClick={onToggle}>
        New user? Sign up here.
      </p>

      {/* ToastContainer to show the alert */}
      <ToastContainer />
    </div>
  );
}

export default Login;

