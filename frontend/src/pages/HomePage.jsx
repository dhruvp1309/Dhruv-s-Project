import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard.jsx";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events/")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to Event Booking Platform</h1>
        <p>Book concerts, parties, tech events, workshops &amp; more</p>
      </section>

      <section id="events" className="events-section">
        <h2 className="section-title">Popular Events</h2>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-text">
          For partnership or bulk bookings, mail us at{" "}
          <span>support@eventbooking.com</span>
        </p>
      </section>
    </main>
  );
}
