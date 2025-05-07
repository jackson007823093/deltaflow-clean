'use client';

import { useState } from 'react';

export default function CompensationChecker() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightData, setFlightData] = useState<any>(null);
  const [error, setError] = useState('');

  const API_KEY = '3c0087b81aa7df9367a23b872f1a35d2';

  const checkEligibility = async () => {
    setError('');
    setFlightData(null);

    try {
      const response = await fetch(
        `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`
      );
      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        setError('No flight data found.');
        return;
      }

      const flight = data.data[0];

      const isEligible =
        flight.flight_status === 'cancelled' ||
        (flight.departure?.delay || 0) > 180;

      setFlightData({
        airline: flight.airline.name,
        flight_number: flight.flight.iata,
        departure: flight.departure.airport,
        arrival: flight.arrival.airport,
        terminal: flight.departure.terminal,
        gate: flight.departure.gate,
        delay: flight.departure.delay,
        status: flight.flight_status,
        isEligible,
      });
    } catch (err) {
      setError('Failed to fetch flight data.');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Check Compensation Eligibility</h2>
      <input
        type="text"
        placeholder="Enter flight number (e.g. DL405)"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={checkEligibility} style={{ padding: '0.5rem 1rem' }}>
        Check
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {flightData && (
        <div style={{ marginTop: '1rem', background: '#f2f2f2', padding: '1rem', borderRadius: '8px' }}>
          <p><strong>Airline:</strong> {flightData.airline}</p>
          <p><strong>Flight Number:</strong> {flightData.flight_number}</p>
          <p><strong>From:</strong> {flightData.departure}</p>
          <p><strong>To:</strong> {flightData.arrival}</p>
          <p><strong>Status:</strong> {flightData.status}</p>
          <p><strong>Delay:</strong> {flightData.delay || 0} minutes</p>
          <p><strong>Terminal:</strong> {flightData.terminal}</p>
          <p><strong>Gate:</strong> {flightData.gate}</p>
          <p style={{ color: flightData.isEligible ? 'green' : 'orange' }}>
            {flightData.isEligible
              ? '✅ Eligible for compensation.'
              : '⚠️ Not eligible for compensation.'}
          </p>
        </div>
      )}
    </div>
  );
}
