import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/events/${id}/`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]);

  if (!event) return <p style={{ padding: 20 }}>Loading…</p>;

  return (
    <main className="details-page">
      <div className="details-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="details-header">
          <img src={event.image} alt={event.name} className="details-image" />

          <div className="details-main">
            <h1>{event.name}</h1>
            <p className="details-date">{event.date}</p>
            <p>
              <strong>Organization:</strong> {event.organization}
            </p>
            <p>
              <strong>Venue:</strong> {event.venue}
            </p>
            <p>
              <strong>Price:</strong> ₹{event.price}
            </p>
          </div>
        </div>

        <p className="details-description">{event.description}</p>

        <button className="book-btn">Book Ticket</button>
      </div>
    </main>
  );
}
