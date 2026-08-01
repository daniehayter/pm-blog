import Link from 'next/link';
import SignalLogo from './SignalLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="/" className="brand-link" aria-label="PM Craft home">
          <SignalLogo />
        </Link>
        <p>Practical product thinking for people who build.</p>
        <p className="footer-meta">&copy; 2026 PM Craft</p>
      </div>
    </footer>
  );
}
