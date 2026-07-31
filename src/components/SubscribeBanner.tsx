'use client';

import React from 'react';

export default function SubscribeBanner() {
  return (
    <section id="subscribe" className="subscribe-banner">
      <div className="subscribe-glow"></div>
      <div className="subscribe-content">
        <div className="subscribe-badge">YOUTUBE &amp; NEWSLETTER</div>
        <h2>Never Miss a Signal</h2>
        <p>
          Deep dives on tech strategy, product breakdowns, and industry frameworks delivered weekly.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="subscribe-input"
            required
          />
          <button type="submit" className="subscribe-btn">
            Join the Signal
          </button>
        </form>

        <div className="subscribe-meta">
          <span>⚡ Weekly Episodes</span>
          <span>•</span>
          <span>🎯 No Spam</span>
          <span>•</span>
          <span>🔥 High Impact Insights</span>
        </div>
      </div>
    </section>
  );
}
