import { getPostBySlug, getAllPosts } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return post
    ? { title: post.title, description: post.excerpt }
    : { title: 'Post not found' };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="site-wrapper">
        <Navbar />
        <main id="main-content" className="main-content empty-state">
          <h1>Post not found</h1>
          <Link href="/">Back to home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content" className="main-content article-shell">
        <article className="post-article">
          <header className="post-header">
            <Link href="/" className="back-link">
              <span aria-hidden="true">←</span> Back to all articles
            </Link>
            <span className="eyebrow">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-deck">{post.excerpt}</p>
            <div className="post-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          {post.videoId && (
            <div className="video-container">
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${post.videoId}`}
                title={`Video for ${post.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="post-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
          <footer className="article-footer">
            <p>Keep exploring the craft.</p>
            <Link href="/" className="button-link button-link-secondary">
              Browse all articles <span aria-hidden="true">→</span>
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
