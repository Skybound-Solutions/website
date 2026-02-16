import Link from 'next/link';
import type { Metadata } from 'next';
import AuroraBackground from '@/components/AuroraBackground';

export const metadata: Metadata = {
    title: 'Blog | Skybound Solutions',
    description:
        'Insights on AI integration, custom development, and technology strategy from Skybound Solutions.',
};

const posts = [
    {
        title: 'How AI Voice Agents Are Changing Medical Training',
        excerpt:
            'Our experience building ANNIE — a 24/7 AI voice agent for a medical training company — and what it reveals about the future of AI in operations-heavy industries.',
        category: 'Case Study',
        date: 'Coming Soon',
        readTime: '8 min read',
        slug: '#',
    },
    {
        title: 'What It Actually Costs to Build an AI-Powered App in 2026',
        excerpt:
            'A transparent look at real project budgets, timelines, and the factors that drive cost — from MVP to production platform. No fluff, just numbers.',
        category: 'Strategy',
        date: 'Coming Soon',
        readTime: '10 min read',
        slug: '#',
    },
    {
        title: 'Systems Over Goals: Why We Build Engines, Not Features',
        excerpt:
            'The philosophy behind how we approach every engagement — and why building repeatable systems matters more than chasing individual project deliverables.',
        category: 'Philosophy',
        date: 'Coming Soon',
        readTime: '6 min read',
        slug: '#',
    },
];

export default function BlogPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40, position: 'relative', overflow: 'hidden' }}>
                <AuroraBackground variant="page" />
                <div className="container" style={{ textAlign: 'center', maxWidth: 700, position: 'relative', zIndex: 1 }}>
                    <div className="section-label">Blog</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        <span className="text-gradient">Insights</span> & Ideas
                    </h1>
                    <p className="text-lg">
                        Practical thinking on AI, development, and technology strategy.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="section section-dark" style={{ paddingTop: 20 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {posts.map((post) => (
                            <article
                                key={post.title}
                                className="card card-glass"
                                style={{ padding: '2rem' }}
                            >
                                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
                                    <span
                                        style={{
                                            padding: '3px 10px',
                                            borderRadius: 6,
                                            background: 'rgba(0,122,255,0.1)',
                                            color: 'var(--sky-blue)',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>{post.date}</span>
                                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>·</span>
                                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>{post.readTime}</span>
                                </div>
                                <h2 className="heading-md" style={{ marginBottom: 8 }}>{post.title}</h2>
                                <p className="text-base">{post.excerpt}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* LinkedIn CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 className="heading-md" style={{ marginBottom: 12 }}>
                        Follow Along
                    </h2>
                    <p className="text-lg" style={{ marginBottom: 24 }}>
                        We share AI insights, project updates, and industry analysis weekly on LinkedIn.
                    </p>
                    <a
                        href="https://linkedin.com/company/skybound-solutions-llc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Follow on LinkedIn ↗
                    </a>
                </div>
            </section>
        </div>
    );
}
