// src/pages/RegisterPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join EventBooking to explore events.</p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Register button clicked (backend will be added later).");
          }}
        >
          <label>
            Full Name
            <input type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" required />
          </label>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
