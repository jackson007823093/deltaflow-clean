import React from 'react';

interface FlightInfoCardProps {
  flightData: any; // Adjust the type based on the structure of flightData
}

const FlightInfoCard: React.FC<FlightInfoCardProps> = ({ flightData }) => {
  return (
    <div>
      <h2>Flight Information</h2>
      {/* Render flight data here */}
      <pre>{JSON.stringify(flightData, null, 2)}</pre>
    </div>
  );
};

export default FlightInfoCard;
