'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: '🧠',
    title: 'AI Consulting',
    description:
      'Strategic AI readiness assessments, technology evaluation, and implementation roadmaps. Fractional CTO services for organizations navigating AI adoption.',
    features: ['AI Readiness Assessments', 'Fractional CTO', 'Discovery Sessions'],
  },
  {
    icon: '⚡',
    title: 'Custom Development',
    description:
      'Full-stack AI solutions built for your workflows — web apps, AI integrations, iOS apps, dashboards, MVPs, and complete SaaS platforms.',
    features: ['AI Agents & Chatbots', 'Web & Mobile Apps', 'API Integrations'],
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Support',
    description:
      'Ongoing support, monitoring, and feature development for production systems. Tiered plans from bug fixes to dedicated development hours.',
    features: ['Production Monitoring', 'Priority Bug Fixes', 'Monthly Dev Hours'],
  },
  {
    icon: '🤝',
    title: 'Strategic Partnerships',
    description:
      'Long-term platform partnerships with revenue sharing. We build, deploy, and maintain your platform — growing alongside your business.',
    features: ['Platform Fee Model', 'Shared Growth', 'Full Lifecycle'],
  },
];

const trustSignals = [
  { icon: '🛡️', text: '$1M Insured' },
  { icon: '🚀', text: 'Production Portfolio' },
  { icon: '🤖', text: 'AI-Native Workflow' },
];

const featuredProjects = [
  {
    title: 'AI-Powered Operations Platform',
    description: 'Real-time dashboard with AI voice agent for a medical training company. Automated roster generation, compliance tracking, and 24/7 call handling.',
    result: '99% reduction in admin time',
    tags: ['React', 'Firebase', 'ElevenLabs', 'Twilio'],
    slug: '/work/operations-platform',
    status: 'case-study',
  },
  {
    title: 'Proxle — AI Word Puzzle Game',
    description: 'Word puzzle game with AI-powered contextual hints and dynamic difficulty. Proved AI integration patterns used across client projects.',
    result: 'Live on web',
    tags: ['React', 'Gemini API', 'Game Design'],
    slug: '/work/proxle',
    status: 'coming-soon',
  },
  {
    title: 'Booster Club E-Commerce & POS',
    description: 'Custom e-commerce and point-of-sale platform for a youth sports organization. Online ordering, event-day sales, inventory tracking, and automated financial reporting.',
    result: 'Unified sales platform',
    tags: ['Next.js', 'Stripe', 'Firebase'],
    slug: '/work/pos-system',
    status: 'coming-soon',
  },
];

const metrics = [
  { value: '$1M', label: 'E&O + Cyber Coverage' },
  { value: '24/7', label: 'AI Agent Availability' },
  { value: '99%', label: 'Admin Time Saved' },
  { value: '100%', label: 'Custom Solutions' },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="section-flow"
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
        <div
          className="aurora-glow aurora-glow-blue"
          style={{ top: '-15%', right: '-5%', width: 700, height: 700, opacity: 0.5, animation: 'aurora-drift-1 20s ease-in-out infinite' }}
        />
        <div
          className="aurora-glow aurora-glow-teal"
          style={{ bottom: '-15%', left: '-10%', width: 600, height: 600, opacity: 0.35, animation: 'aurora-drift-2 25s ease-in-out infinite' }}
        />
        <div
          className="aurora-glow aurora-glow-purple"
          style={{ top: '20%', left: '15%', width: 500, height: 500, opacity: 0.25, animation: 'aurora-drift-3 18s ease-in-out infinite' }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: 950,
            padding: '60px 24px',
          }}
        >
          <div className="animate-fade-in" style={{ marginBottom: 24 }}>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              {/* Subtle glow behind the logo */}
              <div
                style={{
                  position: 'absolute',
                  inset: -80,
                  background: 'radial-gradient(circle, rgba(0,212,170,0.2) 0%, rgba(0,122,255,0.1) 35%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                  animation: 'pulse-glow 4s ease-in-out infinite',
                }}
              />
              <Image
                src="/brand/logo-icon-dark.png"
                alt="Skybound Solutions"
                width={400}
                height={400}
                priority
                className="logo-hero"
                style={{
                  position: 'relative',
                  width: 200,
                  height: 200,
                }}
              />
            </div>
          </div>
          <div className="section-label animate-fade-in">
            AI-Powered Innovation
          </div>

          <h1
            className="heading-xl animate-fade-in animate-delay-1"
            style={{ whiteSpace: 'nowrap', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            From Idea to Production.{' '}
            <span className="text-gradient">AI-Powered.</span>
          </h1>

          <p
            className="text-lg animate-fade-in animate-delay-2"
            style={{
              maxWidth: 620,
              margin: '1.5rem auto 2rem',
            }}
          >
            Custom AI tools and consulting for businesses ready to deploy
            intelligent solutions. We build the systems that power your next chapter.
          </p>

          {/* Trust Signals */}
          <div
            className="animate-fade-in animate-delay-2"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {trustSignals.map((t) => (
              <span key={t.text} className="trust-badge">
                <span>{t.icon}</span> {t.text}
              </span>
            ))}
          </div>

          <div
            className="animate-fade-in animate-delay-3"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Discovery Call
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              Explore Services
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
              From strategy to deployment — and beyond
            </p>
          </div>

          <div className="grid grid-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card card-glass card-aurora animate-fade-in animate-delay-${(i % 4) + 1}`}
                style={{ padding: '2rem' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{service.icon}</div>
                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                  {service.title}
                </h3>
                <p className="text-sm" style={{ marginBottom: 16 }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {service.features.map((f) => (
                    <li
                      key={f}
                      style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      <span style={{ color: 'var(--electric-teal)', fontSize: '0.7rem' }}>✦</span>
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

      {/* ===== FEATURED WORK ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Featured Work</div>
            <h2 className="heading-lg">Real Solutions, Real Results</h2>
            <p className="text-lg">
              A selection of projects that showcase our capabilities
            </p>
          </div>

          <div className="grid grid-3">
            {featuredProjects.map((project, i) => (
              <div
                key={project.title}
                className={`card card-glass card-aurora animate-fade-in animate-delay-${i + 1}`}
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              >
                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                  {project.title}
                </h3>
                <p className="text-base" style={{ marginBottom: 16, flex: 1 }}>
                  {project.description}
                </p>
                {project.result && (
                  <p
                    style={{
                      color: 'var(--electric-teal)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    📊 {project.result}
                  </p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 10px',
                        borderRadius: 6,
                        background: 'rgba(0,122,255,0.1)',
                        color: 'var(--sky-blue)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.slug}
                  style={{
                    color: project.status === 'case-study' ? 'var(--sky-blue)' : '#64748b',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {project.status === 'case-study' ? 'View Case Study →' : 'Case Study Coming Soon'}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/work" className="btn btn-secondary">
              View All Work →
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
                title: 'Strategic Partners, Not Vendors',
                desc: "We don't just build and hand off. We work alongside you as a technology partner — invested in your success and growing with your business.",
              },
              {
                title: 'Systems Over Goals',
                desc: "We build engines, not one-time solutions. Every deployment is designed to compound value over time.",
              },
              {
                title: 'Full-Stack Capability',
                desc: 'From AI model integration to cloud infrastructure, from iOS apps to enterprise dashboards — no handoffs, no gaps.',
              },
              {
                title: 'Built From Real-World Experience',
                desc: 'Our background spans emergency medicine, public service, education, and enterprise IT — we build software that works because we\'ve been the end user.',
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
            Every project starts with a 15-minute discovery call. Tell us about what you&apos;re
            building and we&apos;ll show you what&apos;s possible.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-teal btn-lg">
              Book a Discovery Call
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
