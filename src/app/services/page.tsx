'use client';

import Header from '@/components/Header';
import NearbyServicesMap from '@/components/NearbyServicesMap';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Nearby Services Map</h1>
        <NearbyServicesMap />
      </main>
    </>
  );
}
