import Link from 'next/link';
import SignalLogo from './SignalLogo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="brand-link" aria-label="PM Craft home">
          <SignalLogo />
        </Link>
        <nav className="nav-actions" aria-label="Primary navigation">
          <Link href="/" className="nav-link">Articles</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
