export default function SignalLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`brand ${className}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="img">
          <path d="M5 22h5l3-8 5 16 5-20 4 12h8" className="brand-signal-line" />
          <circle cx="35" cy="22" r="2.5" />
        </svg>
      </span>
      <span className="brand-name">PM <strong>Signal</strong></span>
    </span>
  );
}
