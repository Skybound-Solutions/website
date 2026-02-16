import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Skybound Solutions',
    description:
        'See the types of AI solutions we build — from operations dashboards and AI voice agents to client portals and custom SaaS platforms.',
};

const caseStudies = [
    {
        title: 'AI-Powered Operations Dashboard',
        category: 'Business Automation',
        challenge:
            'A medical training company was drowning in manual administrative work — creating rosters by hand, tracking certifications in spreadsheets, and spending 30+ minutes on paperwork per class.',
        solution:
            'We built a full-stack operations dashboard that automates roster generation from booking webhooks, enforces compliance validations in real-time, and provides a single pane of glass for the entire business.',
        results: [
            '99% reduction in roster creation time (30 min → 30 sec)',
            'Automated compliance tracking for multiple certification bodies',
            'Real-time business analytics and capacity management',
            'Role-based access for admins, instructors, and staff',
        ],
        tags: ['React', 'Firebase', 'Cloud Functions', 'Tailwind CSS', 'Stripe Connect'],
        color: 'var(--sky-blue)',
    },
    {
        title: 'Conversational AI Voice Agent',
        category: 'AI Agents',
        challenge:
            'A growing business was missing calls from new customers because the owner was teaching classes. After-hours calls went entirely unanswered, losing potential bookings.',
        solution:
            'We deployed a conversational AI voice agent that handles inbound calls 24/7 — answering questions about services, sending booking links via SMS, and intelligently escalating urgent requests to the team.',
        results: [
            '24/7 call handling without additional staff',
            'Automated SMS follow-ups with booking links',
            'Intelligent escalation to Discord for urgent requests',
            'Transcript logging for quality review and AI improvement',
        ],
        tags: ['ElevenLabs', 'Twilio', 'Firebase', 'Discord', 'NLP'],
        color: 'var(--electric-teal)',
    },
    {
        title: 'Interactive Point-of-Sale System',
        category: 'Custom Applications',
        challenge:
            'A local school booster club needed a modern way to manage concession sales at events — tracking inventory, processing orders quickly, and generating sales reports for the organization.',
        solution:
            'We created a tablet-friendly point-of-sale application designed for volunteer-run concession stands. Simple enough for any volunteer to use, with real-time inventory tracking and end-of-event reporting.',
        results: [
            'Volunteer-friendly interface with minimal training required',
            'Real-time inventory tracking across multiple categories',
            'End-of-event sales summaries and reporting',
            'Repackageable for other schools and booster clubs',
        ],
        tags: ['React', 'Firebase', 'Cloud Functions', 'Responsive Design'],
        color: 'var(--bright-orange)',
    },
    {
        title: 'AI-Integrated Gaming Platform',
        category: 'Side Projects & Experiments',
        challenge:
            'Exploring how AI could enhance a casual word puzzle game — making gameplay feel more dynamic and personalized while maintaining the core simplicity that makes word games fun.',
        solution:
            'Built a word puzzle game with AI-powered hint generation, dynamic difficulty adjustment, and personalized gameplay mechanics. Served as a proving ground for AI integration patterns.',
        results: [
            'AI-generated contextual hints without spoiling the puzzle',
            'Dynamic difficulty that adapts to player skill',
            'Clean, minimalist web interface',
            'Proved AI integration patterns used in client projects',
        ],
        tags: ['AI/ML', 'React', 'Game Design', 'Gemini API'],
        color: 'var(--soft-purple)',
    },
];

const capabilities = [
    'AI Voice & Chat Agents',
    'Operations Dashboards',
    'Client Portals',
    'Workflow Automation',
    'SaaS Platforms',
    'Point-of-Sale Systems',
    'API Integrations',
    'Data Pipelines',
    'Mobile-Responsive Apps',
    'Compliance Systems',
    'Payment Processing',
    'Real-Time Analytics',
];

export default function PortfolioPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
                    <div className="section-label">Portfolio</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Built to <span className="text-gradient">Deliver</span>
                    </h1>
                    <p className="text-lg">
                        Real solutions for real businesses. Here&apos;s the type of work we do
                        and the impact it creates.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section section-dark" style={{ paddingTop: 40 }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {caseStudies.map((cs) => (
                            <div
                                key={cs.title}
                                className="card card-glass"
                                style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
                            >
                                {/* Accent bar */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 3,
                                        background: `linear-gradient(90deg, ${cs.color}, transparent)`,
                                    }}
                                />

                                <span
                                    style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        borderRadius: 6,
                                        background: `${cs.color}15`,
                                        color: cs.color,
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        marginBottom: 12,
                                    }}
                                >
                                    {cs.category}
                                </span>

                                <h2 className="heading-md" style={{ marginBottom: 20, fontSize: '1.5rem' }}>
                                    {cs.title}
                                </h2>

                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                        gap: '2rem',
                                        marginBottom: 24,
                                    }}
                                >
                                    <div>
                                        <h4
                                            style={{
                                                color: '#94a3b8',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: 8,
                                            }}
                                        >
                                            Challenge
                                        </h4>
                                        <p className="text-base">{cs.challenge}</p>
                                    </div>
                                    <div>
                                        <h4
                                            style={{
                                                color: '#94a3b8',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: 8,
                                            }}
                                        >
                                            Solution
                                        </h4>
                                        <p className="text-base">{cs.solution}</p>
                                    </div>
                                </div>

                                <h4
                                    style={{
                                        color: '#94a3b8',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: 12,
                                    }}
                                >
                                    Results
                                </h4>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                        gap: 8,
                                        marginBottom: 20,
                                    }}
                                >
                                    {cs.results.map((r) => (
                                        <li
                                            key={r}
                                            style={{
                                                color: '#94a3b8',
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 8,
                                            }}
                                        >
                                            <span style={{ color: 'var(--electric-teal)', flexShrink: 0 }}>✓</span>
                                            {r}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {cs.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                padding: '4px 12px',
                                                borderRadius: 6,
                                                background: 'rgba(255,255,255,0.05)',
                                                color: '#64748b',
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
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">Capabilities</div>
                        <h2 className="heading-lg">What We Can Build For You</h2>
                    </div>

                    <div className="grid grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
                        {capabilities.map((cap) => (
                            <div
                                key={cap}
                                style={{
                                    padding: '16px 20px',
                                    borderRadius: 10,
                                    border: '1px solid var(--border)',
                                    background: 'rgba(255,255,255,0.02)',
                                    color: '#e2e8f0',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {cap}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                        Have a Project in Mind?
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 32 }}>
                        Every project starts with understanding your challenge. Let&apos;s talk about what
                        you need and how we can help.
                    </p>
                    <Link href="/contact" className="btn btn-teal btn-lg">
                        Start a Conversation →
                    </Link>
                </div>
            </section>
        </div>
    );
}
