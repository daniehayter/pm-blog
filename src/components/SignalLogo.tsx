export default function SignalLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`brand ${className}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="img">
          <path d="M8 29V11h10.4c5.2 0 8.6 2.8 8.6 7.2 0 4.5-3.4 7.3-8.6 7.3h-4.1V29H8Z" />
          <path d="M14.3 16.2v4.2h3.8c1.7 0 2.7-.8 2.7-2.1 0-1.4-1-2.1-2.7-2.1h-3.8Z" className="brand-mark-cutout" />
          <path d="M27.5 25.5 32 30l-4.5 4.5M32 30H21" className="brand-mark-arrow" />
        </svg>
      </span>
      <span className="brand-name">PM Craft</span>
    </span>
  );
}
