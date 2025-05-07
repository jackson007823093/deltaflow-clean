// src/app/api/flight/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { flightNumber } = await req.json();

    const res = await fetch(`http://api.aviationstack.com/v1/flights?access_key=3c0087b81aa7df9367a23b872f1a35d2&flight_iata=${flightNumber}`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error('Flight API error:', err);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch flight data' }), { status: 500 });
  }
}
