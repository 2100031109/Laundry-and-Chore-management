import React, { useState } from 'react';
import './LaundryQueue.css';  // Import the CSS file

function LaundryQueue() {
  const [machinesAvailable, setMachinesAvailable] = useState(5);

  const handleBookMachine = () => {
    if (machinesAvailable > 0) {
      setMachinesAvailable(machinesAvailable - 1);
    }
  };

  return (
    <div className="container">
      <h2>Laundry Queue</h2>
      <p>Machines Available: {machinesAvailable}</p>
      <button className="submit-button" onClick={handleBookMachine} disabled={machinesAvailable === 0}>
        Book a Machine
      </button>
    </div>
  );
}

export default LaundryQueue;
