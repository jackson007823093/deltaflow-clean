import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const flightNumber = searchParams.get('flightNumber');
  const apiKey = '3c0087b81aa7df9367a23b872f1a35d2';

  if (!flightNumber) {
    return new Response(JSON.stringify({ error: 'Missing flight number' }), { status: 400 });
  }

  const url = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch flight data' }), { status: 500 });
  }
}
