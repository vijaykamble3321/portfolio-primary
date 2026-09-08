import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sliders, Filter, Sparkles } from 'lucide-react';
import { CaseCard } from './CaseCard';
import { CASE_STUDIES } from '../data/portfolioData';
import type { CaseStudy } from '../types';
import { sound } from '../lib/sound';

gsap.registerPlugin(ScrollTrigger);

export type ProjectFilter = 'ALL' | 'MERN' | 'NEXTJS' | 'MOBILE' | 'THREEJS' | 'AI_LLM' | 'DEVOPS';

interface CaseStudyScrollerProps {
  onOpenDeepDive: (caseStudy: CaseStudy) => void;
  onOpenSandbox?: () => void;
}

export const CaseStudyScroller: React.FC<CaseStudyScrollerProps> = ({
  onOpenDeepDive,
  onOpenSandbox,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>('ALL');

  // Filter definitions aligned with Vijay Kamble's core expertise
  const filters: { id: ProjectFilter; label: string; count: number }[] = [
    { id: 'ALL', label: 'ALL PROJECTS', count: CASE_STUDIES.length },
    {
      id: 'MERN',
      label: 'MERN STACK',
      count: CASE_STUDIES.filter((c) => ['health', 'fintech', 'automotive', 'infrastructure'].includes(c.type)).length,
    },
    {
      id: 'NEXTJS',
      label: 'NEXT.JS',
      count: CASE_STUDIES.filter((c) => ['productivity', 'automotive'].includes(c.type)).length,
    },
    {
      id: 'MOBILE',
      label: 'REACT NATIVE',
      count: CASE_STUDIES.filter((c) => ['dietitian', 'edtech'].includes(c.type)).length,
    },
    {
      id: 'THREEJS',
      label: 'THREE.JS & 3D',
      count: CASE_STUDIES.filter((c) => ['spatial', 'luxury'].includes(c.type)).length,
    },
    {
      id: 'AI_LLM',
      label: 'AI / LLM',
      count: CASE_STUDIES.filter((c) => ['audio'].includes(c.type)).length,
    },
    {
      id: 'DEVOPS',
      label: 'AWS & DEVOPS',
      count: CASE_STUDIES.filter((c) => ['climate', 'cyber', 'robotics'].includes(c.type)).length,
    },
  ];

  const isCaseMatching = (caseStudy: CaseStudy, filter: ProjectFilter) => {
    if (filter === 'ALL') return true;
    if (filter === 'MERN') return ['health', 'fintech', 'automotive', 'infrastructure'].includes(caseStudy.type);
    if (filter === 'NEXTJS') return ['productivity', 'automotive'].includes(caseStudy.type);
    if (filter === 'MOBILE') return ['dietitian', 'edtech'].includes(caseStudy.type);
    if (filter === 'THREEJS') return ['spatial', 'luxury'].includes(caseStudy.type);
    if (filter === 'AI_LLM') return ['audio'].includes(caseStudy.type);
    if (filter === 'DEVOPS') return ['climate', 'cyber', 'robotics'].includes(caseStudy.type);
    return true;
  };

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((c) => isCaseMatching(c, selectedFilter));
  }, [selectedFilter]);

  // Detect desktop vs mobile breakpoint
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Setup GSAP Pinned Horizontal Scroll on Desktop
  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth + 160;

      const horizontalTween = gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth * 1.15}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * CASE_STUDIES.length),
              CASE_STUDIES.length - 1
            );
            setActiveCaseIndex(newIndex);
          },
        },
      });

      return () => {
        horizontalTween.kill();
      };
    }, triggerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  // Click on rail to jump
  const handleJumpToCase = (index: number) => {
    setActiveCaseIndex(index);
    if (!isDesktop) {
      const el = document.getElementById(`case-card-${CASE_STUDIES[index].number}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (triggerRef.current && trackRef.current) {
        const totalScrollWidth = trackRef.current.scrollWidth - window.innerWidth + 160;
        const progressTarget = index / (CASE_STUDIES.length - 1);
        const triggerTop = triggerRef.current.offsetTop;
        const scrollDistance = triggerTop + progressTarget * (totalScrollWidth * 1.15);
        window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work" ref={sectionRef} className="relative w-full bg-[#FFFFFF] dark:bg-[#0A0A0A]">
      {/* Section Subhead & Divider */}
      <div className="w-full border-b border-[#0A0A0A]/10 dark:border-white/10 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#E8281A]" />
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
            FEATURED CASE STUDIES ({CASE_STUDIES.length} ARCHIVED WORKS)
          </h2>
        </div>
        <div className="hidden sm:block text-xs font-mono text-neutral-400 dark:text-neutral-500">
          [PINNED HORIZONTAL TIMELINE // GSAP SCROLL-TRIGGER]
        </div>
      </div>

      {/* Domain Filter Pills Bar */}
      <div className="w-full border-b border-[#0A0A0A]/10 dark:border-white/10 px-6 sm:px-12 py-2.5 bg-neutral-50/80 dark:bg-neutral-900/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mr-1.5 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            FILTER:
          </span>
          {filters.map((f) => {
            const isSelected = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setSelectedFilter(f.id);
                  sound.playClick(900);
                  if (f.id !== 'ALL') {
                    const firstMatchIdx = CASE_STUDIES.findIndex((c) => isCaseMatching(c, f.id));
                    if (firstMatchIdx !== -1) {
                      handleJumpToCase(firstMatchIdx);
                    }
                  }
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] font-bold shadow-xs'
                    : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white dark:bg-black/20 dark:text-[#0A0A0A]'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300'
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {onOpenSandbox && (
          <button
            onClick={() => {
              sound.playClick(1000);
              onOpenSandbox();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 text-[11px] font-mono font-bold transition-all cursor-pointer shadow-xs"
          >
            <Sliders className="w-3 h-3 text-[#E8281A]" />
            <span>PROTOTYPE SANDBOX</span>
          </button>
        )}
      </div>

      {/* Desktop Mode: Pinned Scroll-jack container */}
      {isDesktop ? (
        <div ref={triggerRef} className="relative h-screen w-full flex overflow-hidden">
          
          {/* Left Edge: Vertical Index Rail */}
          <aside
            aria-label="Case Study Index"
            className="w-20 lg:w-28 h-full border-r border-[#0A0A0A]/10 dark:border-white/10 flex flex-col justify-between items-center py-6 bg-white dark:bg-[#0E0E0E] z-30 shrink-0 select-none"
          >
            <div className="text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 rotate-180 [writing-mode:vertical-rl]">
              PROJECT INDEX
            </div>

            {/* Scrollable / Compact indicator list for 13 items */}
            <div className="flex flex-col gap-2.5 items-center max-h-[68vh] overflow-y-auto py-2 no-scrollbar">
              {CASE_STUDIES.map((c, idx) => {
                const isActive = activeCaseIndex === idx;
                const matchesFilter = isCaseMatching(c, selectedFilter);
                return (
                  <button
                    key={c.id}
                    onClick={() => handleJumpToCase(idx)}
                    title={`Jump to Case ${c.number}: ${c.titleLine1}`}
                    className={`group flex items-center gap-1.5 focus:outline-none cursor-pointer p-0.5 transition-opacity ${
                      matchesFilter ? 'opacity-100' : 'opacity-25 hover:opacity-75'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono tracking-tight transition-all duration-200 ${
                        isActive
                          ? 'font-black text-[#0A0A0A] dark:text-white scale-125'
                          : 'text-[#0A0A0A]/30 dark:text-white/30 group-hover:text-[#0A0A0A] dark:group-hover:text-white'
                      }`}
                    >
                      {c.number}
                    </span>
                    <span
                      className={`h-3 w-[2px] rounded-full transition-all duration-200 ${
                        isActive ? 'bg-[#0A0A0A] dark:bg-white h-4' : 'bg-[#0A0A0A]/15 dark:bg-white/15'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Current Index Progress */}
            <div className="text-[10px] font-mono font-bold text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800 pt-3 w-full text-center">
              {`${String(activeCaseIndex + 1).padStart(2, '0')} / ${String(CASE_STUDIES.length).padStart(2, '0')}`}
            </div>
          </aside>

          {/* Horizontal Track of Cards */}
          <div
            ref={trackRef}
            className="flex items-center gap-8 px-8 lg:px-12 h-full will-change-transform"
          >
            {CASE_STUDIES.map((caseStudy, index) => {
              const matches = isCaseMatching(caseStudy, selectedFilter);
              return (
                <div
                  key={caseStudy.id}
                  className={`h-[84vh] flex items-center shrink-0 transition-opacity duration-300 ${
                    matches ? 'opacity-100' : 'opacity-30 hover:opacity-80'
                  }`}
                >
                  <CaseCard
                    caseStudy={caseStudy}
                    index={index}
                    onOpenDeepDive={onOpenDeepDive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Mobile Mode: Vertical Stacking without scroll-jacking */
        <div className="px-4 py-8 space-y-12">
          {filteredStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <CaseCard
                caseStudy={caseStudy}
                index={index}
                onOpenDeepDive={onOpenDeepDive}
                isMobile={true}
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
