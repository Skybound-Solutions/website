import { CSSProperties } from 'react';

const footerStyles: { [key: string]: CSSProperties } = {
    footer: {
        background: 'var(--surface)',
        padding: '60px 0',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    text: {
        color: 'var(--secondary)',
        textAlign: 'center',
        fontSize: '0.9rem',
    }
};

export default function Footer() {
    return (
        <footer style={footerStyles.footer}>
            <div className="container" style={footerStyles.text}>
                <p>&copy; {new Date().getFullYear()} Skybound. All rights reserved.</p>
            </div>
        </footer>
    );
}
