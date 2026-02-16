import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Skybound Solutions',
    description:
        'Insights on AI strategy, automation, and technology from the Skybound Solutions team.',
};

const posts = [
    {
        slug: '#',
        title: 'Why Every Small Business Needs an AI Strategy in 2026',
        excerpt:
            'AI isn\'t just for enterprise anymore. Here\'s how small businesses can start building intelligent systems without breaking the bank.',
        date: 'Coming Soon',
        category: 'AI Strategy',
        readTime: '5 min read',
    },
    {
        slug: '#',
        title: 'Building AI Voice Agents: Lessons from Production',
        excerpt:
            'What we\'ve learned deploying conversational AI that handles real customer interactions around the clock.',
        date: 'Coming Soon',
        category: 'Technical',
        readTime: '8 min read',
    },
    {
        slug: '#',
        title: 'From Spreadsheets to Systems: The Automation Journey',
        excerpt:
            'The common path businesses take from manual processes to fully automated operations — and the mistakes to avoid.',
        date: 'Coming Soon',
        category: 'Automation',
        readTime: '6 min read',
    },
];

export default function BlogPage() {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
                    <div className="section-label">Blog</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Insights & <span className="text-gradient">Ideas</span>
                    </h1>
                    <p className="text-lg">
                        Thoughts on AI strategy, automation, and building intelligent systems — from the
                        team at Skybound Solutions.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="section section-dark" style={{ paddingTop: 40 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {posts.map((post) => (
                            <article
                                key={post.title}
                                className="card card-glass"
                                style={{ padding: '2rem', cursor: 'default' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: 12,
                                        marginBottom: 12,
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
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
                                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>
                                        {post.date} · {post.readTime}
                                    </span>
                                </div>

                                <h2 className="heading-md" style={{ marginBottom: 8, fontSize: '1.25rem' }}>
                                    {post.title}
                                </h2>
                                <p className="text-base">{post.excerpt}</p>
                            </article>
                        ))}
                    </div>

                    {/* LinkedIn CTA */}
                    <div
                        style={{
                            marginTop: '3rem',
                            textAlign: 'center',
                            padding: '2rem',
                            borderRadius: 16,
                            background: 'rgba(0,122,255,0.05)',
                            border: '1px solid rgba(0,122,255,0.12)',
                        }}
                    >
                        <h3 className="heading-md" style={{ marginBottom: 8 }}>
                            Follow Us on LinkedIn
                        </h3>
                        <p className="text-base" style={{ marginBottom: 20 }}>
                            Get the latest insights, project updates, and AI strategy content
                            delivered to your feed.
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
                </div>
            </section>
        </div>
    );
}
