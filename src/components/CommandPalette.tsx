import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Terminal,
  Volume2,
  VolumeX,
  Code2,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Zap,
  X
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import type { CaseStudy } from '../types';
import { sound } from '../lib/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCase: (caseStudy: CaseStudy) => void;
  isDevMode: boolean;
  onToggleDevMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onNavigateTab: (tab: 'design' | 'about') => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectCase,
  isDevMode,
  onToggleDevMode,
  soundEnabled,
  onToggleSound,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick(800);
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCases = CASE_STUDIES.filter(
    (c) =>
      c.titleLine1.toLowerCase().includes(query.toLowerCase()) ||
      c.titleLine2.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      c.number.includes(query)
  );

  const handleCopyStack = () => {
    navigator.clipboard.writeText(
      'Stack: Next.js 14+ / React 18+ / TypeScript / GSAP (ScrollTrigger) / Framer Motion / Lenis / Tailwind CSS'
    );
    setCopied(true);
    sound.playClick(1200);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-xl bg-white dark:bg-[#121212] rounded-xl shadow-2xl border-2 border-neutral-900 dark:border-neutral-700 overflow-hidden flex flex-col z-10 font-sans"
        >
          {/* Header search bar */}
          <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 gap-3 bg-neutral-50 dark:bg-[#181818]">
            <Terminal className="w-4 h-4 text-neutral-500 shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, case study (e.g. '04' or 'fintech')..."
              className="w-full bg-transparent text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none font-mono"
            />
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="p-3 bg-neutral-100/70 dark:bg-[#181818] border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => {
                onToggleDevMode();
                sound.playClick(1100);
              }}
              className={`px-2.5 py-1 rounded border flex items-center gap-1.5 transition-colors cursor-pointer ${
                isDevMode
                  ? 'bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] border-[#0A0A0A] dark:border-white'
                  : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <Code2 className="w-3 h-3 text-[#E8281A]" />
              <span>DEV HUD: {isDevMode ? 'ENABLED' : 'DISABLED'}</span>
            </button>

            <button
              onClick={() => {
                onToggleSound();
                sound.playClick(900);
              }}
              className={`px-2.5 py-1 rounded border flex items-center gap-1.5 transition-colors cursor-pointer ${
                soundEnabled
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3 h-3 text-emerald-600" /> : <VolumeX className="w-3 h-3 text-neutral-400" />}
              <span>HAPTIC AUDIO: {soundEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={handleCopyStack}
              className="px-2.5 py-1 rounded bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-neutral-500" />}
              <span>{copied ? 'COPIED!' : 'COPY STACK'}</span>
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-800/60 text-sm">
            <div className="px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              CASE STUDIES ({filteredCases.length})
            </div>

            {filteredCases.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  onSelectCase(c);
                  sound.playClick(1000);
                  onClose();
                }}
                className="group flex items-center justify-between p-2.5 hover:bg-neutral-100 dark:hover:bg-[#1A1A1A] rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold bg-neutral-900 dark:bg-neutral-800 text-white px-2 py-0.5 rounded-xs">
                    {c.number}
                  </span>
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-white text-xs sm:text-sm group-hover:text-black dark:group-hover:text-neutral-100">
                      {c.titleLine1} {c.titleLine2}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{c.category}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                    {c.tags[0]}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}

            {filteredCases.length === 0 && (
              <div className="p-6 text-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
                No matching case studies found for "{query}".
              </div>
            )}
          </div>

          {/* Footer keyboard hints */}
          <div className="px-4 py-2 bg-neutral-50 dark:bg-[#181818] border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
            <span>[ESC] TO EXIT</span>
            <span className="flex items-center gap-1">
              <span>POWERED BY GSAP & FRAMER MOTION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
