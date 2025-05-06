'use client';

import './NearbyServicesMap.css';

const mockServices = [
  { name: 'Marriott Hotel', type: 'hotel', lat: 33.6407, lng: -84.4277 },
  { name: 'Chick-fil-A', type: 'restaurant', lat: 33.6390, lng: -84.4290 },
  { name: 'Uber Pickup Spot', type: 'ride', lat: 33.6415, lng: -84.4260 },
];

export default function NearbyServicesMap() {
  return (
    <div className="nearby-map">
      <h3>Nearby Services</h3>
      <div className="map-container">
        <iframe
          title="Nearby Map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Atlanta+Airport`}
          allowFullScreen
        ></iframe>
      </div>

      <ul className="service-list">
        {mockServices.map((s, i) => (
          <li key={i}>
            <strong>{s.name}</strong> – {s.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
