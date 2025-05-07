'use client';

import Header from '@/components/Header';
import dynamic from 'next/dynamic';

// ⛔ Prevent SSR on NearbyServicesMap to fix the window error
const NearbyServicesMap = dynamic(() => import('@/components/NearbyServicesMap'), {
  ssr: false,
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
