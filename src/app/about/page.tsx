import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Skybound Solutions',
    description:
        'Skybound Solutions brings a multidisciplinary perspective — from emergency medicine and public service to AI engineering — to build intelligent systems for businesses. Based in Michigan.',
};

const capabilities = [
    { icon: '🧠', title: 'AI & Machine Learning', items: ['LLM Integration', 'Conversational AI', 'NLP & Voice Agents'] },
    { icon: '☁️', title: 'Cloud & Infrastructure', items: ['GCP / Firebase / Cloudflare', 'Docker & Linux', 'Serverless Architecture'] },
    { icon: '⚡', title: 'Full-Stack Development', items: ['React / Next.js / Astro', 'TypeScript / Python', 'React Native (Mobile)'] },
    { icon: '🔒', title: 'Security & Networking', items: ['RBAC & MFA Systems', 'VPN / DNS / Network Hardening', 'Camera & Surveillance Systems'] },
    { icon: '📊', title: 'Data & Analytics', items: ['Real-Time Dashboards', 'Firestore / PostgreSQL', 'Automated Reporting'] },
    { icon: '🔄', title: 'Integration & Automation', items: ['API & Webhook Orchestration', 'Stripe / ElevenLabs / Twilio', 'Workflow Engines'] },
];

const values = [
    {
        title: 'Systems Over Goals',
        description: 'We build engines that generate results repeatedly — not one-time fixes. Every solution is designed to compound value over time.',
    },
    {
        title: 'Precision Engineering',
        description: 'Born from a background where reliability is non-negotiable — from emergency medicine to flight operations — we approach every build with the same rigor.',
    },
    {
        title: 'Automation First',
        description: 'If a human is doing it more than once, we automate it. Our solutions eliminate manual overhead and free teams to focus on what matters.',
    },
    {
        title: 'Proof Over Persuasion',
        description: 'We let the work speak for itself. We demonstrate value through execution, not pitch decks or sales calls.',
    },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
                    <div className="section-label">About Us</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Where Experience Meets{' '}
                        <span className="text-gradient">Innovation</span>
                    </h1>
                    <p className="text-lg">
                        Skybound Solutions is a Michigan-based AI consulting and development firm that
                        builds intelligent systems for businesses ready to deploy AI.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section section-dark" style={{ paddingTop: 40 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 24 }}>The Story</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Skybound Solutions wasn&apos;t born from a startup incubator or a CS program.
                            It was built from <strong style={{ color: 'var(--white)' }}>decades of real-world problem solving</strong> across
                            industries where getting it right isn&apos;t optional.
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Our founder brings a rare, multidisciplinary perspective: <strong style={{ color: 'var(--white)' }}>emergency medicine</strong> (licensed
                            paramedic, flight paramedic on international medical transports), <strong style={{ color: 'var(--white)' }}>municipal government</strong> (elected township trustee,
                            appointed supervisor, school board member), <strong style={{ color: 'var(--white)' }}>education</strong> (paramedic
                            instructor, high school esports director, state federation board member),
                            and <strong style={{ color: 'var(--white)' }}>technology</strong> (from enterprise health IT to building AI-powered platforms from the ground up).
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            That range of experience is our edge. We don&apos;t just write code — we understand
                            operations, compliance, leadership, and the messy reality of how organizations actually
                            work. When we build a system, it&apos;s designed by someone who has <em>been</em> the
                            end user, the administrator, and the decision maker.
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            We believe the businesses that thrive in the next decade will be the ones that
                            build <strong style={{ color: 'var(--white)' }}>systems</strong> — not just tools.
                            AI isn&apos;t a feature to bolt on; it&apos;s the foundation of a new way to operate.
                            We help organizations build that foundation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">Capabilities</div>
                        <h2 className="heading-lg">Full-Stack AI Expertise</h2>
                        <p className="text-lg">
                            End-to-end technical capabilities — from strategy to production
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {capabilities.map((cap) => (
                            <div
                                key={cap.title}
                                className="card card-glass"
                                style={{ padding: '2rem' }}
                            >
                                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{cap.icon}</div>
                                <h3 className="heading-sm" style={{ marginBottom: 12 }}>{cap.title}</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    {cap.items.map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                color: '#94a3b8',
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8,
                                            }}
                                        >
                                            <span style={{ color: 'var(--electric-teal)', fontSize: '0.7rem' }}>●</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="section-header">
                        <div className="section-label">Philosophy</div>
                        <h2 className="heading-lg">How We Think</h2>
                    </div>

                    <div className="grid grid-2">
                        {values.map((val) => (
                            <div key={val.title} style={{ padding: '1.5rem' }}>
                                <h3
                                    style={{
                                        color: 'var(--electric-teal)',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        marginBottom: 8,
                                    }}
                                >
                                    {val.title}
                                </h3>
                                <p className="text-base">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 32 }}>
                        Whether you&apos;re exploring AI for the first time or ready to deploy — we&apos;d
                        love to hear about your project.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Get in Touch →
                    </Link>
                </div>
            </section>
        </div>
    );
}
