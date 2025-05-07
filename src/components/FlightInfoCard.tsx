import React from 'react';

interface FlightInfoCardProps {
  flightNumber: string;
  status: string;
  departure: string;
  arrival: string;
  gate: string;
  delayReason: string;
}

const FlightInfoCard: React.FC<FlightInfoCardProps> = ({
  flightNumber,
  status,
  departure,
  arrival,
  gate,
  delayReason,
}) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '600px'
    }}>
      <h2>Flight Info: {flightNumber}</h2>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Departure:</strong> {departure}</p>
      <p><strong>Arrival:</strong> {arrival}</p>
      <p><strong>Gate:</strong> {gate}</p>
      <p><strong>Delay Reason:</strong> {delayReason}</p>
    </div>
  );
};

export default FlightInfoCard;
