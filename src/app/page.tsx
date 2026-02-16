'use client';

import Link from 'next/link';

const services = [
  {
    icon: '🧠',
    title: 'AI Consulting',
    description:
      'Strategic guidance on integrating AI into your operations. We assess needs, identify opportunities, and create actionable roadmaps for AI adoption.',
    features: ['AI Readiness Audits', 'Strategy Roadmaps', 'Vendor Evaluation'],
  },
  {
    icon: '⚡',
    title: 'Custom Development',
    description:
      'Bespoke AI tools and platforms built for your workflows. Intelligent agents, automation systems, and custom solutions for unique business challenges.',
    features: ['AI Agents & Chatbots', 'Custom Dashboards', 'API Integrations'],
  },
  {
    icon: '🔄',
    title: 'Workflow Automation',
    description:
      'Streamline operations with intelligent automation. We analyze processes, eliminate bottlenecks, and implement AI-powered efficiency gains.',
    features: ['Process Optimization', 'Data Pipelines', 'Intelligent Alerts'],
  },
];

const metrics = [
  { value: '99%', label: 'Task Time Reduction', suffix: '' },
  { value: '24/7', label: 'AI Agent Availability', suffix: '' },
  { value: '10x', label: 'Faster Deployments', suffix: '' },
  { value: '100%', label: 'Custom Solutions', suffix: '' },
];

const projectTypes = [
  {
    title: 'Operations Dashboards',
    description: 'Real-time business intelligence platforms with automated compliance, roster management, and analytics.',
    tags: ['React', 'Firebase', 'Cloud Functions'],
  },
  {
    title: 'AI Voice Agents',
    description: 'Conversational AI that handles calls, books appointments, and escalates intelligently—around the clock.',
    tags: ['ElevenLabs', 'Twilio', 'NLP'],
  },
  {
    title: 'Client Portals',
    description: 'Secure, branded portals for project tracking, invoicing, and client communication.',
    tags: ['Next.js', 'Stripe', 'OAuth'],
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 'var(--header-height)',
        }}
      >
        {/* Tron Grid */}
        <div className="tron-grid" />

        {/* Aurora Glows */}
        <div
          className="aurora-glow aurora-glow-blue"
          style={{ top: '-20%', right: '-10%', width: 500, height: 500 }}
        />
        <div
          className="aurora-glow aurora-glow-teal"
          style={{ bottom: '-10%', left: '-5%', width: 400, height: 400, opacity: 0.2 }}
        />
        <div
          className="aurora-glow aurora-glow-purple"
          style={{ top: '30%', left: '20%', width: 300, height: 300, opacity: 0.15 }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: 850,
            padding: '80px 24px',
          }}
        >
          <div className="section-label animate-fade-in">
            AI-Powered Innovation
          </div>

          <h1 className="heading-xl animate-fade-in animate-delay-1">
            Build Smarter.{' '}
            <span className="text-gradient">Deploy Faster.</span>
          </h1>

          <p
            className="text-lg animate-fade-in animate-delay-2"
            style={{
              maxWidth: 620,
              margin: '1.5rem auto 2.5rem',
            }}
          >
            Custom AI tools and consulting for businesses ready to explore and deploy
            intelligent solutions. We build the systems that power your next chapter.
          </p>

          <div
            className="animate-fade-in animate-delay-3"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/services" className="btn btn-primary btn-lg">
              Explore Services
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="heading-lg">End-to-End AI Solutions</h2>
            <p className="text-lg">
              From strategy to deployment — tailored to your business
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card card-glass card-aurora animate-fade-in animate-delay-${i + 1}`}
                style={{ padding: '2.5rem' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{service.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: 12 }}>
                  {service.title}
                </h3>
                <p className="text-base" style={{ marginBottom: 20 }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {service.features.map((f) => (
                    <li
                      key={f}
                      style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <span style={{ color: 'var(--electric-teal)', fontSize: '0.8rem' }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-secondary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== METRICS BAR ===== */}
      <section
        style={{
          padding: '60px 0',
          background: 'linear-gradient(135deg, rgba(0,122,255,0.08) 0%, rgba(0,212,170,0.08) 100%)',
          borderTop: '1px solid rgba(0,122,255,0.1)',
          borderBottom: '1px solid rgba(0,212,170,0.1)',
        }}
      >
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            {metrics.map((m) => (
              <div key={m.label}>
                <div
                  className="text-gradient"
                  style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1 }}
                >
                  {m.value}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: 8 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2 className="heading-lg">What We Build</h2>
            <p className="text-lg">
              Real solutions solving real problems across industries
            </p>
          </div>

          <div className="grid grid-3">
            {projectTypes.map((project, i) => (
              <div
                key={project.title}
                className={`card card-glass animate-fade-in animate-delay-${i + 1}`}
                style={{ padding: '2rem' }}
              >
                <h3 className="heading-md" style={{ marginBottom: 12, fontSize: '1.25rem' }}>
                  {project.title}
                </h3>
                <p className="text-base" style={{ marginBottom: 20 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 6,
                        background: 'rgba(0,122,255,0.1)',
                        color: 'var(--sky-blue)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/portfolio" className="btn btn-secondary">
              View Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SKYBOUND ===== */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-header">
            <div className="section-label">Why Skybound</div>
            <h2 className="heading-lg">Built Different</h2>
          </div>

          <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            {[
              {
                title: 'For Businesses Ready for AI',
                desc: "We work with organizations that are ready to embrace AI—not debating whether it's worth it. If you're here, you're ready.",
              },
              {
                title: 'Systems Over Goals',
                desc: "We build engines, not one-time solutions. Every deployment is designed to compound value over time.",
              },
              {
                title: 'Full-Stack Capability',
                desc: 'From AI model integration to cloud infrastructure, we handle the entire stack—no handoffs, no gaps.',
              },
              {
                title: 'Built From Real-World Experience',
                desc: 'Our background spans emergency medicine, public service, education, and enterprise IT — we build software that works in the real world because we\'ve lived in it.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`animate-fade-in animate-delay-${(i % 4) + 1}`}
                style={{ padding: '1.5rem' }}
              >
                <h3
                  style={{
                    color: 'var(--electric-teal)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ color: 'var(--electric-teal)' }}>◇</span>
                  {item.title}
                </h3>
                <p className="text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="section"
        style={{
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="aurora-glow aurora-glow-blue"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15, width: 800, height: 400 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <h2 className="heading-lg" style={{ marginBottom: 16 }}>
            Ready to Build?
          </h2>
          <p className="text-lg" style={{ marginBottom: 32 }}>
            Every project starts with a conversation. Tell us about what you&apos;re building
            and we&apos;ll show you what&apos;s possible.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-teal btn-lg">
              Start a Conversation
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
