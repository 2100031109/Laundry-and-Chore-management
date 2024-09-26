import React, { useState, useEffect } from 'react';

function SupplyTracker() {
  const [detergent, setDetergent] = useState(3);

  useEffect(() => {
    if (detergent <= 1) {
      alert('Running low on detergent. Time to buy more!');
    }
  }, [detergent]);

  return (
    <div className="container supply-tracker">
      <h2>Supply Tracker</h2>
      <div>
        <p>Detergent: {detergent} bottles</p>
        <button onClick={() => setDetergent(detergent - 1)} disabled={detergent === 0}>
          Use Detergent
        </button>
      </div>
    </div>
  );
}

export default SupplyTracker;
