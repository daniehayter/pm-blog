import Link from 'next/link';
import SignalLogo from './SignalLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="/" className="brand-link" aria-label="PM Signal home">
          <SignalLogo />
        </Link>
        <p>Videos and articles about product management.</p>
        <p className="footer-meta">&copy; 2026 PM Signal</p>
      </div>
    </footer>
  );
}
