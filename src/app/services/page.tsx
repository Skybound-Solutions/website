import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Skybound Solutions',
    description:
        'AI consulting, custom development, maintenance plans, and strategic partnerships. Explore how Skybound Solutions can help your business adopt and deploy AI.',
};

const tiers = [
    {
        id: 'consulting',
        icon: '🧠',
        title: 'Consulting & Strategy',
        priceHint: 'Hourly or project-based',
        description:
            'Expert guidance for organizations navigating AI adoption. From initial discovery to full implementation roadmaps.',
        deliverables: [
            'AI Readiness Assessments',
            'Technology Evaluation & Vendor Analysis',
            'Implementation Roadmaps',
            'Fractional CTO Services',
            'Discovery Sessions & Workshops',
        ],
        idealFor: 'Organizations exploring AI for the first time, or those needing strategic guidance before committing to a build.',
    },
    {
        id: 'development',
        icon: '⚡',
        title: 'Custom Development',
        priceHint: 'Projects typically $5K–$50K+',
        description:
            'Bespoke AI-powered applications built from the ground up. Full-stack development across web, mobile, desktop, and cloud platforms.',
        deliverables: [
            'Web Applications (React, Next.js)',
            'AI Agent & Chatbot Development',
            'iOS & Mobile Apps (React Native)',
            'Custom Dashboards & Analytics',
            'API Integrations & Workflow Automation',
            'E-Commerce & SaaS Platforms',
            'MVPs & Proof of Concepts',
        ],
        idealFor: 'Businesses with a defined problem that need a custom-built solution — from MVP to full production platform.',
    },
    {
        id: 'maintenance',
        icon: '🛠️',
        title: 'Maintenance & Support',
        priceHint: 'Starting at $500/month',
        description:
            'Ongoing support, monitoring, and feature development for production systems. Choose the tier that fits your needs.',
        deliverables: null,
        idealFor: 'Businesses with live applications that need reliable, ongoing support and continued development.',
    },
    {
        id: 'partnerships',
        icon: '🤝',
        title: 'Strategic Partnerships',
        priceHint: 'Platform fee model',
        description:
            'Long-term technology partnerships where we build, deploy, and maintain your platform — with a shared interest in your growth. Revenue-sharing or platform fee structures that align our incentives.',
        deliverables: [
            'Full Platform Development & Hosting',
            'Ongoing Feature Development',
            'AI Agent Integration',
            'Performance Monitoring & Optimization',
            'Dedicated Support Channel',
        ],
        idealFor: 'Organizations wanting a true technology partner, not just a vendor. Ideal for companies building AI-powered platforms as a core part of their business.',
    },
];

const maintenancePlans = [
    {
        name: 'Basic',
        price: 'Starting at $500/mo',
        features: ['Bug fixes & patches', 'System monitoring', 'Monthly status report', '2 business-day response'],
    },
    {
        name: 'Standard',
        price: 'Starting at $1,000/mo',
        features: ['Everything in Basic', '5 dev hours/month', 'Performance optimization', 'Next business-day response', 'Quarterly strategy call'],
    },
    {
        name: 'Premium',
        price: 'Starting at $2,000/mo',
        features: ['Everything in Standard', '15 dev hours/month', 'Priority feature requests', '4-hour response SLA', 'Monthly strategy calls', 'Dedicated Slack/Discord channel'],
    },
];

const processSteps = [
    { step: '01', title: 'Discovery', description: 'Free 15-minute call to understand your challenge, goals, and timeline.' },
    { step: '02', title: 'Proposal', description: 'Detailed scope, architecture plan, timeline, and transparent pricing.' },
    { step: '03', title: 'Build', description: 'Agile development with weekly updates. You see progress, not just a final delivery.' },
    { step: '04', title: 'Launch', description: 'Deployment, testing, and handoff. We make sure everything works in production.' },
    { step: '05', title: 'Support', description: 'Ongoing maintenance, monitoring, and iteration. We don\'t disappear after launch.' },
];

export default function ServicesPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
                    <div className="section-label">Services</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        AI Solutions That{' '}
                        <span className="text-gradient">Ship</span>
                    </h1>
                    <p className="text-lg">
                        From strategy to production — we offer the full spectrum of AI consulting and development services. Every engagement is custom-scoped to your needs.
                    </p>
                </div>
            </section>

            {/* Service Tiers */}
            {tiers.map((tier) => (
                <section key={tier.id} id={tier.id} className="section section-dark" style={{ paddingTop: 40 }}>
                    <div className="container" style={{ maxWidth: 900 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
                            <span style={{ fontSize: '2.5rem' }}>{tier.icon}</span>
                            <div>
                                <h2 className="heading-lg" style={{ marginBottom: 4 }}>{tier.title}</h2>
                                <span
                                    style={{
                                        color: 'var(--electric-teal)',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    {tier.priceHint}
                                </span>
                            </div>
                        </div>

                        <p className="text-lg" style={{ marginBottom: 24 }}>
                            {tier.description}
                        </p>

                        {/* Regular deliverables */}
                        {tier.deliverables && (
                            <div className="card card-glass" style={{ padding: '2rem', marginBottom: 24 }}>
                                <h3 className="heading-sm" style={{ marginBottom: 16, color: 'var(--white)' }}>Deliverables</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
                                    {tier.deliverables.map((d) => (
                                        <div
                                            key={d}
                                            style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: '0.9rem' }}
                                        >
                                            <span style={{ color: 'var(--electric-teal)', fontSize: '0.8rem' }}>✦</span>
                                            {d}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Maintenance Plans Table */}
                        {tier.id === 'maintenance' && (
                            <div className="grid grid-3" style={{ gap: '1rem', marginBottom: 24 }}>
                                {maintenancePlans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className="card card-glass"
                                        style={{
                                            padding: '2rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            border: plan.name === 'Standard' ? '1px solid rgba(0,212,170,0.3)' : undefined,
                                        }}
                                    >
                                        {plan.name === 'Standard' && (
                                            <span
                                                style={{
                                                    color: 'var(--electric-teal)',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    marginBottom: 8,
                                                }}
                                            >
                                                Most Popular
                                            </span>
                                        )}
                                        <h4 className="heading-sm" style={{ marginBottom: 4 }}>{plan.name}</h4>
                                        <p style={{ color: 'var(--electric-teal)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 16 }}>
                                            {plan.price}
                                        </p>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                                            {plan.features.map((f) => (
                                                <li
                                                    key={f}
                                                    style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: 8 }}
                                                >
                                                    <span style={{ color: 'var(--electric-teal)', fontSize: '0.7rem', marginTop: 4 }}>●</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: 12,
                            }}
                        >
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                💡 {tier.idealFor}
                            </p>
                            <Link href="/contact" className="btn btn-primary btn-sm">
                                Book a Discovery Call →
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            {/* Process */}
            <section className="section">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="section-header">
                        <div className="section-label">Process</div>
                        <h2 className="heading-lg">How We Work</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {processSteps.map((s) => (
                            <div
                                key={s.step}
                                style={{
                                    display: 'flex',
                                    gap: 24,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <span
                                    className="text-gradient"
                                    style={{ fontSize: '2rem', fontWeight: 800, minWidth: 50 }}
                                >
                                    {s.step}
                                </span>
                                <div>
                                    <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: 4 }}>
                                        {s.title}
                                    </h3>
                                    <p className="text-base">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                        Not Sure Where to Start?
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 32 }}>
                        Book a free 15-minute discovery call and we&apos;ll help you figure out the best path forward.
                    </p>
                    <Link href="/contact" className="btn btn-teal btn-lg">
                        Book a Discovery Call →
                    </Link>
                </div>
            </section>
        </div>
    );
}
