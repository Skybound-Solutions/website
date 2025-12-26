import Link from 'next/link';
import { CSSProperties } from 'react';
import LogoText from './LogoText';

const navStyles: { [key: string]: CSSProperties } = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(11, 17, 32, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    inner: {
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    links: {
        display: 'flex',
        gap: '2rem',
    },
    link: {
        fontSize: '0.95rem',
        fontWeight: '500',
        color: 'var(--secondary)',
    }
};

export default function Navbar() {
    return (
        <nav style={navStyles.nav}>
            <div className="container" style={navStyles.inner}>
                <Link href="/" style={navStyles.logo}>
                    <LogoText size="default" />
                </Link>
                <div style={navStyles.links}>
                    <Link href="/" style={navStyles.link}>Home</Link>
                    <Link href="#services" style={navStyles.link}>Services</Link>
                    <Link href="#contact" style={navStyles.link}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
