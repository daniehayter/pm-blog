import { getAllPosts } from '../lib/api';
import Navbar from '../components/Navbar';
import HeroFeatured from '../components/HeroFeatured';
import SubscribeBanner from '../components/SubscribeBanner';
import Footer from '../components/Footer';

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="site-wrapper">
      <Navbar />

      <main id="main-content" className="main-content">
        {featuredPost && <HeroFeatured post={featuredPost} />}

        <section className="signal-manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto-heading">
            <span className="eyebrow">What you’ll find here</span>
            <h2 id="manifesto-title" className="section-title">
              Product management,<br />explained clearly.
            </h2>
          </div>
          <p className="manifesto-intro">
            PM Signal will cover the skills, decisions, and working relationships behind
            good product management. Each topic will be presented with practical context.
          </p>
          <div className="principles-grid">
            <article className="principle-card principle-blue">
              <span className="principle-number">01</span>
              <h3>Videos and explainers</h3>
              <p>Clear introductions to product concepts, tools, and ways of working.</p>
            </article>
            <article className="principle-card principle-yellow">
              <span className="principle-number">02</span>
              <h3>Practical guides</h3>
              <p>Examples you can adapt for discovery, planning, prioritisation, and communication.</p>
            </article>
            <article className="principle-card principle-red">
              <span className="principle-number">03</span>
              <h3>Community topics</h3>
              <p>Questions and experiences from PMs will help shape what gets covered next.</p>
            </article>
          </div>
        </section>

        <SubscribeBanner />
      </main>

      <Footer />
    </div>
  );
}
