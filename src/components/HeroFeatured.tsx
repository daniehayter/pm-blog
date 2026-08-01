import Link from 'next/link';

export default function HeroFeatured({ post }: any) {
  return (
    <section className="hero-featured">
      <div className="hero-content">
        <span className="hero-category">{post.category}</span>
        <h1 className="hero-title">{post.title}</h1>
        <p className="hero-excerpt">{post.excerpt}</p>
        <Link href={`/docs/${post.slug}`} className="hero-link">
          Read Article
        </Link>
      </div>
    </section>
  );
}
