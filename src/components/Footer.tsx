import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/work', label: 'Work' },
            { href: '/blog', label: 'Blog' },
        ],
        services: [
            { href: '/services#consulting', label: 'AI Consulting' },
            { href: '/services#development', label: 'Custom Development' },
            { href: '/services#maintenance', label: 'Maintenance & Support' },
            { href: '/services#partnerships', label: 'Strategic Partnerships' },
        ],
        connect: [
            { href: '/contact', label: 'Book a Discovery Call' },
            { href: 'https://portal.skyboundmi.com', label: 'Client Portal', external: true },
            { href: 'https://linkedin.com/company/skybound-solutions-llc', label: 'LinkedIn', external: true },
        ],
    };

    return (
        <footer
            style={{
                background: '#080c18',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: 60,
                paddingBottom: 30,
            }}
        >
            <div className="container">
                {/* Top Section */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        marginBottom: '3rem',
                    }}
                >
                    {/* Brand Column */}
                    <div style={{ maxWidth: 300 }}>
                        <Image
                            src="/brand/logo-primary-dark.png"
                            alt="Skybound Solutions"
                            width={200}
                            height={200}
                            className="logo-footer"
                            style={{ width: 160, height: 'auto', marginBottom: 20 }}
                        />
                        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            AI-powered consulting and custom development for businesses ready to deploy intelligent solutions.
                        </p>
                        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                                📍 Peck, Michigan — serving clients nationwide
                            </p>
                            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                                📞 <a href="tel:+18103780620" style={{ color: '#64748b' }}>(810) 378-0620</a>
                            </p>
                            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                                ✉️ <a href="mailto:info@skyboundmi.com" style={{ color: '#64748b' }}>info@skyboundmi.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4
                            style={{
                                color: '#e2e8f0',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                marginBottom: 16,
                            }}
                        >
                            Company
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4
                            style={{
                                color: '#e2e8f0',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                marginBottom: 16,
                            }}
                        >
                            Services
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div>
                        <h4
                            style={{
                                color: '#e2e8f0',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                marginBottom: 16,
                            }}
                        >
                            Connect
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {footerLinks.connect.map((link) => (
                                <li key={link.href}>
                                    {'external' in link ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                        >
                                            {link.label} ↗
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider" />

                {/* Bottom Bar */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 24,
                        flexWrap: 'wrap',
                        gap: 12,
                    }}
                >
                    <p style={{ color: '#475569', fontSize: '0.8rem' }}>
                        © {currentYear} Skybound Solutions, LLC. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '4px 10px',
                                borderRadius: 6,
                                background: 'rgba(0, 212, 170, 0.08)',
                                border: '1px solid rgba(0, 212, 170, 0.15)',
                                color: 'var(--electric-teal)',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                            }}
                        >
                            🛡️ LLC · $1M Insured
                        </span>
                        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
                            Built with precision. Powered by AI.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
