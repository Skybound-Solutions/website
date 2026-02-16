import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Skybound Solutions',
    description:
        'Skybound Solutions brings decades of real-world experience — from emergency medicine and public service to AI engineering. Based in Michigan, serving clients nationwide.',
};

const capabilities = [
    { icon: '🧠', title: 'AI & Machine Learning', items: ['LLM Integration', 'Conversational AI', 'NLP & Voice Agents'] },
    { icon: '☁️', title: 'Cloud & Infrastructure', items: ['GCP / Firebase / Cloudflare', 'Docker & Linux', 'Serverless Architecture'] },
    { icon: '⚡', title: 'Full-Stack Development', items: ['React / Next.js / Astro', 'TypeScript / Python', 'React Native (iOS)'] },
    { icon: '🔒', title: 'Security & Networking', items: ['RBAC & MFA Systems', 'VPN / DNS / Network Hardening', 'Compliance Automation'] },
    { icon: '📊', title: 'Data & Analytics', items: ['Real-Time Dashboards', 'Firestore / PostgreSQL', 'Automated Reporting'] },
    { icon: '🔄', title: 'Integration & Automation', items: ['API & Webhook Orchestration', 'Stripe / ElevenLabs / Twilio', 'Workflow Engines'] },
];

const values = [
    {
        title: 'Innovation First',
        description: 'We prioritize cutting-edge technology and novel approaches. We don\'t build yesterday\'s solutions — we build for what\'s next.',
    },
    {
        title: 'Agility & Speed',
        description: 'We move fast and ship often. We learn from real-world usage rather than endless planning.',
    },
    {
        title: 'Sovereignty',
        description: 'We build systems that respect user data and autonomy. We prefer open standards and portable solutions — no vendor lock-in.',
    },
    {
        title: 'Proof Over Persuasion',
        description: 'Our work speaks for itself. We demonstrate value through execution, not pitch decks or sales calls.',
    },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
                    <div style={{ marginBottom: 24, position: 'relative', display: 'inline-block' }}>
                        <div
                            style={{
                                position: 'absolute',
                                inset: -60,
                                background: 'radial-gradient(circle, rgba(0,212,170,0.18) 0%, rgba(0,122,255,0.08) 40%, transparent 70%)',
                                borderRadius: '50%',
                                filter: 'blur(40px)',
                                pointerEvents: 'none',
                            }}
                        />
                        <Image
                            src="/brand/logo-icon-dark.png"
                            alt="Skybound Solutions"
                            width={280}
                            height={280}
                            className="logo-hero"
                            style={{ position: 'relative', width: 140, height: 140 }}
                        />
                    </div>
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
                    <h2 className="heading-lg" style={{ marginBottom: 24 }}>Why This Background Matters</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Skybound Solutions wasn&apos;t born from a startup incubator or a CS program.
                            It was built from <strong style={{ color: 'var(--white)' }}>decades of real-world problem solving</strong> across
                            industries where getting it right isn&apos;t optional.
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Our founder&apos;s path to software engineering took a deliberately unconventional
                            route: <strong style={{ color: 'var(--white)' }}>licensed paramedic</strong> running international medical transports,{' '}
                            <strong style={{ color: 'var(--white)' }}>elected township trustee</strong> and appointed supervisor managing municipal
                            operations, <strong style={{ color: 'var(--white)' }}>paramedic instructor</strong> building curriculum and certification
                            programs, <strong style={{ color: 'var(--white)' }}>high school esports director</strong> founding a program from scratch,
                            and <strong style={{ color: 'var(--white)' }}>instrument-rated pilot</strong> who understands what it means to build
                            systems where failure isn&apos;t an option.
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            That range of experience is our edge. We don&apos;t just write code — we understand
                            operations, compliance, leadership, and the messy reality of how organizations actually
                            work. When we build a system, it&apos;s designed by someone who has <em>been</em> the
                            end user, the administrator, and the decision maker.
                        </p>
                        <p className="text-base" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Today, Skybound operates as an <strong style={{ color: 'var(--white)' }}>AI-native consultancy</strong> — a solo
                            founder amplified by AI agents and strategic partnerships. We&apos;re not pretending to be a
                            team of 20. Instead, we work as <strong style={{ color: 'var(--white)' }}>strategic partners</strong>, not
                            vendors — embedded in your success, not just delivering code.
                        </p>
                    </div>

                    {/* Insurance Badge */}
                    <div
                        className="card card-glass"
                        style={{
                            marginTop: 32,
                            padding: '1.5rem 2rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 16,
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>🛡️</span>
                        <div>
                            <p style={{ color: 'var(--white)', fontWeight: 600, marginBottom: 2 }}>
                                Fully Insured
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                                $1M E&O and Cyber Liability coverage. Michigan LLC since 2023.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo placeholder — will be replaced with real photo */}
            {/* <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <Image src="/brian.jpg" alt="Brian Anklam" width={300} height={300} style={{ borderRadius: '50%' }} />
        </div>
      </section> */}

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
                        Book a Discovery Call →
                    </Link>
                </div>
            </section>
        </div>
    );
}
