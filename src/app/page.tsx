import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.85)), url('/hero-bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 'var(--header-height)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: 1.1,
    color: '#fff',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: 'var(--secondary)',
    marginBottom: '2.5rem',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  glow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0) 70%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  serviceCard: {
    background: 'var(--surface)',
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  cardIcon: {
    marginBottom: '1.5rem',
    color: 'var(--accent)',
    fontSize: '2rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
    fontWeight: '700',
  },
  cardText: {
    color: 'var(--secondary)',
    fontSize: '1rem',
    lineHeight: 1.6,
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.glow} />
        <div className="container" style={styles.heroContent}>
          <div style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '99px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            AI Solutions & Consulting
          </div>
          <h1 style={styles.heroTitle}>
            Piloting the Future of<br />
            <span style={{ color: 'var(--primary)' }}>Business Intelligence</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Custom AI tools and consulting services designed to elevate your business.
            We build intelligent automation solutions tailored to your unique workflows
            and help you navigate the evolving landscape of AI technology.
          </p>
          <a href="/login" className="btn btn-primary">
            Admin Portal
          </a>
        </div>
      </section>
    </div>
  );
}
