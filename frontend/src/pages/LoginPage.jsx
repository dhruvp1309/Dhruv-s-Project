// src/pages/LoginPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign In</h2>
        <p className="auth-subtitle">Welcome back! Login to continue.</p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login button clicked (backend will be added later).");
          }}
        >
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="auth-link">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
