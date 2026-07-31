import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export interface Post {
  slug: string;
  title: string;
  content: string;
  date: string;
  category?: string;
  videoId?: string;
  excerpt?: string;
  readTime?: string;
  coverImage?: string;
  featured?: boolean;
}

export function getPostSlugs() {
  if (!fs.existsSync(docsDirectory)) return [];
  return fs.readdirSync(docsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Calculate estimated read time if not provided
  const wordCount = content.split(/\s+/).length;
  const computedReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Fallbacks for required fields
  const title = data.title || realSlug;
  const date = data.date || '2026-08-01';

  return {
    slug: realSlug,
    title,
    date,
    category: data.category || 'Tech Breakdown',
    videoId: data.videoId || extractVideoIdFromContent(content) || undefined,
    excerpt: data.excerpt || generateExcerpt(content),
    readTime: data.readTime || computedReadTime,
    coverImage: data.coverImage || undefined,
    featured: Boolean(data.featured),
    content,
  };
}

function extractVideoIdFromContent(content: string): string | null {
  const youtubeRegex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = content.match(youtubeRegex);
  return match ? match[1] : null;
}

function generateExcerpt(content: string): string {
  const plainText = content
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/[#*`_~]/g, '') // remove markdown symbols
    .replace(/\s+/g, ' ')
    .trim();
  return plainText.length > 140 ? `${plainText.substring(0, 137)}...` : plainText;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
