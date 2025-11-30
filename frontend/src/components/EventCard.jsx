import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image-wrapper">
        <img src={event.image} alt={event.name} className="event-image" />
      </div>

      <div className="event-info">
        <h3>{event.name}</h3>
        <p className="event-date">{event.date}</p>

        <Link to={`/events/${event.id}`}>
          <button className="details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}
