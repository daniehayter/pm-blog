import React from 'react';

export default function SignalLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`signal-logo-wrapper ${className}`}>
      <div className="signal-icon-glow">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="signal-svg"
        >
          <path d="M2 12h3l2.5-6 4 12 4-10 2.5 4h4" />
        </svg>
      </div>
      <div className="signal-brand-text">
        <span className="brand-primary">SIGNAL</span>
        <span className="brand-badge">MEDIA</span>
      </div>
    </div>
  );
}
