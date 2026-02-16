import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/blog', label: 'Blog' },
        ],
        services: [
            { href: '/services#consulting', label: 'AI Consulting' },
            { href: '/services#development', label: 'Custom Development' },
            { href: '/services#automation', label: 'Workflow Automation' },
        ],
        connect: [
            { href: '/contact', label: 'Contact Us' },
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
                            src="/brand/logo-horizontal-dark.png"
                            alt="Skybound Solutions"
                            width={160}
                            height={36}
                            style={{ height: 32, width: 'auto', marginBottom: 16 }}
                        />
                        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            AI-powered consulting and custom development for businesses ready to deploy intelligent solutions.
                        </p>
                        <p
                            style={{
                                color: '#64748b',
                                fontSize: '0.85rem',
                                marginTop: 16,
                            }}
                        >
                            📍 Michigan, USA
                            <br />
                            ✉️ info@skyboundmi.com
                        </p>
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
                    <p style={{ color: '#475569', fontSize: '0.8rem' }}>
                        Built with precision. Powered by AI.
                    </p>
                </div>
            </div>
        </footer>
    );
}
