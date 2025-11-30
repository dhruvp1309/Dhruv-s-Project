import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">EventBooking</div>

      <nav className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>
    </header>
  );
}
