'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';

const NearbyServicesMap = dynamic(() => import('@/components/NearbyServicesMap'), {
  ssr: false, // Disable SSR for this component
});

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
