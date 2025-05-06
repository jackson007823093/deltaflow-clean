'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#003366',
      color: 'white',
    }}>
      <Image
        src="/images/delta-logo.png.png"
        alt="Delta Air Lines Logo"
        width={150}
        height={50}
        priority
      />
      <h1 style={{
        marginLeft: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        DeltaFlow+
      </h1>
    </header>
  );
}
