import './FlightInfoCard.css';

type FlightInfoCardProps = {
  flightNumber: string;
  status: string;
  departure: string;
  arrival: string;
  gate: string;
  delayReason: string;
};

export default function FlightInfoCard({
  flightNumber,
  status,
  departure,
  arrival,
  gate,
  delayReason,
}: FlightInfoCardProps) {
  return (
    <div className="flight-card">
      <h2>{flightNumber}</h2>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Departure:</strong> {departure}</p>
      <p><strong>Arrival:</strong> {arrival}</p>
      <p><strong>Gate:</strong> {gate}</p>
      <p><strong>Reason:</strong> {delayReason}</p>
    </div>
  );
}
