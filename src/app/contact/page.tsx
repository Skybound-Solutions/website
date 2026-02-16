'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const budgetRanges = [
    'Under $5,000',
    '$5,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000 – $50,000',
    '$50,000+',
    'Not sure yet',
    'Monthly retainer',
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            setStatus(res.ok ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{ paddingTop: 'var(--header-height)' }}>
                <section
                    className="section"
                    style={{
                        minHeight: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div className="container" style={{ maxWidth: 500 }}>
                        <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                        <h1 className="heading-lg" style={{ marginBottom: 12 }}>Message Sent</h1>
                        <p className="text-lg">
                            We&apos;ll get back to you within 1 business day. Looking forward to learning about your project.
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 32 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
                    <div className="section-label">Get In Touch</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Book a{' '}
                        <span className="text-gradient">Discovery Call</span>
                    </h1>
                    <p className="text-lg">
                        Every project starts with a free 15-minute call. Tell us what you&apos;re building and we&apos;ll show you what&apos;s possible.
                    </p>
                </div>
            </section>

            <section className="section section-dark" style={{ paddingTop: 20 }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '3rem',
                        }}
                    >
                        {/* Booking Widget Placeholder + Form */}
                        <div>
                            {/* Booking Widget — swap out for Cal.com/Calendly embed later */}
                            <div
                                className="card card-glass"
                                style={{
                                    padding: '2rem',
                                    marginBottom: '2rem',
                                    textAlign: 'center',
                                    background: 'rgba(0, 122, 255, 0.05)',
                                    border: '1px solid rgba(0, 122, 255, 0.15)',
                                }}
                            >
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>📅 Schedule Directly</h3>
                                <p className="text-sm" style={{ marginBottom: 16 }}>
                                    Prefer to skip the form? Book a free 15-minute discovery call directly.
                                </p>
                                <a
                                    href="mailto:info@skyboundmi.com?subject=Discovery%20Call%20Request"
                                    className="btn btn-primary btn-sm"
                                >
                                    Request a Time →
                                </a>
                                <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: 8 }}>
                                    Scheduling widget coming soon — for now, email us with your preferred time.
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit}>
                                <h3 className="heading-sm" style={{ marginBottom: 16 }}>Or send us a message</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="input"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                            className="input"
                                            placeholder="Company name (optional)"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                                            Budget Range
                                        </label>
                                        <select
                                            value={form.budget}
                                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
                                            className="input"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <option value="">Select a range (optional)</option>
                                            {budgetRanges.map((r) => (
                                                <option key={r} value={r}>{r}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>
                                            Tell us about your project *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="input"
                                            placeholder="What are you building? What problem are you trying to solve?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-teal btn-lg"
                                        disabled={status === 'sending'}
                                        style={{ width: '100%' }}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                                            Something went wrong. Please try again or email us directly.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <div className="card card-glass" style={{ padding: '2rem' }}>
                                    <h3 className="heading-sm" style={{ marginBottom: 16 }}>Contact Info</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        <div>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 4 }}>📞 Phone</p>
                                            <a href="tel:+18103780620" style={{ color: '#e2e8f0', fontWeight: 500 }}>
                                                (810) 378-0620
                                            </a>
                                        </div>
                                        <div>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 4 }}>✉️ Email</p>
                                            <a href="mailto:info@skyboundmi.com" style={{ color: '#e2e8f0', fontWeight: 500 }}>
                                                info@skyboundmi.com
                                            </a>
                                        </div>
                                        <div>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 4 }}>📍 Location</p>
                                            <p style={{ color: '#e2e8f0', fontWeight: 500 }}>
                                                Peck, Michigan — serving clients nationwide
                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 4 }}>⏱️ Response Time</p>
                                            <p style={{ color: '#e2e8f0', fontWeight: 500 }}>Within 1 business day</p>
                                        </div>
                                        <div>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 4 }}>🔗 Social</p>
                                            <a
                                                href="https://linkedin.com/company/skybound-solutions-llc"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: 'var(--sky-blue)', fontWeight: 500 }}
                                            >
                                                LinkedIn ↗
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-glass" style={{ padding: '2rem' }}>
                                    <h3 className="heading-sm" style={{ marginBottom: 12 }}>Existing Client?</h3>
                                    <p className="text-sm" style={{ marginBottom: 16 }}>
                                        Access your project dashboard, invoices, and communication.
                                    </p>
                                    <a
                                        href="https://portal.skyboundmi.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary btn-sm"
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Client Portal ↗
                                    </a>
                                </div>

                                <div
                                    className="card card-glass"
                                    style={{
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        background: 'rgba(0, 212, 170, 0.05)',
                                        border: '1px solid rgba(0, 212, 170, 0.15)',
                                    }}
                                >
                                    <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                                        <strong style={{ color: 'var(--white)' }}>Fully insured</strong> — $1M E&O and Cyber Liability coverage
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
