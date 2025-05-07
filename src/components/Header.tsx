'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      padding: '1rem', 
      backgroundColor: '#003366', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <h2>DeltaFlow+</h2>

      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/compensation" style={{ color: 'white', textDecoration: 'none' }}>Compensation</Link>
        <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link href="/chatbot" style={{ color: 'white', textDecoration: 'none' }}>Chatbot</Link>
      </nav>
    </header>
  );
}
