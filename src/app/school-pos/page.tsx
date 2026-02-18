'use client';

import { useState } from 'react';
import Image from 'next/image';
import AuroraBackground from '@/components/AuroraBackground';

const features = [
    { icon: '💳', title: 'Cards + Cash', desc: 'Accept cards via Stripe M2 reader and cash — never miss a sale.' },
    { icon: '🏫', title: 'Built for Schools', desc: 'Purpose-built for concession stands, not a generic retail POS.' },
    { icon: '📊', title: 'Event Tracking', desc: 'Create, run, close, and report on every event automatically.' },
    { icon: '👋', title: 'Volunteer-Friendly', desc: 'So intuitive, anyone can pick it up and start selling.' },
    { icon: '📈', title: 'Real-Time Reports', desc: 'See live sales data and close-out reports by category.' },
    { icon: '📡', title: 'Works Offline', desc: 'Transactions sync automatically when connectivity returns.' },
];

const painPoints = [
    'Losing sales when parents don\'t have cash',
    'Counting and reconciliation errors at close-out',
    'No visibility into what sold or how much you made',
    'Long lines that frustrate families and slow revenue',
    'Volunteers struggling with unfamiliar systems',
];

const steps = [
    { num: '01', title: 'We Set It Up', desc: 'Personal onboarding, hardware config, Stripe account setup, and your product menu pre-loaded. Hands-on — not a help ticket.' },
    { num: '02', title: 'Your Volunteers Sell', desc: 'Intuitive iPad POS that anyone can operate — food, drinks, merch, donations, and auctions.' },
    { num: '03', title: 'You See the Results', desc: 'Event close-out reports, sales by category, revenue analytics — all in real time.' },
];

const comparisonData = [
    { feature: 'Annual Cost', us: '$299/yr', boosterhub: '$500+/yr', square: '$0 + fees', zeffy: '$0 + tips', cashbox: '$0' },
    { feature: 'Processing Fees', us: '2.2% + $0.10', boosterhub: '2.9% + $0.30', square: '2.6% + $0.10', zeffy: '0% (tip model)', cashbox: 'N/A' },
    { feature: 'School-Specific Design', us: '✅', boosterhub: '⚠️ Partial', square: '❌', zeffy: '❌', cashbox: '❌' },
    { feature: 'Event Tracking', us: '✅', boosterhub: '⚠️ Limited', square: '❌', zeffy: '❌', cashbox: '❌' },
    { feature: 'Offline Mode', us: '✅', boosterhub: '❌', square: '✅', zeffy: '❌', cashbox: '✅' },
    { feature: 'Local Support', us: '✅ Personal', boosterhub: '❌ Email only', square: '❌ Self-serve', zeffy: '❌ Email only', cashbox: '❌' },
    { feature: 'Setup Assistance', us: '✅ Full', boosterhub: '⚠️ Limited', square: '❌ DIY', zeffy: '❌ DIY', cashbox: '❌' },
    { feature: 'Donations & Auctions', us: '✅', boosterhub: '✅', square: '⚠️ Workaround', zeffy: '✅', cashbox: '❌' },
];

const faqItems = [
    { q: 'Do we need our own Stripe account?', a: 'Yes — and we help you set it up. Your funds go directly to your organization\'s bank account. Stripe offers nonprofit processing rates (2.2% + $0.10).' },
    { q: 'What hardware do we need?', a: 'An iPad (any model from the last 5 years) and a Stripe M2 card reader. Total hardware cost is approximately $400. We help you source everything.' },
    { q: 'Can we use it for donations and auctions?', a: 'Absolutely. The POS supports food, drinks, candy, merchandise, donations, and silent auctions — all in a single interface.' },
    { q: 'What if we have custom needs?', a: 'Custom development is available. We can tailor the system to your specific concession menu, event types, or reporting needs.' },
    { q: 'Is there a contract?', a: 'No long-term contracts. The subscription plan is annual but you can cancel anytime. We believe in earning your business every year.' },
];

export default function SchoolPOSPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [form, setForm] = useState({
        schoolName: '',
        contactName: '',
        email: '',
        phone: '',
        eventsPerYear: '',
        estimatedRevenue: '',
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
                body: JSON.stringify({
                    name: form.contactName,
                    email: form.email,
                    company: form.schoolName,
                    budget: `Events/yr: ${form.eventsPerYear || 'N/A'} | Est. Revenue: ${form.estimatedRevenue || 'N/A'}`,
                    message: `[School POS Lead]\nPhone: ${form.phone || 'N/A'}\n\n${form.message}`,
                    _source: 'school-pos',
                }),
            });
            setStatus(res.ok ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>

            {/* ===== HERO ===== */}
            <section
                className="section-flow"
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src="/school-pos-hero.png"
                    alt="iPad POS at a school concession stand"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center 40%', zIndex: 0 }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(10,15,30,0.4) 0%, rgba(10,15,30,0.7) 50%, rgba(10,15,30,0.95) 100%)',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
                <AuroraBackground variant="hero" />
                <div
                    className="container"
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        maxWidth: 800,
                        padding: '60px 24px',
                    }}
                >
                    <div className="section-label animate-fade-in">School Concession POS</div>
                    <h1 className="heading-xl animate-fade-in animate-delay-1" style={{ marginBottom: 20 }}>
                        Turn Your Concession Stand Into a{' '}
                        <span className="text-gradient">Revenue Machine</span>
                    </h1>
                    <p className="text-lg animate-fade-in animate-delay-2" style={{ maxWidth: 600, margin: '0 auto 32px' }}>
                        Schools that accept cards raise 30–40% more per event. Our iPad POS makes it effortless.
                    </p>
                    <div className="animate-fade-in animate-delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-teal btn-lg">Get Started</a>
                        <a href="#features" className="btn btn-secondary btn-lg">See Features</a>
                    </div>
                </div>
            </section>

            {/* ===== PROBLEM STATEMENT ===== */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div className="section-label">The Problem</div>
                            <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                                Still Running Your Concession Stand With a{' '}
                                <span style={{ color: 'var(--bright-orange)' }}>Cash Box?</span>
                            </h2>
                            <div
                                className="stat-callout"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 16,
                                    padding: '20px 32px',
                                    borderRadius: 16,
                                    background: 'linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,212,170,0.1) 100%)',
                                    border: '1px solid rgba(0,212,170,0.2)',
                                    margin: '24px 0',
                                }}
                            >
                                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--electric-teal)' }}>67%</span>
                                <span style={{ color: '#94a3b8', fontSize: '1rem', textAlign: 'left' }}>
                                    of parents don&apos;t carry<br />cash to school events
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 500, margin: '24px auto 0', textAlign: 'left' }}>
                                {painPoints.map((p) => (
                                    <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#94a3b8', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--bright-orange)', fontSize: '0.8rem', marginTop: 4 }}>✕</span>
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PRODUCT FEATURES ===== */}
            <section id="features" className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">Features</div>
                        <h2 className="heading-lg">Everything Your Concession Stand Needs</h2>
                        <p className="text-lg">Purpose-built for schools. Not a generic retail POS.</p>
                    </div>
                    <div className="grid grid-3">
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className={`card card-glass card-aurora animate-fade-in animate-delay-${(i % 4) + 1}`}
                                style={{ padding: '2rem' }}
                            >
                                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{f.icon}</div>
                                <h3 className="heading-sm" style={{ marginBottom: 8 }}>{f.title}</h3>
                                <p className="text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p className="text-sm" style={{ color: '#64748b' }}>
                            Supports: food, drinks, candy, merchandise, donations, and silent auctions
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="section-header">
                        <div className="section-label">How It Works</div>
                        <h2 className="heading-lg">Three Steps to More Revenue</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {steps.map((s) => (
                            <div
                                key={s.num}
                                style={{
                                    display: 'flex',
                                    gap: 24,
                                    alignItems: 'flex-start',
                                }}
                            >
                                <span
                                    className="text-gradient"
                                    style={{ fontSize: '2.5rem', fontWeight: 800, minWidth: 60, lineHeight: 1 }}
                                >
                                    {s.num}
                                </span>
                                <div>
                                    <h3 style={{ color: 'var(--white)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 6 }}>
                                        {s.title}
                                    </h3>
                                    <p className="text-base">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SCREENSHOTS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">See It In Action</div>
                        <h2 className="heading-lg">Real App. Real Events.</h2>
                        <p className="text-lg">
                            These screenshots are from a live Peck Pirates weightlifting concession stand on Feb 18, 2026.
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: 20,
                            overflowX: 'auto',
                            paddingBottom: 16,
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        {[
                            { src: '/school-pos-ss-menu.png', caption: 'Product Menu — tap any item to add to cart' },
                            { src: '/school-pos-ss-payment.png', caption: 'Payment Successful — card charged in seconds' },
                            { src: '/school-pos-ss-receipt.png', caption: 'Digital Receipt — customer scans QR code' },
                            { src: '/school-pos-ss-transactions.png', caption: 'Transaction Log — all sales tracked in real time' },
                            { src: '/school-pos-ss-transaction-detail.png', caption: 'Transaction Detail — itemized with void & refund options' },
                        ].map((shot) => (
                            <div
                                key={shot.src}
                                style={{
                                    flex: '0 0 auto',
                                    width: 'clamp(260px, 45vw, 480px)',
                                    scrollSnapAlign: 'start',
                                    borderRadius: 16,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    background: 'var(--surface)',
                                }}
                            >
                                <Image
                                    src={shot.src}
                                    alt={shot.caption}
                                    width={960}
                                    height={720}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                                <p
                                    style={{
                                        padding: '12px 16px',
                                        fontSize: '0.82rem',
                                        color: '#94a3b8',
                                        margin: 0,
                                        borderTop: '1px solid rgba(255,255,255,0.06)',
                                    }}
                                >
                                    {shot.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.8rem', marginTop: 8 }}>
                        ← Scroll to see all screens
                    </p>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section id="pricing" className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="section-header">
                        <div className="section-label">Pricing</div>
                        <h2 className="heading-lg">Simple, Transparent Pricing</h2>
                        <p className="text-lg">Choose the plan that fits your organization.</p>
                    </div>
                    <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                        {/* Subscription */}
                        <div
                            className="card card-glass"
                            style={{
                                padding: '2.5rem',
                                border: '1px solid rgba(0,212,170,0.3)',
                                position: 'relative',
                            }}
                        >
                            <span
                                style={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    padding: '4px 12px',
                                    borderRadius: 99,
                                    background: 'rgba(0,212,170,0.15)',
                                    color: 'var(--electric-teal)',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                }}
                            >
                                Recommended
                            </span>
                            <h3 className="heading-md" style={{ marginBottom: 4 }}>Subscription</h3>
                            <p className="text-sm" style={{ marginBottom: 24 }}>Best for most schools</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>One-time setup</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>$500</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>Annual software license</span>
                                    <span style={{ color: 'var(--electric-teal)', fontWeight: 700, fontSize: '1.25rem' }}>$299/yr</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>Hardware (iPad + reader)</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>~$400</span>
                                </div>
                                <div
                                    style={{
                                        height: 1,
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                                        margin: '4px 0',
                                    }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>Processing fee</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>2.2% + $0.10</span>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: 4 }}>
                                    Stripe nonprofit rate • funds go directly to your account
                                </p>
                            </div>
                        </div>

                        {/* Buy Outright */}
                        <div className="card card-glass" style={{ padding: '2.5rem' }}>
                            <h3 className="heading-md" style={{ marginBottom: 4 }}>Buy Outright</h3>
                            <p className="text-sm" style={{ marginBottom: 24 }}>Own it forever</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>One-time purchase</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 700, fontSize: '1.25rem' }}>$1,200–$1,500</span>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Includes setup + perpetual license</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>Hardware (iPad + reader)</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>~$400</span>
                                </div>
                                <div
                                    style={{
                                        height: 1,
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                                        margin: '4px 0',
                                    }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>Processing fee</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>2.2% + $0.10</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#94a3b8' }}>Optional annual support</span>
                                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>$200–$300/yr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">Compare</div>
                        <h2 className="heading-lg">How We Stack Up</h2>
                    </div>
                    <div style={{ overflowX: 'auto', borderRadius: 16 }}>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th className="comparison-highlight">PeckPiratesPOS</th>
                                    <th>BoosterHub</th>
                                    <th>Square</th>
                                    <th>Zeffy</th>
                                    <th>Cash Box</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row) => (
                                    <tr key={row.feature}>
                                        <td style={{ fontWeight: 600, color: 'var(--white)' }}>{row.feature}</td>
                                        <td className="comparison-highlight">{row.us}</td>
                                        <td>{row.boosterhub}</td>
                                        <td>{row.square}</td>
                                        <td>{row.zeffy}</td>
                                        <td>{row.cashbox}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIAL / CASE STUDY ===== */}
            <section className="section">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div className="section-header">
                        <div className="section-label">Case Study</div>
                        <h2 className="heading-lg">Proven at Peck Community Schools</h2>
                    </div>
                    <div
                        className="card card-glass card-aurora"
                        style={{
                            padding: '3rem',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(0,122,255,0.05) 100%)',
                            border: '1px solid rgba(0,212,170,0.15)',
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: 16 }}>🏈</div>
                        <h3 className="heading-md" style={{ marginBottom: 12 }}>Peck Pirates — Pilot Deployment</h3>
                        <p className="text-lg" style={{ marginBottom: 24 }}>
                            Our first deployment is live at Peck Community School District — our home district. Built by a Peck parent who coaches esports and volunteers at the concession stand. Detailed results and a full case study are coming after the current season.
                        </p>
                        <div className="grid grid-3" style={{ gap: '1rem', marginBottom: 24 }}>
                            {[
                                { metric: '🎉', label: 'Live Deployment' },
                                { metric: '📊', label: 'Results Coming Soon' },
                                { metric: '💬', label: 'Testimonials Pending' },
                            ].map((m) => (
                                <div
                                    key={m.label}
                                    style={{
                                        padding: '16px',
                                        borderRadius: 12,
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                    }}
                                >
                                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{m.metric}</div>
                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{m.label}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic' }}>
                            Want to be an early adopter? Contact us below to get priority pricing and setup.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== BUILT BY A BOOSTER PARENT ===== */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div className="section-label">Why Us</div>
                        <h2 className="heading-lg">Built by a Booster Parent,<br />Not a Software Company</h2>
                    </div>
                    <div
                        className="card card-glass"
                        style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            background: 'linear-gradient(135deg, rgba(0,122,255,0.05) 0%, rgba(0,212,170,0.05) 100%)',
                            border: '1px solid rgba(0,212,170,0.15)',
                        }}
                    >
                        <p className="text-lg" style={{ color: '#e2e8f0' }}>
                            I&apos;m Brian — a Peck, Michigan parent, booster club member, and esports coach. I built this POS because I was the one standing behind the concession stand watching parents walk away when they didn&apos;t have cash.
                        </p>
                        <p className="text-base">
                            This isn&apos;t a side project from a big tech company. It&apos;s a tool built from firsthand experience at our small-town school, by someone who knows what it&apos;s like to count out a cash box at 10pm after a football game.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                            {[
                                '🏫 Peck Community Schools Parent',
                                '🎮 Esports Coach',
                                '🏈 Booster Club Member',
                                '💻 Software Engineer',
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    style={{
                                        padding: '6px 14px',
                                        borderRadius: 8,
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        color: '#94a3b8',
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="section section-dark">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div className="section-header">
                        <div className="section-label">FAQ</div>
                        <h2 className="heading-lg">Frequently Asked Questions</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {faqItems.map((item, i) => (
                            <div key={i} className="faq-item">
                                <button
                                    className="faq-trigger"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    <span style={{ fontWeight: 600, color: 'var(--white)', fontSize: '1rem', textAlign: 'left' }}>
                                        {item.q}
                                    </span>
                                    <span
                                        style={{
                                            color: 'var(--sky-blue)',
                                            fontSize: '1.25rem',
                                            transition: 'transform 0.3s ease',
                                            transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                                            flexShrink: 0,
                                        }}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className="faq-content"
                                    style={{
                                        maxHeight: openFaq === i ? 200 : 0,
                                        opacity: openFaq === i ? 1 : 0,
                                    }}
                                >
                                    <p className="text-base" style={{ paddingBottom: 16 }}>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT FORM ===== */}
            <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div
                    className="aurora-glow aurora-glow-teal"
                    style={{ top: '20%', left: '10%', opacity: 0.08, width: 600, height: 400 }}
                />
                <div
                    className="aurora-glow aurora-glow-blue"
                    style={{ bottom: '10%', right: '10%', opacity: 0.08, width: 500, height: 400 }}
                />
                <div className="container" style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}>
                    <div className="section-header">
                        <div className="section-label">Get Started</div>
                        <h2 className="heading-lg">Ready to Raise More at Your Events?</h2>
                        <p className="text-lg">Tell us about your school and we&apos;ll be in touch.</p>
                    </div>

                    {status === 'success' ? (
                        <div
                            className="card card-glass"
                            style={{ padding: '3rem', textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                            <h3 className="heading-md" style={{ marginBottom: 8 }}>We Got Your Message!</h3>
                            <p className="text-lg">
                                We&apos;ll be in touch soon to discuss how we can help your concession stand.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="card card-glass" style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                                    <div>
                                        <label className="label">School / Organization Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.schoolName}
                                            onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                                            className="input"
                                            placeholder="e.g. Peck Community School District"
                                        />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
                                        <div>
                                            <label className="label">Contact Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.contactName}
                                                onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                                                className="input"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="input"
                                                placeholder="you@school.org"
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
                                        <div>
                                            <label className="label">Phone</label>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                className="input"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Events Per Year</label>
                                            <input
                                                type="text"
                                                value={form.eventsPerYear}
                                                onChange={(e) => setForm({ ...form, eventsPerYear: e.target.value })}
                                                className="input"
                                                placeholder="e.g. 15-20"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label">Estimated Annual Concession Revenue</label>
                                        <input
                                            type="text"
                                            value={form.estimatedRevenue}
                                            onChange={(e) => setForm({ ...form, estimatedRevenue: e.target.value })}
                                            className="input"
                                            placeholder="e.g. $5,000 - $10,000"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">Tell Us About Your Needs</label>
                                        <textarea
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="input"
                                            rows={4}
                                            placeholder="What sports/events do you run concessions for? Any specific challenges?"
                                            style={{ resize: 'vertical', minHeight: 100 }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-teal btn-lg"
                                        disabled={status === 'sending'}
                                        style={{ width: '100%' }}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Get Started →'}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center' }}>
                                            Something went wrong. Please try again or email us at info@skyboundmi.com.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
