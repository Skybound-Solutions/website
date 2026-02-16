'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/work', label: 'Work' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                background: scrolled ? 'rgba(10, 15, 30, 0.95)' : 'rgba(10, 15, 30, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
                transition: 'all 0.3s ease',
            }}
        >
            <div
                className="container"
                style={{
                    height: 'var(--header-height)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src="/brand/logo-horizontal-dark.png"
                        alt="Skybound Solutions"
                        width={200}
                        height={44}
                        priority
                        style={{ height: 42, width: 'auto' }}
                    />
                </Link>

                {/* Desktop Links */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.75rem',
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: '#94a3b8',
                                transition: 'color 0.2s ease',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn btn-primary btn-sm"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: 5,
                        padding: 8,
                        zIndex: 1001,
                    }}
                >
                    <span
                        style={{
                            width: 24,
                            height: 2,
                            background: '#fff',
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }}
                    />
                    <span
                        style={{
                            width: 24,
                            height: 2,
                            background: '#fff',
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            opacity: mobileOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            width: 24,
                            height: 2,
                            background: '#fff',
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100dvh',
                    background: 'rgba(10, 15, 30, 0.98)',
                    backdropFilter: 'blur(30px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease',
                    zIndex: 999,
                }}
            >
                <Image
                    src="/brand/logo-icon-dark.png"
                    alt="Skybound Solutions"
                    width={64}
                    height={64}
                    style={{ width: 56, height: 56, marginBottom: 8 }}
                />
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#e2e8f0',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className="btn btn-primary"
                    onClick={() => setMobileOpen(false)}
                >
                    Book a Call
                </Link>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
        </nav>
    );
}
