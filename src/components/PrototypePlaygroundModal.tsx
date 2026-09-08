import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Copy, Check, X, RotateCcw, Sparkles, Volume2, Code2, Zap } from 'lucide-react';
import { sound } from '../lib/sound';

interface PrototypePlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrototypePlaygroundModal: React.FC<PrototypePlaygroundModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [stiffness, setStiffness] = useState(380);
  const [damping, setDamping] = useState(24);
  const [mass, setMass] = useState(1);
  const [borderRadius, setBorderRadius] = useState(20);
  const [accentColor, setAccentColor] = useState('#E8281A');
  const [bounceCount, setBounceCount] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setStiffness(380);
    setDamping(24);
    setMass(1);
    setBorderRadius(20);
    setAccentColor('#E8281A');
    sound.playClick(800);
  };

  const handleTestBounce = () => {
    setBounceCount((prev) => prev + 1);
    sound.playClick(1100);
  };

  const generatedCode = `// Generated Motion Physics & Token Spec
const springConfig = {
  type: 'spring',
  stiffness: ${stiffness},
  damping: ${damping},
  mass: ${mass},
};

// Design Token Styles
const tokenStyle = {
  borderRadius: '${borderRadius}px',
  borderColor: '${accentColor}',
  boxShadow: '0 20px 40px -15px ${accentColor}33',
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    sound.playClick(1200);
    setTimeout(() => setCopied(false), 2000);
  };

  const accentPalette = [
    { name: 'Craft Red', hex: '#E8281A' },
    { name: 'Emerald AI', hex: '#10B981' },
    { name: 'Spatial Iris', hex: '#6366F1' },
    { name: 'Cyan Autonomy', hex: '#06B6D4' },
    { name: 'Amber Core', hex: '#F59E0B' },
    { name: 'Monochrome', hex: '#0A0A0A' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#121212] rounded-2xl shadow-2xl border-2 border-[#0A0A0A] dark:border-neutral-700 overflow-hidden flex flex-col z-10 max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center">
                <Sliders className="w-4 h-4 text-[#E8281A]" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider">
                  INTERACTIVE PROTOTYPE & TOKEN SANDBOX
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  Live Spring Physics & Design Token Simulator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors text-xs font-mono flex items-center gap-1 cursor-pointer"
                title="Reset to default tokens"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">RESET</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content Body */}
          <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Controls Column */}
            <div className="md:col-span-6 space-y-5">
              {/* Physics Sliders */}
              <div className="space-y-4 bg-neutral-50 dark:bg-[#181818] p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    SPRING PHYSICS
                  </span>
                  <span className="text-[10px] text-neutral-400">FRAMER MOTION</span>
                </div>

                {/* Stiffness */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-600 dark:text-neutral-400">Stiffness</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{stiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="600"
                    value={stiffness}
                    onChange={(e) => {
                      setStiffness(Number(e.target.value));
                      sound.playClick(600 + Number(e.target.value));
                    }}
                    className="w-full accent-[#0A0A0A] dark:accent-white cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
                    <span>Loose (80)</span>
                    <span>Rigid (600)</span>
                  </div>
                </div>

                {/* Damping */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-600 dark:text-neutral-400">Damping</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{damping}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={damping}
                    onChange={(e) => {
                      setDamping(Number(e.target.value));
                      sound.playClick(700 + Number(e.target.value) * 10);
                    }}
                    className="w-full accent-[#0A0A0A] dark:accent-white cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
                    <span>Bouncy (10)</span>
                    <span>Overdamped (50)</span>
                  </div>
                </div>

                {/* Mass */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-600 dark:text-neutral-400">Mass</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{mass}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={mass}
                    onChange={(e) => {
                      setMass(Number(e.target.value));
                      sound.playClick(800);
                    }}
                    className="w-full accent-[#0A0A0A] dark:accent-white cursor-pointer"
                  />
                </div>
              </div>

              {/* Design Tokens: Corner Radius & Accent */}
              <div className="space-y-3 bg-neutral-50 dark:bg-[#181818] p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8281A]" />
                    DESIGN TOKENS
                  </span>
                  <span className="text-[10px] text-neutral-400">TAILWIND CSS</span>
                </div>

                {/* Corner radius */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-600 dark:text-neutral-400">Corner Radius</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={borderRadius}
                    onChange={(e) => {
                      setBorderRadius(Number(e.target.value));
                      sound.playClick(900);
                    }}
                    className="w-full accent-[#0A0A0A] dark:accent-white cursor-pointer"
                  />
                </div>

                {/* Accent Color Picker */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">Brand Accent Swatch</span>
                  <div className="flex items-center gap-2">
                    {accentPalette.map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => {
                          setAccentColor(col.hex);
                          sound.playClick(1000);
                        }}
                        style={{ backgroundColor: col.hex }}
                        className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                          accentColor === col.hex
                            ? 'scale-125 border-[#0A0A0A] dark:border-white shadow-md ring-2 ring-black/20 dark:ring-white/20'
                            : 'border-white dark:border-neutral-700 hover:scale-110'
                        }`}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Live Interactive Preview Column */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              {/* Interactive Target Component */}
              <div className="bg-neutral-100/80 dark:bg-[#161616] rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
                <div className="absolute top-2 left-3 text-[9px] font-mono text-neutral-400">
                  INTERACTIVE PHYSICS CANVAS (CLICK OR DRAG)
                </div>

                <motion.div
                  key={bounceCount}
                  drag
                  dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
                  dragElastic={0.2}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    type: 'spring',
                    stiffness: stiffness,
                    damping: damping,
                    mass: mass,
                  }}
                  onClick={handleTestBounce}
                  style={{
                    borderRadius: `${borderRadius}px`,
                    borderColor: accentColor,
                  }}
                  className="w-48 sm:w-56 p-4 bg-white dark:bg-[#1E1E1E] border-2 shadow-xl cursor-grab active:cursor-grabbing select-none text-center relative group"
                >
                  <div className="w-full flex justify-between items-center pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-[9px] font-mono font-bold text-neutral-400">LIVE COMPONENT</span>
                    <span
                      className="w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>

                  <div className="py-3 space-y-1">
                    <div className="text-xs font-bold text-neutral-900 dark:text-white font-headline">
                      Kinetic Card
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                      Stiffness: {stiffness} | Damp: {damping}
                    </div>
                  </div>

                  <button
                    style={{ backgroundColor: accentColor }}
                    className="w-full text-white py-1.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-transform group-hover:scale-102"
                  >
                    TRIGGER PHYSICS
                  </button>
                </motion.div>

                <div className="text-[10px] font-mono text-neutral-400 mt-4">
                  Drag the card or click anywhere on it to test spring recoil.
                </div>
              </div>

              {/* Code output inspector */}
              <div className="bg-neutral-900 text-neutral-200 rounded-xl p-3 border border-neutral-800 text-[11px] font-mono relative">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[9px] text-neutral-400">
                  <span>GENERATED REACT / CSS TOKENS</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[10px] bg-neutral-800 px-2 py-0.5 rounded"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED' : 'COPY SPEC'}</span>
                  </button>
                </div>
                <pre className="pt-2 text-[10px] text-emerald-400 overflow-x-auto leading-relaxed">
                  {generatedCode}
                </pre>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-neutral-50 dark:bg-[#181818] border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>READY FOR ZERO-FRICTION ENGINEERING HANDOFF</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-semibold uppercase transition-colors cursor-pointer"
            >
              CLOSE SANDBOX
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
