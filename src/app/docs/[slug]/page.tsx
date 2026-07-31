import { getPostBySlug, getAllPosts } from '../../../lib/api';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SubscribeBanner from '../../../components/SubscribeBanner';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="site-wrapper">
      <Navbar />

      <main className="post-page-main">
        <article className="post-article">
          <header className="article-header">
            <div className="article-nav">
              <Link href="/" className="back-link">
                ← Back to All Articles
              </Link>
            </div>

            <div className="article-meta">
              <span className="badge-category">{post.category}</span>
              <span className="meta-item">•</span>
              <time className="meta-item">{post.date}</time>
              <span className="meta-item">•</span>
              <span className="meta-item">{post.readTime}</span>
            </div>

            <h1 className="article-title">{post.title}</h1>
            <p className="article-lead">{post.excerpt}</p>
          </header>

          {post.videoId && (
            <div className="article-video-hero">
              <div className="video-responsive">
                <iframe
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="article-layout">
            <div className="markdown-body article-body">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </div>

            <aside className="article-sidebar">
              <div className="sidebar-card channel-widget">
                <div className="widget-header">
                  <div className="yt-icon-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Enjoying this breakdown?</h3>
                    <p>Subscribe on YouTube for weekly deep dives.</p>
                  </div>
                </div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-yt-btn"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </aside>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="related-section">
            <h3 className="related-heading">More Breakdowns &amp; Articles</h3>
            <div className="posts-grid">
              {relatedPosts.map((rPost) => (
                <article key={rPost.slug} className="post-card">
                  <Link href={`/docs/${rPost.slug}`} className="post-card-inner">
                    <div className="card-top">
                      <span className="card-category">{rPost.category}</span>
                    </div>
                    <h3 className="card-title">{rPost.title}</h3>
                    <p className="card-excerpt">{rPost.excerpt}</p>
                    <div className="card-footer">
                      <span className="card-date">{rPost.date}</span>
                      <span className="card-read-time">{rPost.readTime}</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <SubscribeBanner />
      </main>

      <Footer />
    </div>
  );
}
