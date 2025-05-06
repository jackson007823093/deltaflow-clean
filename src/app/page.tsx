import Header from '@/components/Header';
import FlightInfoCard from '@/components/FlightInfoCard';
import NearbyServicesMap from '@/components/NearbyServicesMap';
import CompensationChecker from '@/components/CompensationChecker';
import ChatbotPanel from '@/components/ChatbotPanel'; // ensure file is named exactly this

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Welcome to DeltaFlow+</h1>

        <FlightInfoCard
          flightNumber="DL 405"
          status="Delayed"
          departure="JFK - 3:30 PM"
          arrival="LAX - 6:45 PM"
          gate="B12"
          delayReason="Weather"
        />

        <CompensationChecker />
        <NearbyServicesMap />
        <ChatbotPanel />
      </main>
    </>
  );
}
