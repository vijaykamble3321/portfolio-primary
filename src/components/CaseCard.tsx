import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Share2, Radio, CheckCircle2 } from 'lucide-react';
import type { CaseStudy } from '../types';
import { CaseStudyMockup } from './CaseStudyMockup';
import { sound } from '../lib/sound';

interface CaseCardProps {
  caseStudy: CaseStudy;
  index: number;
  onOpenDeepDive: (caseStudy: CaseStudy) => void;
  isMobile?: boolean;
}

export const CaseCard: React.FC<CaseCardProps> = ({
  caseStudy,
  index,
  onOpenDeepDive,
  isMobile = false,
}) => {
  return (
    <article
      id={`case-card-${caseStudy.number}`}
      className={`relative w-full h-full bg-[#FFFFFF] dark:bg-[#121212] border-hairline flex flex-col justify-between p-6 sm:p-10 lg:p-14 transition-all duration-300 ${
        isMobile ? 'min-h-[560px] my-6' : 'min-w-[85vw] lg:min-w-[78vw] max-w-[1280px]'
      }`}
    >
      {/* Top Header Row of the Card */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] px-2.5 py-1 rounded-xs tracking-wider">
            CASE {caseStudy.number}
          </span>
          <span className="text-xs font-mono tracking-widest text-[#0A0A0A]/60 dark:text-neutral-400 uppercase">
            {caseStudy.category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono font-medium text-[#0A0A0A]/60 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Case 03 Special Full-Width Layout per prompt */}
      {caseStudy.type === 'productivity' ? (
        <div className="py-6 sm:py-8 space-y-6 flex-1 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] dark:text-white leading-tight">
                {caseStudy.titleLine1} {caseStudy.titleLine2}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Outline pill "DEEP DIVE →" button overlapping top */}
            <div className="shrink-0">
              <button
                id={`case-${caseStudy.number}-deep-dive-btn`}
                onClick={() => {
                  sound.playClick(1000);
                  onOpenDeepDive(caseStudy);
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0A0A0A] dark:border-neutral-400 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] dark:text-neutral-200 hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>DEEP DIVE →</span>
              </button>
            </div>
          </div>

          {/* Centered browser/laptop mockup with a two-panel UI */}
          <div className="w-full bg-white dark:bg-[#181818] rounded-xl border-2 border-[#0A0A0A] dark:border-neutral-700 shadow-xl overflow-hidden mt-2">
            <div className="bg-neutral-100 dark:bg-[#202020] border-b border-[#0A0A0A]/10 dark:border-white/10 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 ml-2 hidden sm:inline">
                  workspace.canvas.internal/session-892
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Radio className="w-3 h-3 text-red-600 animate-pulse" />
                  <span>Live Session</span>
                </div>

                <div className="flex -space-x-1.5 items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold border-2 border-white dark:border-neutral-800">
                    JD
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[9px] font-bold border-2 border-white dark:border-neutral-800">
                    AL
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold border-2 border-white dark:border-neutral-800">
                    SC
                  </div>
                </div>

                <button className="flex items-center gap-1 bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] text-xs px-3 py-1 rounded-md font-medium">
                  <Share2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[260px] sm:min-h-[300px]">
              <div className="md:col-span-4 border-r border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50/70 dark:bg-neutral-900/70 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  <span>Meeting Notes & Feed</span>
                  <span className="text-[10px] font-mono text-neutral-400">14:28 EST</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-white dark:bg-neutral-800 p-2 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">Marcus (Design Lead):</span>
                    <p className="text-neutral-600 dark:text-neutral-300 mt-0.5">"Unified canvas nodes 3 & 4."</p>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 p-2 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">Sarah (Eng):</span>
                    <p className="text-neutral-600 dark:text-neutral-300 mt-0.5">"Latency 12ms validated."</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 p-6 bg-white dark:bg-neutral-950 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                <div className="relative z-10 w-full max-w-md space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] px-4 py-1.5 rounded-lg text-xs font-mono font-bold shadow-md">
                      CORE ARCHITECTURE SPEC
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-neutral-900 p-3 rounded-lg border-2 border-blue-500 shadow-sm">
                      <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Spatial UI Viewport</div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">Multiplayer camera sync</div>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-3 rounded-lg border-2 border-purple-500 shadow-sm">
                      <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100">Audio Telemetry</div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">Spatial sound staging</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Standard 2-Column Grid Layout for Case Studies */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6 sm:py-8 flex-1">
          <div className="lg:col-span-6 space-y-6">
            {/* Optional partner/investor marks */}
            {caseStudy.partnerLogos && (
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
                  Validation & Backers
                </span>
                <div className="flex items-center gap-6 filter grayscale opacity-60 hover:opacity-100 transition-opacity">
                  {caseStudy.partnerLogos.map((p) => (
                    <div key={p.name} className="flex items-center gap-1.5" title={p.name}>
                      <div className="w-3.5 h-3.5 rounded-xs border border-neutral-800 dark:border-neutral-400 flex items-center justify-center text-[8px] font-bold text-neutral-800 dark:text-neutral-200">
                        +
                      </div>
                      <span className="text-xs font-bold font-mono tracking-tight text-neutral-800 dark:text-neutral-200">
                        {p.mark}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Headline: Serif with italic 2nd line for editorial cases, or Bold Grotesk */}
            {caseStudy.type === 'health' || caseStudy.type === 'luxury' ? (
              <div className="space-y-1">
                <h3 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0A0A0A] dark:text-white leading-tight">
                  {caseStudy.titleLine1}
                </h3>
                <h3 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal italic text-[#0A0A0A] dark:text-white leading-tight">
                  {caseStudy.titleLine2}
                </h3>
              </div>
            ) : (
              <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] dark:text-white leading-tight">
                {caseStudy.titleLine1} {caseStudy.titleLine2}
              </h3>
            )}

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl font-normal">
              {caseStudy.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="space-y-0.5">
                  <div className="font-headline text-2xl sm:text-3xl text-neutral-900 dark:text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Outline pill "DEEP DIVE →" button */}
            <div className="pt-2">
              <button
                id={`case-${caseStudy.number}-deep-dive-btn`}
                onClick={() => {
                  sound.playClick(1000);
                  onOpenDeepDive(caseStudy);
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0A0A0A] dark:border-neutral-400 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] dark:text-neutral-200 hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>DEEP DIVE →</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Mockup Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <CaseStudyMockup
              caseStudy={caseStudy}
              onOpenDeepDive={() => {
                sound.playClick(1000);
                onOpenDeepDive(caseStudy);
              }}
            />
          </div>
        </div>
      )}

      {/* Card Footer row */}
      <div className="w-full flex items-center justify-between border-t border-[#0A0A0A]/10 dark:border-white/10 pt-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <span>PROJECT ARCHIVE // SYSTEM ID: {caseStudy.id.toUpperCase()}</span>
        <span
          className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            sound.playClick(950);
            onOpenDeepDive(caseStudy);
          }}
        >
          VIEW COMPLETE CASE STUDY SPEC →
        </span>
      </div>
    </article>
  );
};
