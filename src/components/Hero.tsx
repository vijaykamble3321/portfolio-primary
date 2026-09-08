import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Terminal, Cpu, Sparkles } from 'lucide-react';
import { headlineCrossfade, hoverButtonVariant } from '../lib/animations';
import { HeroCardsCarousel } from './HeroCardsCarousel';
import { ThreeCharacterViewer } from './ThreeCharacterViewer';
import { sound } from '../lib/sound';

interface HeroProps {
  onExploreClick: () => void;
}

const HEADLINE_CYCLES = [
  { left: 'FULL', right: 'STACK' },
  { left: 'MERN', right: 'ENGINEER' },
  { left: 'NEXT.JS', right: '& REACT' },
  { left: 'REACT', right: 'NATIVE' },
  { left: 'THREE.JS', right: '3D/WEB' },
  { left: 'AI/LLM', right: 'SYSTEMS' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [cycleIndex, setCycleIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [liveCursorPos, setLiveCursorPos] = useState({ x: 420, y: 280 });
  const [laptopTerminalLine, setLaptopTerminalLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Crossfade headline every 3.2s
  useEffect(() => {
    const timer = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % HEADLINE_CYCLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Laptop mini-terminal line cycle
  useEffect(() => {
    const laptopTimer = setInterval(() => {
      setLaptopTerminalLine((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(laptopTimer);
  }, []);

  // Parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    setLiveCursorPos({ x: Math.round(clientX), y: Math.round(clientY) });

    if (window.innerWidth < 768) return;
    const x = clientX / rect.width - 0.5;
    const y = clientY / rect.height - 0.5;
    setMouseOffset({ x: x * 35, y: y * 18 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const currentHeadline = HEADLINE_CYCLES[cycleIndex];

  const terminalLines = [
    '> pnpm run dev:mern',
    '> mongoDB Atlas: connected',
    '> express API: 200 OK /port:3000',
    '> three.js WebGL: 60 FPS',
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center overflow-hidden px-4 sm:px-6 pt-2 sm:pt-3 pb-3 sm:pb-5 select-none border-b border-[#0A0A0A]/10 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#0A0A0A] transition-colors duration-200"
    >
      {/* Background subtle hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]" />


      {/* Top spacing / Developer Status Bar */}
      <div className="w-full flex justify-between items-center max-w-7xl pt-1 text-[10px] sm:text-xs uppercase tracking-widest text-[#0A0A0A]/60 dark:text-neutral-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VIJAY KAMBLE — PORTFOLIO '25-26</span>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">KOLHAPUR, MH, INDIA</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-neutral-400 dark:text-neutral-500 font-mono">
            COORDS: [{liveCursorPos.x}, {liveCursorPos.y}]
          </span>
          <span className="font-bold text-[#0A0A0A]/80 dark:text-neutral-200">MERN • NEXT.JS • REACT NATIVE • THREE.JS</span>
        </div>
      </div>

      {/* Hero Center Composition */}
      <div className="relative w-full max-w-6xl my-auto flex flex-col items-center justify-center pt-1 pb-16 sm:pb-20">
        
        {/* Large Bold Headline split left & right with stamped rotation */}
        <div className="w-full flex justify-between items-center z-10 pointer-events-none px-2 sm:px-8">
          {/* Left headline part */}
          <div className="transform -rotate-2 origin-left transition-transform duration-500">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`left-${cycleIndex}`}
                variants={headlineCrossfade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0A0A0A] dark:text-[#EDEDED] tracking-tighter leading-none"
              >
                {currentHeadline.left}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Right headline part */}
          <div className="transform rotate-2 origin-right transition-transform duration-500 text-right">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`right-${cycleIndex}`}
                variants={headlineCrossfade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0A0A0A] dark:text-[#EDEDED] tracking-tighter leading-none"
              >
                {currentHeadline.right}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Center Stage: Swipable 12-Card Fan with Standalone 3D Man in the Center */}
        <div className="relative w-full h-[330px] sm:h-[370px] md:h-[410px] flex items-center justify-center mt-[10px] sm:mt-[5px] md:mt-[-5px]">
          {/* 12 Animated Cards Carousel Stack (swipable with cursor) */}
          <HeroCardsCarousel mouseOffset={mouseOffset} />

          {/* Standalone 3D GLB Character standing in FRONT of the cards */}
          <div className="absolute z-40 pointer-events-none flex flex-col items-center justify-center drop-shadow-2xl">
            <ThreeCharacterViewer mouseOffset={mouseOffset} />
          </div>
        </div>
      </div>

      {/* Bottom Center: Black Tombstone/Pill Explore Button */}
    
    </section>
  );
};
