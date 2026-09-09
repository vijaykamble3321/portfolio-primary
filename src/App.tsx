import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudyScroller } from './components/CaseStudyScroller';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { DeepDiveModal } from './components/DeepDiveModal';
import { CommandPalette } from './components/CommandPalette';
import { DevHudOverlay } from './components/DevHudOverlay';
import { PrototypePlaygroundModal } from './components/PrototypePlaygroundModal';
import { ProjectInquiryDrawer } from './components/ProjectInquiryDrawer';
import { PageLoader } from './components/PageLoader';
import type { NavTab, CaseStudy } from './types';
import { sound } from './lib/sound';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>('DESIGN');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // Developer Experience & Modal states
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Handle Theme Toggle
  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Sync sound manager enabled flag
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) {
      sound.playClick(1000);
    }
  };

  // Initialize Lenis smooth scroll and wire with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: e }));
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Intersection Observer for auto-switching "ABOUT" tab when scrolled into view
  useEffect(() => {
    const aboutElement = document.getElementById('about');
    if (!aboutElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab('ABOUT');
          } else {
            const rect = aboutElement.getBoundingClientRect();
            if (rect.top > 0) {
              setActiveTab('DESIGN');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2,
      }
    );

    observer.observe(aboutElement);
    return () => observer.disconnect();
  }, []);

  // Handle Tab navigation
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'DESIGN') {
      const hero = document.getElementById('hero');
      if (hero) {
        if (lenisInstance) {
          lenisInstance.scrollTo(hero, { offset: 0, duration: 1.2 });
        } else {
          hero.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (tab === 'ABOUT') {
      const about = document.getElementById('about');
      if (about) {
        if (lenisInstance) {
          lenisInstance.scrollTo(about, { offset: -30, duration: 1.2 });
        } else {
          about.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Explore button smooth scroll
  const handleExploreClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      if (lenisInstance) {
        lenisInstance.scrollTo(workSection, { offset: 0, duration: 1.2 });
      } else {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Back to top handler
  const handleBackToTop = () => {
    sound.playClick(900);
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveTab('DESIGN');
  };

  return (
    <>
      {/* Full-screen preloader — renders until JS + assets are ready */}
      <PageLoader onComplete={handleLoaderComplete} />

      <div
        className={`min-h-screen flex flex-col font-sans-body antialiased relative transition-colors duration-200 ${
          theme === 'dark' ? 'dark bg-[#0A0A0A] text-[#EDEDED]' : 'bg-[#FFFFFF] text-[#0A0A0A]'
        }`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
          pointerEvents: isLoaded ? 'auto' : 'none',
        }}
      >
      {/* 1. Fixed Header with Developer controls */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        isDevMode={isDevMode}
        onToggleDevMode={() => setIsDevMode((prev) => !prev)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenSandbox={() => setIsSandboxOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 2. Hero Section (interactive) */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 3. Horizontal Scroll Case Studies (pinned scroll-jack section with Domain Filters) */}
        <CaseStudyScroller
          onOpenDeepDive={setSelectedCaseStudy}
          onOpenSandbox={() => setIsSandboxOpen(true)}
        />

        {/* 4. About Section with Career Matrix & Verified Endorsements */}
        <About onOpenInquiry={() => setIsInquiryOpen(true)} />
      </main>

      {/* 5. Footer */}
      <Footer
        onBackToTop={handleBackToTop}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Interactive Case Study Deep Dive Modal */}
      <DeepDiveModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Developer Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectCase={(caseStudy) => {
          setSelectedCaseStudy(caseStudy);
        }}
        isDevMode={isDevMode}
        onToggleDevMode={() => setIsDevMode((prev) => !prev)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onNavigateTab={handleTabChange}
      />

      {/* Developer HUD Blueprint Overlay */}
      <DevHudOverlay
        isDevMode={isDevMode}
        onClose={() => setIsDevMode(false)}
      />

      {/* Interactive Prototype & Token Playground Modal */}
      <PrototypePlaygroundModal
        isOpen={isSandboxOpen}
        onClose={() => setIsSandboxOpen(false)}
      />

      {/* Instant Project Inquiry Drawer */}
      <ProjectInquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
      </div>
    </>
  );
}

