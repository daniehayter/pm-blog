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

      <main className="main-content">
        {featuredPost && <HeroFeatured post={featuredPost} />}

        <section className="posts-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Latest Breakdown &amp; Insights</h2>
              <p className="section-subtitle">
                Explore in-depth video breakdowns, frameworks, and product strategy guides.
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
                    <span className="card-date">{post.date}</span>
                    <span className="card-read-time">{post.readTime}</span>
                  </div>
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
