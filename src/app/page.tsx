import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import Navbar from '../components/Navbar';
import HeroFeatured from '../components/HeroFeatured';
import SubscribeBanner from '../components/SubscribeBanner';
import Footer from '../components/Footer';

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="site-wrapper">
      <Navbar />

      <main id="main-content" className="main-content">
        {featuredPost && <HeroFeatured post={featuredPost} />}

        <section className="posts-section">
          <div className="section-header">
            <div>
              <span className="eyebrow">The latest</span>
              <h2 className="section-title">Notes from the product workshop</h2>
              <p className="section-subtitle">
                Frameworks, breakdowns, and honest lessons for doing better product work.
              </p>
            </div>
          </div>

          <div className="posts-grid">
            {regularPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <Link href={`/docs/${post.slug}`} className="post-card-inner">
                  <div className="card-top">
                    <span className="card-category">{post.category}</span>
                    {post.videoId && (
                      <span className="card-video-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Video
                      </span>
                    )}
                  </div>

                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="card-footer">
                    <time className="card-date" dateTime={post.date}>{post.date}</time>
                    <span className="card-read-time">{post.readTime}</span>
                  </div>
                  <span className="card-read-more">Read article <span aria-hidden="true">→</span></span>
                </Link>
              </article>
            ))}

            {posts.length === 0 && (
              <p className="no-posts">No articles found in docs directory.</p>
            )}
          </div>
        </section>

        <SubscribeBanner />
      </main>

      <Footer />
    </div>
  );
}
