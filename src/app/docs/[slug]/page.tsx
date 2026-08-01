import { getPostBySlug, getAllPosts } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="site-wrapper">
        <Navbar />
        <main className="main-content">
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
      <main className="main-content">
        <article className="post-article">
          <header className="post-header">
            <Link href="/" className="back-link">
              ← Back to posts
            </Link>
            <span className="post-category">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          {post.videoId && (
            <div className="video-container">
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${post.videoId}`}
                title="Video"
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
        </article>
      </main>
      <Footer />
    </div>
  );
}
