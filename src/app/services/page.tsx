import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Skybound Solutions',
    description:
        'AI consulting, custom development, and workflow automation. Explore our three service tiers designed for businesses ready to deploy AI.',
};

const tiers = [
    {
        id: 'consulting',
        tier: 'Tier 1',
        title: 'AI Consulting',
        subtitle: 'Strategy & Roadmaps',
        description:
            'For organizations at the beginning of their AI journey—or those seeking expert guidance before committing to a build. We assess where AI can add value, identify the right tools, and deliver a clear roadmap.',
        deliverables: [
            'AI Readiness Assessment',
            'Technology & Vendor Evaluation',
            'Strategic Roadmap with ROI Projections',
            'Implementation Recommendations',
            'Team Training & Knowledge Transfer',
        ],
        idealFor: 'Businesses exploring AI adoption or evaluating AI vendor options.',
        color: 'var(--sky-blue)',
        bgColor: 'rgba(0, 122, 255, 0.08)',
    },
    {
        id: 'development',
        tier: 'Tier 2',
        title: 'Custom AI Development',
        subtitle: 'Platform & Skybound OS',
        description:
            'Full-stack AI solutions built specifically for your workflows. We design, develop, and deploy intelligent tools—from conversational AI agents to real-time operational dashboards.',
        deliverables: [
            'Custom AI Agents & Chatbots',
            'Operations Dashboards & Portals',
            'API Integrations & Data Pipelines',
            'Managed AI Infrastructure (AaaS)',
            'Ongoing Support & Iteration',
        ],
        idealFor: 'Businesses ready to deploy AI solutions into production workflows.',
        color: 'var(--electric-teal)',
        bgColor: 'rgba(0, 212, 170, 0.08)',
    },
    {
        id: 'automation',
        tier: 'Tier 3',
        title: 'Full Product Development',
        subtitle: 'Product & SaaS',
        description:
            'End-to-end product builds—from concept to launch. We create complete SaaS platforms, mobile apps, and enterprise tools with AI baked into the core.',
        deliverables: [
            'Complete SaaS Platform Development',
            'Multi-Tenant Architecture',
            'Payment & Billing Integration',
            'Production Deployment & CI/CD',
            'Scalable Cloud Infrastructure',
        ],
        idealFor: 'Founders, operators, or enterprises needing a turnkey product built right.',
        color: 'var(--soft-purple)',
        bgColor: 'rgba(155, 89, 182, 0.08)',
    },
];

const process = [
    { step: '01', title: 'Discovery', desc: 'We learn your business, pain points, and goals.' },
    { step: '02', title: 'Strategy', desc: 'A clear plan with scope, timeline, and deliverables.' },
    { step: '03', title: 'Build', desc: 'Rapid, iterative development with regular check-ins.' },
    { step: '04', title: 'Deploy', desc: 'Production launch with monitoring and documentation.' },
    { step: '05', title: 'Evolve', desc: 'Ongoing support, optimization, and new capabilities.' },
];

export default function ServicesPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
                    <div className="section-label">Services</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Solutions That <span className="text-gradient">Scale With You</span>
                    </h1>
                    <p className="text-lg">
                        Every engagement is custom-scoped. We meet you where you are—whether
                        that&apos;s exploring AI for the first time or deploying mission-critical systems.
                    </p>
                </div>
            </section>

            {/* Service Tiers */}
            <section className="section section-dark" style={{ paddingTop: 40 }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                id={tier.id}
                                className="card card-glass"
                                style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
                            >
                                {/* Accent bar */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 4,
                                        height: '100%',
                                        background: tier.color,
                                    }}
                                />

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                                    <div>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                padding: '4px 12px',
                                                borderRadius: 6,
                                                background: tier.bgColor,
                                                color: tier.color,
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                marginBottom: 12,
                                            }}
                                        >
                                            {tier.tier}
                                        </span>
                                        <h2 className="heading-lg" style={{ marginBottom: 4 }}>
                                            {tier.title}
                                        </h2>
                                        <p
                                            style={{
                                                color: tier.color,
                                                fontSize: '1rem',
                                                fontWeight: 500,
                                                marginBottom: 16,
                                            }}
                                        >
                                            {tier.subtitle}
                                        </p>
                                        <p className="text-base" style={{ marginBottom: 24, maxWidth: 700 }}>
                                            {tier.description}
                                        </p>

                                        <h4 className="heading-sm" style={{ marginBottom: 12 }}>
                                            Deliverables
                                        </h4>
                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                                gap: 10,
                                                marginBottom: 24,
                                            }}
                                        >
                                            {tier.deliverables.map((d) => (
                                                <li
                                                    key={d}
                                                    style={{
                                                        color: '#94a3b8',
                                                        fontSize: '0.9rem',
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: 8,
                                                    }}
                                                >
                                                    <span style={{ color: tier.color, flexShrink: 0 }}>✦</span>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic' }}>
                                            <strong style={{ color: '#94a3b8' }}>Ideal for:</strong> {tier.idealFor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h3 className="heading-md" style={{ marginBottom: 12 }}>
                        All Quotes Are Custom
                    </h3>
                    <p className="text-base" style={{ marginBottom: 24 }}>
                        Every project is scoped to your specific needs. No cookie-cutter packages—just
                        solutions designed to deliver measurable results for your business.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Request a Quote →
                    </Link>
                </div>
            </section>

            {/* Process */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">How We Work</div>
                        <h2 className="heading-lg">Our Process</h2>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0,
                            maxWidth: 700,
                            margin: '0 auto',
                        }}
                    >
                        {process.map((p, i) => (
                            <div
                                key={p.step}
                                style={{
                                    display: 'flex',
                                    gap: 24,
                                    padding: '24px 0',
                                    borderBottom: i < process.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                }}
                            >
                                <div
                                    style={{
                                        color: 'var(--sky-blue)',
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        opacity: 0.4,
                                        flexShrink: 0,
                                        width: 40,
                                    }}
                                >
                                    {p.step}
                                </div>
                                <div>
                                    <h4 className="heading-sm" style={{ marginBottom: 4 }}>
                                        {p.title}
                                    </h4>
                                    <p className="text-base">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                        Let&apos;s Discuss Your Project
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 32 }}>
                        Tell us what you&apos;re building and we&apos;ll show you how AI can get you there faster.
                    </p>
                    <Link href="/contact" className="btn btn-teal btn-lg">
                        Start a Conversation →
                    </Link>
                </div>
            </section>
        </div>
    );
}
