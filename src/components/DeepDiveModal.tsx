import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Layers, Sparkles, Activity } from 'lucide-react';
import type { CaseStudy } from '../types';

interface DeepDiveModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const DeepDiveModal: React.FC<DeepDiveModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121212] rounded-2xl shadow-2xl border border-neutral-300 dark:border-neutral-800 overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] px-2.5 py-1 rounded-xs">
                CASE {caseStudy.number}
              </span>
              <span className="text-xs font-mono tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
                {caseStudy.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-200"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
            {/* Title & Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                {caseStudy.titleLine1} {caseStudy.titleLine2}
              </h2>

              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
                {caseStudy.description}
              </p>
            </div>

            {/* Metrics Callout */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-neutral-50 dark:bg-[#181818] rounded-xl border border-neutral-200 dark:border-neutral-800">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="font-headline text-3xl text-[#0A0A0A] dark:text-white">{m.value}</div>
                  <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Design Process & Architectural Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E8281A]" />
                  <span>Problem Statement & Hypotheses</span>
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Legacy systems suffered from fragmented communication loops and cognitive overload. In preliminary discovery sessions with 40+ domain specialists, users cited critical friction around latency and multi-screen context switching.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Eliminated multi-step modal interruptions in high-intensity workflows.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Introduced glanceable telemetry with predictive micro-cues.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E8281A]" />
                  <span>System Architecture & Execution</span>
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Created an atomic design token taxonomy synchronizing Figma variant tokens with production React primitives. Built high-fidelity motion prototypes using GSAP and Framer Motion to validate gesture physics before writing component specs.
                </p>
                <div className="p-3 bg-neutral-900 dark:bg-black text-white rounded-lg font-mono text-xs space-y-1 border border-neutral-800">
                  <div className="text-neutral-400 text-[10px]">PRODUCTION READINESS</div>
                  <div className="text-emerald-400">✓ Token Sync: 100% Automated via CI/CD</div>
                  <div className="text-neutral-300">✓ WCAG AA High-Contrast Compliance Verified</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">CONFIDENTIAL WORKSHOP ARTIFACT</span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
