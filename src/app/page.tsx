'use client';

import Header from '@/components/Header';
import ChatbotPanel from '@/components/ChatbotPanel';
import FlightInfoCard from '@/components/FlightInfoCard';
import NearbyServicesMap from '@/components/NearbyServicesMap';
import CompensationChecker from '@/components/CompensationChecker';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to DeltaFlow+</h1>

        {/* Static flight info card (optional demo info) */}
        <FlightInfoCard
          flightNumber="DL405"
          status="Delayed"
          departure="JFK - 3:30 PM"
          arrival="LAX - 6:45 PM"
          gate="B12"
          delayReason="Weather"
        />

        {/* Live nearby services map with filters */}
        <NearbyServicesMap />

        {/* Flight compensation checker */}
        <CompensationChecker />

        {/* Chatbot assistant */}
        <ChatbotPanel />
      </main>
    </>
  );
}
