import React, { useEffect, useState, useRef } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');
  const [displayPercent, setDisplayPercent] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const TOTAL_DURATION = 2200; // ms for the loader animation

  // Animate progress bar smoothly
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const raw = Math.min(elapsed / TOTAL_DURATION, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);
      setDisplayPercent(pct);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Loading complete → trigger reveal
        setTimeout(() => setPhase('reveal'), 200);
        setTimeout(() => {
          setPhase('done');
          onComplete();
        }, 900);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`page-loader-overlay ${phase === 'reveal' ? 'page-loader-exit' : ''}`}
      aria-label="Loading portfolio"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background grid pattern */}
      <div className="page-loader-grid" />

      {/* Center content */}
      <div className="page-loader-center">
        {/* Logo / Name */}
        <div className="page-loader-logo">
          <span className="page-loader-vk">VK</span>
          <span className="page-loader-dot" />
        </div>

        <div className="page-loader-name">
          <span className="page-loader-name-text">VIJAY KAMBLE</span>
        </div>

        <div className="page-loader-title">Full Stack Developer</div>

        {/* Progress bar */}
        <div className="page-loader-bar-wrap">
          <div
            className="page-loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percent counter */}
        <div className="page-loader-percent">{displayPercent}%</div>
      </div>

      {/* Corner decorations */}
      <div className="page-loader-corner page-loader-corner-tl">
        <span />
        <span />
      </div>
      <div className="page-loader-corner page-loader-corner-tr">
        <span />
        <span />
      </div>
      <div className="page-loader-corner page-loader-corner-bl">
        <span />
        <span />
      </div>
      <div className="page-loader-corner page-loader-corner-br">
        <span />
        <span />
      </div>

      {/* Scanning line */}
      <div className="page-loader-scanline" />
    </div>
  );
}
