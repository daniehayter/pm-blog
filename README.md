# SIGNAL - Product & Tech Insights Blog

A modern, high-performance media & blog publication built with Next.js 15 and integrated seamlessly with **Pages CMS**.

Designed as an official web companion for YouTube tech and product strategy video breakdowns.

## Features

- 🎥 **YouTube Video Hero Embeds**: Automatic rendering of embedded YouTube videos with responsive 16:9 ratio containers.
- 📝 **Pages CMS Integration**: Markdown-driven content management using `.pages.yml` with custom frontmatter fields.
- ⚡ **Next.js App Router & SSG**: Pre-rendered static pages for blazing fast load times and SEO optimization.
- 🎨 **Sleek Dark Theme**: Built with Vanilla CSS, featuring custom components and glowing micro-interactions.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the local dev server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Content Management (Pages CMS)

Blog entries are stored as Markdown files under `docs/`. Add or edit posts via Pages CMS or directly in `docs/`:

```yaml
---
title: "Your Title"
date: "YYYY-MM-DD"
category: "Video Breakdown"
videoId: "YOUTUBE_ID"
readTime: "5 min read"
excerpt: "Short summary"
featured: true
---
```
