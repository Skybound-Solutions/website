import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const caseStudies: Record<string, {
    title: string;
    client: string;
    overview: string;
    challenge: string[];
    solution: string[];
    techStack: string[];
    results: { metric: string; description: string }[];
    testimonial?: { quote: string; author: string; role: string };
    status: 'published' | 'coming-soon';
}> = {
    'operations-platform': {
        title: 'AI-Powered Operations Platform',
        client: 'Medical Training Company',
        overview:
            'A comprehensive operations platform that replaced manual spreadsheets, phone-tag scheduling, and paper-based compliance tracking with a real-time dashboard and 24/7 AI voice agent — transforming how a medical training company runs its daily operations.',
        challenge: [
            'Over 20 hours per week spent on manual compliance paperwork and AHA roster management',
            'Missed calls and scheduling conflicts during business hours',
            'No centralized view of instructor schedules, class capacity, or certification status',
            'Fragmented communication between staff, instructors, and students',
        ],
        solution: [
            'Real-time operations dashboard with automated AHA roster generation and compliance tracking',
            'ANNIE — a 24/7 AI voice agent powered by ElevenLabs that handles inbound calls, books appointments, answers FAQs, and escalates intelligently to staff',
            'Instructor scheduling and management portal with availability tracking',
            'Automated notifications and reminders via email and SMS',
            'Secure client portal for students to access certificates and schedules',
        ],
        techStack: ['React', 'Firebase', 'Cloud Functions', 'ElevenLabs ConvAI', 'Twilio', 'Node.js', 'TypeScript'],
        results: [
            { metric: '99%', description: 'Reduction in manual admin time for compliance and roster management' },
            { metric: '24/7', description: 'AI voice agent availability — no more missed calls after hours' },
            { metric: '0', description: 'Paper-based processes remaining — fully digital operations' },
        ],
        status: 'published',
    },
    'proxle': {
        title: 'Proxle — AI Word Puzzle Game',
        client: 'Skybound Product',
        overview: '',
        challenge: [],
        solution: [],
        techStack: ['React', 'Gemini API', 'TypeScript'],
        results: [],
        status: 'coming-soon',
    },
    'pos-system': {
        title: 'Booster Club E-Commerce & POS',
        client: 'Youth Sports Organization',
        overview: '',
        challenge: [],
        solution: [],
        techStack: ['Next.js', 'Stripe', 'Firebase'],
        results: [],
        status: 'coming-soon',
    },
};

export async function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata(
    props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await props.params;
    const study = caseStudies[slug];
    if (!study) return { title: 'Not Found' };
    return {
        title: `${study.title} | Skybound Solutions`,
        description: study.overview || `Case study for ${study.title}`,
    };
}

export default async function CaseStudyPage(
    props: { params: Promise<{ slug: string }> }
) {
    const { slug } = await props.params;
    const study = caseStudies[slug];

    if (!study) notFound();

    if (study.status === 'coming-soon') {
        return (
            <div style={{ paddingTop: 'var(--header-height)' }}>
                <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                    <div className="container" style={{ maxWidth: 600 }}>
                        <div className="section-label">Case Study</div>
                        <h1 className="heading-xl" style={{ marginBottom: 16 }}>{study.title}</h1>
                        <p className="text-lg" style={{ marginBottom: 32 }}>
                            This case study is coming soon. In the meantime, we&apos;d love to tell you about it.
                        </p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-primary">
                                Book a Discovery Call →
                            </Link>
                            <Link href="/work" className="btn btn-secondary">
                                ← Back to Work
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 32 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <Link href="/work" style={{ color: '#64748b', fontSize: '0.85rem', display: 'inline-block', marginBottom: 24 }}>
                        ← Back to Work
                    </Link>
                    <div className="section-label">{study.client}</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>{study.title}</h1>
                    <p className="text-lg">{study.overview}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                        {study.techStack.map((t) => (
                            <span
                                key={t}
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: 6,
                                    background: 'rgba(0,122,255,0.1)',
                                    color: 'var(--sky-blue)',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="section section-dark" style={{ paddingTop: 32 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 20 }}>
                        <span style={{ color: 'var(--sky-blue)' }}>The Challenge</span>
                    </h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {study.challenge.map((c) => (
                            <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7 }}>
                                <span style={{ color: 'var(--bright-orange)', fontSize: '0.8rem', marginTop: 6 }}>▸</span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Solution */}
            <section className="section">
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 20 }}>
                        <span style={{ color: 'var(--electric-teal)' }}>What We Built</span>
                    </h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {study.solution.map((s) => (
                            <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7 }}>
                                <span style={{ color: 'var(--electric-teal)', fontSize: '0.8rem', marginTop: 6 }}>✦</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Results */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 32, textAlign: 'center' }}>Results</h2>
                    <div className="grid grid-3">
                        {study.results.map((r) => (
                            <div key={r.metric} className="card card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div
                                    className="text-gradient"
                                    style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, marginBottom: 8 }}
                                >
                                    {r.metric}
                                </div>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{r.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {study.testimonial && (
                <section className="section">
                    <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
                        <blockquote
                            style={{
                                fontSize: '1.25rem',
                                color: '#e2e8f0',
                                fontStyle: 'italic',
                                lineHeight: 1.7,
                                marginBottom: 24,
                            }}
                        >
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <p style={{ color: 'var(--electric-teal)', fontWeight: 600 }}>{study.testimonial.author}</p>
                        <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{study.testimonial.role}</p>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                        Have a Similar Problem?
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 32 }}>
                        Let&apos;s talk about how we can build something like this for your organization.
                    </p>
                    <Link href="/contact" className="btn btn-teal btn-lg">
                        Book a Discovery Call →
                    </Link>
                </div>
            </section>
        </div>
    );
}
