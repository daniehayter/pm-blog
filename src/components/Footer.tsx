import Link from 'next/link';
import SignalLogo from './SignalLogo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <SignalLogo />
          <p className="footer-tagline">
            Decoding tech product strategy, frameworks, and insights for builders.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Latest Articles</Link></li>
            <li><a href="#subscribe">Newsletter</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Channel Ecosystem</h4>
          <ul>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Signal Media. All rights reserved.</p>
          <div className="footer-privacy">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
