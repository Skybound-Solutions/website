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
          <a href="#contact" className="btn btn-primary">
            Chart Your Course
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
              End-to-end AI solutions designed to fit your business needs
            </p>
          </div>

          <div className="grid grid-3">
            {/* Service 1 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardIcon}>🤖</div>
              <h3 style={styles.cardTitle}>AI Consulting</h3>
              <p style={styles.cardText}>
                Strategic guidance on how to integrate AI into your operations.
                We assess your needs, identify opportunities, and create actionable roadmaps
                for AI adoption that deliver real ROI.
              </p>
            </div>

            {/* Service 2 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardIcon}>⚙️</div>
              <h3 style={styles.cardTitle}>Custom AI Development</h3>
              <p style={styles.cardText}>
                Bespoke AI tools and platforms built specifically for your workflows.
                We develop intelligent agents, automation systems, and custom models
                that solve your unique business challenges.
              </p>
            </div>

            {/* Service 3 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardIcon}>📊</div>
              <h3 style={styles.cardTitle}>Workflow Optimization</h3>
              <p style={styles.cardText}>
                Streamline operations with intelligent automation. We analyze your processes,
                identify bottlenecks, and implement AI-powered solutions that boost
                efficiency and reduce manual overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Skybound Solutions?</h2>
          </div>

          <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                ✓ Tailored Solutions
              </h3>
              <p style={styles.cardText}>
                No one-size-fits-all approach. Every tool we build is customized to your specific business requirements.
              </p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                ✓ Proven Expertise
              </h3>
              <p style={styles.cardText}>
                Deep technical knowledge in AI, machine learning, and enterprise software development.
              </p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                ✓ End-to-End Support
              </h3>
              <p style={styles.cardText}>
                From initial consultation to deployment and training, we're with you every step of the way.
              </p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                ✓ Scalable Architecture
              </h3>
              <p style={styles.cardText}>
                Solutions built to grow with your business, leveraging cloud infrastructure and modern best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px', position: 'relative', zIndex: 1 }}>
          <h2 className="title" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready for Takeoff?</h2>
          <p style={{ ...styles.cardText, marginBottom: '2.5rem' }}>
            Let's discuss how custom AI solutions can transform your business.
            Get in touch to explore your project and chart the best path forward.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:info@skyboundmi.com" className="btn btn-primary" style={{ minWidth: '200px' }}>
              Contact Us
            </a>
            <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginTop: '2rem' }}>
              <strong>Location:</strong> Michigan, USA
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
