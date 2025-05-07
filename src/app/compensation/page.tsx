'use client';

import Header from '@/components/Header';
import CompensationChecker from '@/components/CompensationChecker';

export default function CompensationPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Check Compensation Eligibility</h1>
        <CompensationChecker />
      </main>
    </>
  );
}
