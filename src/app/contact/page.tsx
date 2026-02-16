'use client';

import { useState, FormEvent } from 'react';
import type { Metadata } from 'next';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            {/* Header */}
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
                    <div className="section-label">Contact</div>
                    <h1 className="heading-xl" style={{ marginBottom: 16 }}>
                        Let&apos;s <span className="text-gradient">Talk</span>
                    </h1>
                    <p className="text-lg">
                        Every project starts with a conversation. Tell us about what you&apos;re building
                        and we&apos;ll show you what&apos;s possible.
                    </p>
                </div>
            </section>

            {/* Form + Info */}
            <section className="section section-dark" style={{ paddingTop: 40 }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '3rem',
                            maxWidth: 1000,
                            margin: '0 auto',
                        }}
                    >
                        {/* Contact Form */}
                        <div className="card card-glass" style={{ padding: '2.5rem' }}>
                            <h2 className="heading-md" style={{ marginBottom: 24 }}>
                                Send a Message
                            </h2>

                            {status === 'sent' ? (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '3rem 1rem',
                                    }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: 16 }}>✓</div>
                                    <h3 className="heading-md" style={{ marginBottom: 8 }}>
                                        Message Sent!
                                    </h3>
                                    <p className="text-base">
                                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                                >
                                    <div>
                                        <label className="label" htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            className="input"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="label" htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            className="input"
                                            type="email"
                                            required
                                            placeholder="you@company.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="label" htmlFor="company">Company (optional)</label>
                                        <input
                                            id="company"
                                            className="input"
                                            type="text"
                                            placeholder="Your company"
                                            value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="label" htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            className="textarea"
                                            required
                                            placeholder="Tell us about your project or question..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p style={{ color: 'var(--bright-orange)', fontSize: '0.9rem' }}>
                                            Something went wrong. Please try again or email us directly.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={status === 'sending'}
                                        style={{ width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
                            <div>
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                                    Email Us
                                </h3>
                                <a
                                    href="mailto:info@skyboundmi.com"
                                    style={{ color: 'var(--sky-blue)', fontSize: '1.1rem' }}
                                >
                                    info@skyboundmi.com
                                </a>
                            </div>

                            <div>
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                                    Location
                                </h3>
                                <p className="text-base">Michigan, USA</p>
                                <p className="text-sm" style={{ marginTop: 4 }}>
                                    We work with clients nationwide and remotely.
                                </p>
                            </div>

                            <div>
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                                    Response Time
                                </h3>
                                <p className="text-base">
                                    We typically respond within 24 hours on business days.
                                </p>
                            </div>

                            <div>
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>
                                    Connect
                                </h3>
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <a
                                        href="https://linkedin.com/company/skybound-solutions-llc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary btn-sm"
                                    >
                                        LinkedIn ↗
                                    </a>
                                    <a
                                        href="https://portal.skyboundmi.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary btn-sm"
                                    >
                                        Client Portal ↗
                                    </a>
                                </div>
                            </div>

                            <div
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: 12,
                                    background: 'rgba(0,212,170,0.06)',
                                    border: '1px solid rgba(0,212,170,0.15)',
                                }}
                            >
                                <h4 style={{ color: 'var(--electric-teal)', fontSize: '0.95rem', fontWeight: 600, marginBottom: 8 }}>
                                    Existing Client?
                                </h4>
                                <p className="text-sm">
                                    Access your project dashboard, invoices, and communications through the{' '}
                                    <a
                                        href="https://portal.skyboundmi.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--electric-teal)', textDecoration: 'underline' }}
                                    >
                                        Client Portal
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
