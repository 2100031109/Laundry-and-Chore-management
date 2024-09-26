import React, { useState } from 'react';
import './LaundryReminders.css'; // Import CSS for styles

function LaundryReminders() {
  const [laundryDay, setLaundryDay] = useState('');
  const [reminderSet, setReminderSet] = useState(false);

  const handleSetReminder = (e) => {
    e.preventDefault();
    setReminderSet(true);
    alert(`Reminder set for ${laundryDay}!`);
  };

  return (
    <div className="reminders-container">
      <h2>Laundry Reminders</h2>
      <form onSubmit={handleSetReminder} className="reminders-form">
        <div className="form-group">
          <label>Set Laundry Day:</label>
          <input 
            type="date" 
            value={laundryDay} 
            onChange={(e) => setLaundryDay(e.target.value)} 
            required 
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Set Reminder</button>
      </form>
      {reminderSet && <p className="reminder-message">Reminder set for: {laundryDay}</p>}
    </div>
  );
}

export default LaundryReminders;
