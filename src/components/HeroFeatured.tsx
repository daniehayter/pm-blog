import Link from 'next/link';
import { Post } from '../lib/api';

export default function HeroFeatured({ post }: { post?: Post }) {
  if (!post) return null;

  return (
    <section className="hero-featured">
      <div className="hero-backdrop"></div>
      <div className="hero-content">
        <div className="hero-meta">
          <span className="badge-live">
            <span className="pulse-dot"></span> FEATURED EPISODE
          </span>
          <span className="badge-category">{post.category}</span>
          <span className="hero-date">{post.date}</span>
        </div>

        <h1 className="hero-title">{post.title}</h1>
        <p className="hero-excerpt">{post.excerpt}</p>

        <div className="hero-actions">
          <Link href={`/docs/${post.slug}`} className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch &amp; Read</span>
          </Link>
          <span className="read-time-pill">{post.readTime}</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="video-card-preview">
          {post.videoId ? (
            <div className="preview-iframe-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${post.videoId}?autoplay=0&muted=1`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="preview-placeholder">
              <div className="preview-play-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
