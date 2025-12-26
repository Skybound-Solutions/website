export default function Logo({ className = '', size = 32 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Ring / Horizon Instrument */}
            <circle cx="16" cy="16" r="15" stroke="var(--secondary)" strokeWidth="1.5" strokeOpacity="0.3" />

            {/* Abstract Wing / Ascent Trajectory */}
            <path
                d="M6 22L12 11L18 11L28 6L18 24H12L9 26L8 24L6 22Z"
                fill="var(--primary)"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeLinejoin="round"
            />

            {/* Circuit Nodes (Tech Overlay) */}
            <circle cx="28" cy="6" r="2" fill="var(--accent)" />
            <circle cx="12" cy="11" r="1.5" fill="#fff" />
            <circle cx="18" cy="24" r="1.5" fill="#fff" />

            {/* Motion Lines */}
            <path d="M4 16H8" stroke="var(--secondary)" strokeWidth="1" strokeLinecap="round" />
            <path d="M26 26L30 22" stroke="var(--secondary)" strokeWidth="1" strokeLinecap="round" />
        </svg>
    );
}
