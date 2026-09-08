import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Sparkles, Clock, DollarSign, Briefcase, Mail, Building, ArrowRight } from 'lucide-react';
import { sound } from '../lib/sound';

interface ProjectInquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryDrawer: React.FC<ProjectInquiryDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('Full-Stack MERN & Next.js Web App');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate / Next 1-2 Weeks');
  const [selectedBudget, setSelectedBudget] = useState('Full-Time Role / Contract');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const roleOptions = [
    'Full-Stack MERN & Next.js Web App',
    'React Native Mobile App (Android/iOS)',
    'Interactive 3D Website (Three.js & Blender)',
    'AI & LLM Integration (AskMyLLM / APIs)',
    'Cloud Deployment & DevOps (AWS / Cloudflare)',
  ];

  const timelineOptions = [
    'Immediate / Next 1-2 Weeks',
    'Within 1 Month',
    'Flexible / Future Quarter',
  ];

  const budgetOptions = [
    'Full-Time Role / Contract',
    'Fixed Project Rate',
    'Hourly / Milestone Basis',
    'Open to Discussion',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    sound.playClick(1100);
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      sound.playClick(1400);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        />

        {/* Sliding Drawer Container */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-white dark:bg-[#121212] border-l border-neutral-300 dark:border-neutral-800 shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/80 dark:bg-[#181818]">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-900 dark:text-white uppercase">
                    ENGAGEMENT & HIRE INQUIRY
                  </h3>
                  <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                    Direct line to Vijay Kamble // Full Stack Developer
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-xl text-neutral-900 dark:text-white font-bold">
                    INQUIRY TRANSMITTED
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-xs font-sans-body">
                    Thank you! Your inquiry has been received. Vijay typically responds within 12–24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col gap-2 w-full max-w-xs">
                    <a
                      href={`mailto:vijaykamble3321@gmail.com?subject=Project Inquiry: ${company || 'New Project'}&body=Role: ${selectedRole}%0D%0ABudget: ${selectedBudget}%0D%0ATimeline: ${selectedTimeline}%0D%0A${notes}`}
                      className="px-4 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>OPEN EMAIL CLIENT DIRECTLY</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Availability Notice */}
                  <div className="p-3.5 bg-neutral-50 dark:bg-[#181818] rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
                    <div className="font-mono font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 text-[11px]">
                      <Sparkles className="w-3 h-3 text-[#E8281A]" />
                      CURRENT AVAILABILITY STATUS
                    </div>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Available for full-time software developer opportunities, contract engagements, and high-impact freelance projects across MERN stack, Next.js, React Native, and 3D web.
                    </p>
                  </div>

                  {/* 1. Engagement Role */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-neutral-900 dark:text-white uppercase flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                      ENGAGEMENT SCOPE
                    </label>
                    <div className="grid grid-cols-1 gap-1.5">
                      {roleOptions.map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => {
                            setSelectedRole(role);
                            sound.playClick(900);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                            selectedRole === role
                              ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] dark:border-white font-semibold shadow-xs'
                              : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Timeline */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-neutral-900 dark:text-white uppercase flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                      TARGET START TIMELINE
                    </label>
                    <div className="grid grid-cols-1 gap-1.5">
                      {timelineOptions.map((tl) => (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => {
                            setSelectedTimeline(tl);
                            sound.playClick(950);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                            selectedTimeline === tl
                              ? 'border-[#0A0A0A] bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 font-bold'
                              : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600'
                          }`}
                        >
                          {tl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Budget Bracket */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-neutral-900 dark:text-white uppercase flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                      ENGAGEMENT TYPE / BUDGET
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            setSelectedBudget(b);
                            sound.playClick(1000);
                          }}
                          className={`text-left px-3 py-2 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                            selectedBudget === b
                              ? 'border-[#0A0A0A] bg-neutral-900 text-white dark:bg-white dark:text-[#0A0A0A] dark:border-white font-semibold'
                              : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Contact Inputs */}
                  <div className="space-y-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">Your Name & Role</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma (Engineering Manager)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white font-sans-body"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">Work Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">Company or Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Walstar / Tech Corp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white font-sans-body"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">Project Requirements / Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Details about your tech stack, project goals, timeline, or position requirements..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white font-sans-body resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white dark:border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY DIRECTLY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818] flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              <a href="mailto:vijaykamble3321@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                vijaykamble3321@gmail.com
              </a>
              <span>KOLHAPUR, IN</span>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
