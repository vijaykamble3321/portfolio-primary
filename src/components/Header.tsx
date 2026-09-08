import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Send,
  Linkedin,
  Mail,
  Terminal,
  Volume2,
  VolumeX,
  Code2,
  Sliders,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import type { NavTab } from '../types';
import { sound } from '../lib/sound';

interface HeaderProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenCommandPalette: () => void;
  isDevMode: boolean;
  onToggleDevMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenSandbox: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenCommandPalette,
  isDevMode,
  onToggleDevMode,
  soundEnabled,
  onToggleSound,
  theme,
  onToggleTheme,
  onOpenSandbox,
  onOpenInquiry,
}) => {
  const tabs: NavTab[] = ['DESIGN', 'ABOUT'];

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full h-16 bg-[#FFFFFF]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#0A0A0A]/10 dark:border-white/10 flex items-center justify-between px-3 sm:px-8 transition-colors duration-200"
    >
      {/* Left: Monogram + Location + Availability Badge */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="#hero"
          onClick={() => sound.playClick(900)}
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Home"
        >
          <div className="relative w-8 h-8 bg-[#0A0A0A] text-[#FFFFFF] dark:bg-[#EDEDED] dark:text-[#0A0A0A] rounded-sm flex items-center justify-center font-bold text-xs tracking-tighter transition-transform duration-200 group-hover:scale-105">
            <span>VK</span>
            <span
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E8281A]"
              title="Brand Accent"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#0A0A0A]/70 dark:text-neutral-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]/60 dark:text-neutral-400" />
            <span>KOLHAPUR, IN</span>
          </div>
        </a>

        {/* Live Availability Badge -> Opens Inquiry Drawer */}
        <button
          onClick={() => {
            sound.playClick(1000);
            onOpenInquiry();
          }}
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors cursor-pointer shadow-2xs group"
          title="Vijay Kamble is available for Full Stack (MERN) roles"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>AVAILABLE FOR HIRE</span>
        </button>

        {/* Developer Command Palette shortcut trigger */}
        <button
          onClick={() => {
            sound.playClick(1050);
            onOpenCommandPalette();
          }}
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 transition-all cursor-pointer shadow-2xs group"
          title="Open Developer Command Palette (⌘K / Ctrl+K)"
        >
          <Terminal className="w-3 h-3 text-[#E8281A] group-hover:scale-110 transition-transform" />
          <span className="font-semibold">CMD</span>
          <kbd className="bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-1 py-0.2 rounded text-[9px] font-bold">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Center: Pill-style Nav */}
      <nav
        aria-label="Main Navigation"
        className="flex items-center bg-[#0A0A0A]/5 dark:bg-white/10 p-1 rounded-full border border-[#0A0A0A]/10 dark:border-white/10"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              id={`nav-tab-${tab.toLowerCase()}`}
              onClick={() => {
                sound.playClick(850);
                onTabChange(tab);
              }}
              className={`relative px-4 sm:px-5 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-200 focus:outline-none cursor-pointer ${
                isActive
                  ? 'text-[#FFFFFF] dark:text-[#0A0A0A]'
                  : 'text-[#0A0A0A]/70 dark:text-neutral-300 hover:text-[#0A0A0A] dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#0A0A0A] dark:bg-[#EDEDED] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: Sandbox + Dev HUD + Audio + Theme + Contact */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {/* Prototype Sandbox Trigger */}
        <button
          onClick={() => {
            sound.playClick(1000);
            onOpenSandbox();
          }}
          className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer"
          title="Open Interactive Prototype & Token Sandbox"
        >
          <Sliders className="w-3 h-3 text-[#E8281A]" />
          <span>SANDBOX</span>
        </button>

        {/* Dev Mode HUD Toggle Button */}
        <button
          onClick={() => {
            sound.playClick(1100);
            onToggleDevMode();
          }}
          className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all cursor-pointer ${
            isDevMode
              ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] dark:bg-white dark:text-[#0A0A0A] dark:border-white shadow-xs'
              : 'bg-white text-neutral-600 border-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
          }`}
          title="Toggle Developer Blueprint HUD"
        >
          <Code2 className="w-3 h-3 text-[#E8281A]" />
          <span className="font-bold">DEV HUD</span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDevMode ? 'bg-emerald-400 animate-ping' : 'bg-neutral-400'
            }`}
          />
        </button>

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={() => {
            sound.playClick(900);
            onToggleTheme();
          }}
          className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer"
          title={`Switch to ${theme === 'light' ? 'Studio Dark' : 'Clean Light'} Theme`}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
        </button>

        {/* Audio Haptics Toggle */}
        <button
          onClick={() => {
            sound.playClick(1200);
            onToggleSound();
          }}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            soundEnabled
              ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300'
              : 'border-[#0A0A0A]/10 dark:border-neutral-700 text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-900'
          }`}
          title={soundEnabled ? 'Haptic Sound Effects: Enabled' : 'Haptic Sound Effects: Disabled'}
          aria-label="Toggle haptic sounds"
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

        {/* Inquiry Drawer Trigger Button */}
        <button
          onClick={() => {
            sound.playClick(1000);
            onOpenInquiry();
          }}
          className="px-3 py-1.5 rounded-full bg-[#0A0A0A] text-white dark:bg-[#EDEDED] dark:text-[#0A0A0A] hover:bg-neutral-800 dark:hover:bg-white text-[11px] font-mono font-bold tracking-wider uppercase transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>INQUIRE</span>
        </button>
      </div>
    </header>
  );
};
