// src/app/api/nearby/route.ts

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
  
    if (!lat || !lon) {
      return new Response(JSON.stringify({ error: 'Missing coordinates' }), { status: 400 });
    }
  
    const overpassQuery = `
      [out:json];
      (
        node["amenity"](around:1000,${lat},${lon});
      );
      out body;
    `;
  
    try {
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: overpassQuery,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch nearby services');
      }
  
      const data = await response.json();
      const places = data.elements.map((el: any) => ({
        id: el.id,
        name: el.tags?.name || el.tags?.amenity || 'Unnamed',
        type: el.tags?.amenity || 'Unknown',
        lat: el.lat,
        lon: el.lon,
      }));
  
      return new Response(JSON.stringify({ places }), { status: 200 });
    } catch (error) {
      console.error('Overpass API error:', error);
      return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
  }
  