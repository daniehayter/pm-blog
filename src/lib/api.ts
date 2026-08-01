import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  videoId?: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(docsDirectory).filter(file => file.endsWith('.md'));
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(docsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || 'Uncategorized',
      videoId: data.videoId,
      readTime: data.readTime || '5 min read',
      excerpt: data.excerpt || content.slice(0, 150),
      featured: data.featured || false,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
