export default function LogoText({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'large' }) {
    const height = size === 'large' ? 48 : 36;
    const fontSize = size === 'large' ? 28 : 20;

    return (
        <svg
            height={height}
            viewBox="0 0 280 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ display: 'block' }}
        >
            {/* Background glow effect */}
            <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Wing icon */}
            <g transform="translate(0, 8)">
                <path
                    d="M8 20L14 10L20 10L28 6L20 26H14L11 28L10 26L8 20Z"
                    fill="url(#skyGradient)"
                    filter="url(#glow)"
                />
                <circle cx="28" cy="6" r="2" fill="#fbbf24" />
                <circle cx="14" cy="10" r="1.5" fill="#fff" />
            </g>

            {/* SKYBOUND text */}
            <text
                x="45"
                y="26"
                fontFamily="Inter, system-ui, sans-serif"
                fontSize={fontSize}
                fontWeight="800"
                fill="#e2e8f0"
                letterSpacing="-0.5"
            >
                SKYBOUND
            </text>

            {/* SOLUTIONS text */}
            <text
                x="45"
                y="40"
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="11"
                fontWeight="500"
                fill="#94a3b8"
                letterSpacing="2"
            >
                SOLUTIONS
            </text>
        </svg>
    );
}
