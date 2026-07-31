import Link from 'next/link';
import SignalLogo from './SignalLogo';

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand-link">
          <SignalLogo />
        </Link>

        <nav className="nav-links">
          <Link href="/" className="nav-link active">Articles &amp; Videos</Link>
          <a href="#subscribe" className="nav-link">Subscribe</a>
        </nav>

        <div className="nav-actions">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-subscribe-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </header>
  );
}
