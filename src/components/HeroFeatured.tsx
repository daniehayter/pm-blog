import Link from 'next/link';
import type { Post } from '@/lib/api';

export default function HeroFeatured({ post }: { post: Post }) {
  return (
    <section className="hero-featured" aria-labelledby="featured-title">
      <div className="hero-copy">
        <span className="eyebrow">Product management videos and articles</span>
        <p className="hero-category">{post.category}</p>
        <h1 id="featured-title" className="hero-title">{post.title}</h1>
        <p className="hero-excerpt">{post.excerpt}</p>
        <div className="hero-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/docs/${post.slug}`} className="button-link">
          Read the introduction <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <span className="signal-wave signal-wave-one" />
        <span className="signal-wave signal-wave-two" />
        <span className="hero-monogram">PS</span>
        <span className="hero-craft-label">PM SIGNAL</span>
      </div>
    </section>
  );
}
