import React, { useState } from 'react';
import './ChoreManagement.css'; // Import CSS for styles

function ChoreManagement() {
  const [chore, setChore] = useState('');
  const [chores, setChores] = useState([]);

  const handleAddChore = (e) => {
    e.preventDefault();
    setChores([...chores, chore]);
    setChore('');
  };

  return (
    <div className="chore-container">
      <h2>Chore Management</h2>
      <form onSubmit={handleAddChore} className="chore-form">
        <div className="form-group">
          <label>Enter a Chore:</label>
          <input 
            type="text" 
            value={chore} 
            onChange={(e) => setChore(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Add Chore</button>
      </form>

      <ul className="chore-list">
        {chores.map((choreItem, index) => (
          <li key={index} className="chore-item">{choreItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChoreManagement;
