import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Activity, Zap, Compass, X } from 'lucide-react';

interface DevHudOverlayProps {
  isDevMode: boolean;
  onClose: () => void;
}

export const DevHudOverlay: React.FC<DevHudOverlayProps> = ({ isDevMode, onClose }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!isDevMode) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Simple FPS counter
    let lastTime = performance.now();
    let frameCount = 0;
    let animId: number;

    const calcFps = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isDevMode]);

  if (!isDevMode) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none">
      {/* Precision cursor crosshairs */}
      <div
        className="fixed w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-opacity duration-75"
        style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      >
        <div className="w-full h-[1px] bg-[#E8281A]/60 absolute top-1/2 left-0" />
        <div className="h-full w-[1px] bg-[#E8281A]/60 absolute left-1/2 top-0" />
        <span className="absolute left-3 top-3 text-[9px] font-mono text-[#0A0A0A] bg-white/90 px-1 border border-neutral-300 rounded-xs shadow-xs">
          {coords.x}, {coords.y}
        </span>
      </div>

      {/* Floating Blueprint HUD Top-Right */}
      <div className="absolute top-20 right-6 pointer-events-auto bg-neutral-900/95 text-white backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-neutral-700 shadow-2xl font-mono text-[10px] space-y-1.5 min-w-[220px]">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
          <div className="flex items-center gap-1.5 text-red-400 font-bold">
            <Terminal className="w-3 h-3 text-[#E8281A]" />
            <span>DEV_ENGINEER_HUD v2.4</span>
          </div>
          <button
            onClick={onClose}
            className="hover:text-red-400 text-neutral-400 transition-colors cursor-pointer"
            title="Disable Dev Mode"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-1 text-neutral-300">
          <div className="flex justify-between">
            <span className="text-neutral-500">CURSOR_COORDS</span>
            <span className="text-emerald-400 font-bold">X:{coords.x} Y:{coords.y}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">FRAME_RATE</span>
            <span className="text-cyan-400 font-bold">{fps} FPS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">VIEWPORT</span>
            <span>{viewport.width} × {viewport.height}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">ANIM_RUNTIME</span>
            <span className="text-amber-400">GSAP + MOTION</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">STATUS</span>
            <span className="text-emerald-400">HEALTHY [PROD]</span>
          </div>
        </div>

        <div className="pt-1 border-t border-neutral-800 text-[8px] text-neutral-500 flex justify-between">
          <span>PRESS [⌘K] TO INSPECT</span>
          <span className="text-[#E8281A]">● LIVE TELEMETRY</span>
        </div>
      </div>

      {/* Blueprint Grid Lines indicator marks along edges */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[8px] font-mono text-neutral-400 rotate-90 tracking-widest pointer-events-none">
        GRID SYSTEM: 12-COL / 1px HAIRLINE
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-mono text-neutral-400 -rotate-90 tracking-widest pointer-events-none">
        TOKEN LAYER: TAILWIND CSS 4
      </div>
    </div>
  );
};
