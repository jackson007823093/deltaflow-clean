'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const categoryTags = {
  Hotels: 'tourism=hotel',
  Restaurants: 'amenity=restaurant',
  Airports: 'aeroway=aerodrome',
  'Gas Stations': 'amenity=fuel',
};

const NearbyServicesMap = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [places, setPlaces] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Hotels');
  const [radius, setRadius] = useState(1000); // in meters
  const [searchQuery, setSearchQuery] = useState('');

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [25, 25],
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  useEffect(() => {
    if (!position) return;

    const fetchPlaces = async () => {
      const [lat, lon] = position;
      const tag = categoryTags[selectedCategory as keyof typeof categoryTags];
      const query = `
        [out:json];
        (
          node[${tag}](around:${radius},${lat},${lon});
          way[${tag}](around:${radius},${lat},${lon});
          relation[${tag}](around:${radius},${lat},${lon});
        );
        out center;
      `;

      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: query,
      });

      const data = await response.json();
      const elements = data.elements.map((el: any) => ({
        id: el.id,
        lat: el.lat || el.center?.lat,
        lon: el.lon || el.center?.lon,
        name: el.tags?.name || 'Unnamed',
      }));

      setPlaces(elements);
    };

    fetchPlaces();
  }, [position, selectedCategory, radius]);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ height: '500px', marginTop: '2rem' }}>
      <h2>Nearby Services Map</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>Category: </label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {Object.keys(categoryTags).map((key) => (
            <option key={key}>{key}</option>
          ))}
        </select>
        <label style={{ marginLeft: '1rem' }}>Radius (m): </label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          style={{ width: '80px' }}
        />
        <label style={{ marginLeft: '1rem' }}>Search: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search places"
        />
      </div>

      {position && (
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {filteredPlaces.map((place, index) => (
            <Marker
              key={index}
              position={[place.lat, place.lon]}
              icon={customIcon}
            >
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default NearbyServicesMap;
