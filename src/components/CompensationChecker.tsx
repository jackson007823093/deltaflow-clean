'use client';

import { useState } from 'react';
import './CompensationChecker.css';

export default function CompensationChecker() {
  const [result, setResult] = useState<string | null>(null);

  const checkCompensation = () => {
    // Placeholder logic — replace with API call later
    const eligible = Math.random() > 0.5;
    setResult(
      eligible
        ? '✅ You may be eligible for hotel, food, or ride vouchers from Delta.'
        : '❌ No compensation is available for this flight based on current policy.'
    );
  };

  return (
    <div className="compensation-checker">
      <h3>Check for Compensation</h3>
      <button onClick={checkCompensation}>Check Eligibility</button>
      {result && <p>{result}</p>}
    </div>
  );
}
