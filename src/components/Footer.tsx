import React from 'react';
import { Mail, Send, Linkedin, ArrowUp, Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { sound } from '../lib/sound';

interface FooterProps {
  onBackToTop: () => void;
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop, onOpenInquiry }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-[#FFFFFF] dark:bg-[#0A0A0A] border-t border-[#0A0A0A]/10 dark:border-white/10 py-12 px-6 sm:px-12 lg:px-16 text-neutral-800 dark:text-neutral-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand Monogram + Email + Availability */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="relative w-8 h-8 bg-[#0A0A0A] text-[#FFFFFF] dark:bg-white dark:text-[#0A0A0A] rounded-xs flex items-center justify-center font-bold text-xs">
            <span>VK</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E8281A]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2 justify-center sm:justify-start">
              <span>Vijay Kamble</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                AVAILABLE FOR HIRE
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <a
                href="mailto:vijaykamble3321@gmail.com"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                vijaykamble3321@gmail.com
              </a>
              <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
              <a
                href="tel:+918483022465"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                (+91) 8483022465
              </a>
            </div>
          </div>
        </div>

        {/* Center: Social Icons & Project Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {onOpenInquiry && (
            <button
              onClick={() => {
                sound.playClick(1000);
                onOpenInquiry();
              }}
              className="px-4 py-2 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>CONNECT / HIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <a
              href="mailto:vijaykamble3321@gmail.com"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all hover:scale-105"
              aria-label="Direct Email"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/vijay-kamble-3929b2315"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/vijaykamble3321"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Copyright + Back to top */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>

          <button
            id="footer-back-to-top-button"
            onClick={onBackToTop}
            className="group inline-flex items-center gap-2 hover:text-[#0A0A0A] dark:hover:text-white transition-colors cursor-pointer"
          >
            <span className="uppercase tracking-wider font-semibold">BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
