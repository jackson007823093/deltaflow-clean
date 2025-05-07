'use client';

import React, { useState } from 'react';

interface CompensationCheckerProps {
  onFlightData: (data: any) => void;
}

const CompensationChecker: React.FC<CompensationCheckerProps> = ({ onFlightData }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!flightNumber.trim()) {
      setError('Please enter a flight number.');
      return;
    }

    try {
      const res = await fetch(`/api/flight?flight=${flightNumber}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setError('');
      onFlightData(data); // Send the flight data back to parent component
    } catch (err) {
      console.error('Flight lookup error:', err);
      setError('Failed to fetch flight info.');
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter flight number (e.g., DL1234)"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleSearch} style={{ padding: '0.5rem' }}>
        Search
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CompensationChecker;
