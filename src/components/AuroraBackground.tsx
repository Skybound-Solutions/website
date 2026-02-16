'use client';

export default function AuroraBackground({ variant = 'page' }: { variant?: 'hero' | 'page' }) {
    const isHero = variant === 'hero';

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
            }}
            aria-hidden="true"
        >
            {/* Central radial bloom — atmospheric spotlight behind content */}
            <div
                style={{
                    position: 'absolute',
                    top: isHero ? '35%' : '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isHero ? '120%' : '100%',
                    height: isHero ? '80%' : '70%',
                    background: isHero
                        ? 'radial-gradient(ellipse 50% 50% at center, rgba(0,122,255,0.12) 0%, rgba(0,212,170,0.06) 30%, transparent 70%)'
                        : 'radial-gradient(ellipse 45% 45% at center, rgba(0,122,255,0.08) 0%, rgba(0,212,170,0.04) 30%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Aurora blob - blue */}
            <div
                className="aurora-glow aurora-glow-blue"
                style={{
                    top: '-15%',
                    right: '-5%',
                    width: isHero ? 800 : 550,
                    height: isHero ? 800 : 550,
                    opacity: isHero ? 0.45 : 0.3,
                    filter: 'blur(150px)',
                    animation: 'aurora-drift-1 20s ease-in-out infinite',
                }}
            />
            {/* Aurora blob - teal */}
            <div
                className="aurora-glow aurora-glow-teal"
                style={{
                    bottom: isHero ? '-15%' : '5%',
                    left: '-10%',
                    width: isHero ? 700 : 500,
                    height: isHero ? 700 : 500,
                    opacity: isHero ? 0.3 : 0.2,
                    filter: 'blur(160px)',
                    animation: 'aurora-drift-2 25s ease-in-out infinite',
                }}
            />
            {/* Aurora blob - purple */}
            <div
                className="aurora-glow aurora-glow-purple"
                style={{
                    top: '20%',
                    left: '15%',
                    width: isHero ? 550 : 400,
                    height: isHero ? 550 : 400,
                    opacity: isHero ? 0.22 : 0.15,
                    filter: 'blur(140px)',
                    animation: 'aurora-drift-3 18s ease-in-out infinite',
                }}
            />

            {/* Perspective Grid */}
            <svg
                viewBox="0 0 1440 400"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: isHero ? '45%' : '40%',
                    opacity: isHero ? 0.35 : 0.2,
                }}
            >
                <defs>
                    <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0,212,170,0)" />
                        <stop offset="30%" stopColor="rgba(0,212,170,0.4)" />
                        <stop offset="100%" stopColor="rgba(0,212,170,0.6)" />
                    </linearGradient>
                    <linearGradient id="grid-h-fade" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(0,212,170,0)" />
                        <stop offset="20%" stopColor="rgba(0,212,170,0.3)" />
                        <stop offset="50%" stopColor="rgba(0,212,170,0.5)" />
                        <stop offset="80%" stopColor="rgba(0,212,170,0.3)" />
                        <stop offset="100%" stopColor="rgba(0,212,170,0)" />
                    </linearGradient>
                </defs>

                {/* Horizontal perspective lines */}
                {[0.2, 0.32, 0.44, 0.54, 0.63, 0.71, 0.78, 0.84, 0.89, 0.93, 0.96, 0.99].map((t, i) => (
                    <line
                        key={`h-${i}`}
                        x1="0"
                        y1={t * 400}
                        x2="1440"
                        y2={t * 400}
                        stroke="url(#grid-h-fade)"
                        strokeWidth={0.5 + i * 0.08}
                    />
                ))}

                {/* Vertical perspective lines converging to vanishing point at center top */}
                {[-0.6, -0.4, -0.25, -0.12, -0.04, 0.04, 0.12, 0.25, 0.4, 0.6].map((offset, i) => (
                    <line
                        key={`v-${i}`}
                        x1={720}
                        y1={0}
                        x2={720 + offset * 1440}
                        y2={400}
                        stroke="url(#grid-fade)"
                        strokeWidth={0.5 + Math.abs(offset) * 0.5}
                    />
                ))}
            </svg>

            {/* Horizon glow */}
            <div
                style={{
                    position: 'absolute',
                    bottom: isHero ? '30%' : '25%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 800,
                    height: 120,
                    background: 'radial-gradient(ellipse at center, rgba(255,160,60,0.15) 0%, rgba(255,120,30,0.08) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}
