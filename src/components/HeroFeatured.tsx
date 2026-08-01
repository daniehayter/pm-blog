import Link from 'next/link';
import type { Post } from '@/lib/api';

export default function HeroFeatured({ post }: { post: Post }) {
  return (
    <section className="hero-featured" aria-labelledby="featured-title">
      <div className="hero-copy">
        <span className="eyebrow">Featured perspective</span>
        <p className="hero-category">{post.category}</p>
        <h1 id="featured-title" className="hero-title">{post.title}</h1>
        <p className="hero-excerpt">{post.excerpt}</p>
        <div className="hero-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/docs/${post.slug}`} className="button-link">
          Read the perspective <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="hero-monogram">PM</span>
        <span className="hero-craft-label">CRAFT</span>
      </div>
    </section>
  );
}
