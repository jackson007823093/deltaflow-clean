'use client';

import React, { useState } from 'react';
import CompensationChecker from '@/components/CompensationChecker';
import FlightInfoCard from '@/components/FlightInfoCard';
import ChatbotPanel from '@/components/ChatbotPanel';

export default function Home() {
  const [flightData, setFlightData] = useState<any>(null);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>DeltaFlow+</h1>

      {/* Flight Search Input */}
      <CompensationChecker onFlightData={(data) => setFlightData(data)} />

      {/* Flight Info Display */}
      {flightData && <FlightInfoCard flightData={flightData} />}

  

      {/* Chatbot Assistant */}
      <div style={{ marginTop: '2rem' }}>
        <ChatbotPanel />
      </div>
    </main>
  );
}
