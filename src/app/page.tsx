'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to DeltaFlow+</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <Link href="/compensation">
            <button>Check Compensation Eligibility</button>
          </Link>

          <Link href="/services">
            <button>Nearby Services Map</button>
          </Link>

          <Link href="/chatbot">
            <button>Chatbot Assistant</button>
          </Link>
        </div>
      </main>
    </>
  );
}
