import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  BarChart3,
  Globe,
  Navigation,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Play,
  Pause,
  Maximize2,
  X,
  Terminal,
  CheckCircle2,
  Smartphone,
  Database,
  Server,
  GitBranch,
  ArrowUpRight,
  Radio,
  Sliders,
  Code2,
  Wifi,
} from 'lucide-react';
import { sound } from '../lib/sound';

export interface CardArchitecture {
  stack: string[];
  flow: string;
  highlights: string[];
  apiEndpoint?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface HeroCardItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  metric: string;
  metricLabel: string;
  accent: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  architecture: CardArchitecture;
}

type DeckMode = 'fan' | 'stack' | 'coverflow';

export const HeroCardsCarousel: React.FC<{ mouseOffset: { x: number; y: number } }> = ({
  mouseOffset,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deckMode, setDeckMode] = useState<DeckMode>('fan');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const [inspectedCard, setInspectedCard] = useState<HeroCardItem | null>(null);

  // Drag state for pointer swipe
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const dragStartX = useRef<number>(0);
  const dragStartTime = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Live dynamic telemetry simulations for authentic software developer vibe
  const [ecgOffset, setEcgOffset] = useState(0);
  const [radarAngle, setRadarAngle] = useState(0);
  const [heartBpm, setHeartBpm] = useState(74);
  const [fpsCounter, setFpsCounter] = useState('59.8');
  const [simulatedEmi, setSimulatedEmi] = useState(14500);
  const [loanPrincipal, setLoanPrincipal] = useState(500000);
  const [atsFilter, setAtsFilter] = useState<'all' | 'shortlisted' | 'hired'>('shortlisted');
  const [llmTokenIndex, setLlmTokenIndex] = useState(0);
  const [apiPingMs, setApiPingMs] = useState(18);

  const llmTokens = [
    'vector_classify(query)',
    'embed_dim=1536',
    'rag_similarity=0.96',
    'generating_stream...',
    'response_ready (200 OK)',
  ];

  // Dynamic telemetry intervals
  useEffect(() => {
    const timer = setInterval(() => {
      setEcgOffset((prev) => (prev + 3) % 100);
      setRadarAngle((prev) => (prev + 6) % 360);
    }, 45);

    const telemetryTimer = setInterval(() => {
      // Small randomized variations for true live developer simulation
      setHeartBpm(72 + Math.floor(Math.random() * 6));
      setFpsCounter((59.6 + Math.random() * 0.7).toFixed(1));
      setLlmTokenIndex((prev) => (prev + 1) % llmTokens.length);
      setApiPingMs(14 + Math.floor(Math.random() * 8));
    }, 1800);

    return () => {
      clearInterval(timer);
      clearInterval(telemetryTimer);
    };
  }, [llmTokens.length]);

  // Comprehensive 12 Software Engineering Project Cards matching Vijay Kamble's exact resume
  const HERO_CARDS: HeroCardItem[] = [
    {
      id: 'hero-01',
      title: 'Hospital Management',
      category: 'MERN STACK',
      tag: 'RBAC 3-ROLE',
      metric: '<250ms',
      metricLabel: 'Booking Latency',
      accent: '#E8281A',
      icon: <Activity className="w-3.5 h-3.5 text-red-500" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-900 text-white rounded-lg p-2 border border-neutral-800 relative overflow-hidden">
            <div className="flex justify-between items-center text-[7px] font-mono">
              <span className="flex items-center gap-1 text-red-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                EMR TELEMETRY
              </span>
              <span className="text-neutral-400 font-mono">{heartBpm} BPM</span>
            </div>
            <div className="relative h-6 my-1">
              <svg viewBox="0 0 100 24" className="w-full h-full text-red-400 stroke-current fill-none">
                <path
                  d="M0 12 H22 L27 3 L32 21 L37 7 L42 15 H65 L70 2 L75 22 L80 9 L85 13 H100"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <div
                className="absolute top-0 bottom-0 w-1 bg-red-400 shadow-[0_0_8px_#E8281A]"
                style={{ left: `${ecgOffset}%` }}
              />
            </div>
            <div className="flex justify-between text-[7px] font-mono text-neutral-400 border-t border-neutral-800 pt-1">
              <span>OPD Queues: 14 Active</span>
              <span className="text-emerald-400">Dr. Patil (OPD-2)</span>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/80 p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-[8px] flex justify-between items-center font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Security Gate</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-800 px-1 rounded-xs">Admin / Doctor / Patient</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bcrypt'],
        flow: 'Client (React) → Express Router → RBAC Middleware → MongoDB Atlas Cluster',
        highlights: [
          'Engineered full Hospital & Clinical EMR with 3 distinct access levels (Admin, Doctor, Patient).',
          'Automated doctor appointment scheduling and patient medical record history.',
          'Reduced booking checkout latency to under 250ms with optimized Mongoose indexes.',
        ],
        apiEndpoint: 'POST /api/v1/appointments/book',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-02',
      title: 'Healthcare Mobile App',
      category: 'REACT NATIVE',
      tag: 'TELEMEDICINE',
      metric: '99.9%',
      metricLabel: 'Mobile Uptime',
      accent: '#10B981',
      icon: <Sparkles className="w-3.5 h-3.5 text-emerald-500" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-emerald-950 text-white rounded-lg p-2 border border-emerald-800">
            <div className="flex items-center justify-between text-[8px] font-bold text-emerald-300">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-emerald-400" />
                Telemedicine Suite
              </span>
              <span className="text-[7px] text-emerald-400 font-mono bg-emerald-900/60 px-1 py-0.5 rounded">
                Android / iOS
              </span>
            </div>
            <div className="text-[7px] text-emerald-200 mt-1 font-mono">
              Live Video Consultations & Digital Prescriptions
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[7px] border-t border-emerald-800/80 pt-1">
              <span className="text-emerald-400">WebSocket Sync</span>
              <span className="font-mono font-bold text-emerald-300">{apiPingMs}ms Real-Time</span>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/80 p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Offline Cache</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">AsyncStorage Ready</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['React Native', 'Redux Toolkit', 'Node.js', 'Express', 'WebRTC'],
        flow: 'Mobile Client → WebRTC Signaling Server → Node.js Microservice → Secure Storage',
        highlights: [
          'Built cross-platform Android & iOS telemedicine application using React Native.',
          'Integrated doctor video consults, digital Rx downloads, and push notifications.',
          'Ensured seamless offline consultation history caching via AsyncStorage.',
        ],
        apiEndpoint: 'GET /api/v1/telemed/slots',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-03',
      title: 'Job Portal & ATS',
      category: 'NEXT.JS & MERN',
      tag: 'RESUME PIPELINE',
      metric: '18ms',
      metricLabel: 'Search Latency',
      accent: '#6366F1',
      icon: <Zap className="w-3.5 h-3.5 text-indigo-500" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-900 text-white rounded-lg p-2 border border-neutral-800 relative overflow-hidden font-mono">
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-bold text-indigo-400">ATS PIPELINE</span>
              <div className="flex gap-1 text-[6px]">
                {(['all', 'shortlisted', 'hired'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={(e) => {
                      e.stopPropagation();
                      setAtsFilter(tab);
                      sound.playClick(1000);
                    }}
                    className={`px-1 py-0.5 rounded uppercase ${
                      atsFilter === tab ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-1.5 text-[7px] text-neutral-300 space-y-0.5">
              <div className="flex justify-between">
                <span>Vijay Kamble (Full Stack)</span>
                <span className="text-emerald-400 font-bold">98% MATCH</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Resume Parser (PDF/DOCX)</span>
                <span className="text-indigo-300">AUTOMATED</span>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950/40 p-1.5 rounded border border-indigo-100 dark:border-indigo-900/40 text-[8px] flex justify-between text-indigo-950 dark:text-indigo-200 font-mono">
            <span>Workflow Stages</span>
            <span className="font-bold">5-Stage Automated ATS</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Next.js 14', 'MERN Stack', 'Tailwind CSS', 'AWS S3', 'MongoDB'],
        flow: 'Candidate Resume Upload → S3 Bucket → Textract Parser → MongoDB Pipeline',
        highlights: [
          'Engineered recruitment portal with recruiter dashboards and candidate portals.',
          'Built multi-filter job search with compound MongoDB text indexing (18ms query time).',
          'Automated resume parsing and recruiter hiring stage notifications.',
        ],
        apiEndpoint: 'POST /api/v1/jobs/apply',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-04',
      title: 'Loan Management',
      category: 'FINTECH MERN',
      tag: 'APPROVAL SYSTEM',
      metric: '-60%',
      metricLabel: 'Cycle Time',
      accent: '#0A0A0A',
      icon: <BarChart3 className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />,
      content: (
        <div className="space-y-1.5 py-1 font-mono">
          <div className="bg-neutral-900 text-white rounded-lg p-2 text-[7px] space-y-1 border border-neutral-800">
            <div className="flex justify-between text-neutral-400">
              <span>PRINCIPAL AMOUNT</span>
              <span className="text-neutral-200">₹{(loanPrincipal).toLocaleString()}</span>
            </div>
            <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[65%]" />
            </div>
            <div className="flex justify-between text-neutral-400 pt-0.5">
              <span>ESTIMATED EMI</span>
              <span className="text-emerald-400 font-bold">₹{simulatedEmi.toLocaleString()} / mo</span>
            </div>
            <div className="flex justify-between text-neutral-400 border-t border-neutral-800 pt-1">
              <span>KYC VAULT S3</span>
              <span className="text-emerald-400 font-bold">AES-256 VERIFIED</span>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Amortization Engine</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">100% Deterministic</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Stripe'],
        flow: 'Application Form → KYC Document Upload (S3) → Underwriting Engine → Disbursement',
        highlights: [
          'Full loan lifecycle orchestration from customer application to EMI amortization.',
          'Reduced loan verification and approval cycle time by 60% with automated rule evaluation.',
          'Secure document vault integration storing Aadhaar/PAN documents with encryption.',
        ],
        apiEndpoint: 'POST /api/v1/loans/calculate-amortization',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-05',
      title: 'E-Commerce Platform',
      category: 'MERN COMMERCE',
      tag: 'PAYMENTS / CART',
      metric: '+35%',
      metricLabel: 'Checkout Lift',
      accent: '#06B6D4',
      icon: <Navigation className="w-3.5 h-3.5 text-cyan-600" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-900 text-cyan-400 rounded-lg p-2 border border-neutral-800 text-[8px] font-mono relative overflow-hidden">
            <div className="flex justify-between items-center text-[7px]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                GATEWAY
              </span>
              <span className="text-emerald-400 font-bold">STRIPE / RAZORPAY</span>
            </div>
            <div className="h-5 flex items-center justify-between text-neutral-300 text-[7px] border-t border-neutral-800 mt-1 pt-1">
              <span>Cart Webhook</span>
              <span className="text-cyan-300 font-bold">EVENT: payment_intent.succeeded</span>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Inventory Sync</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Atomic Decrement</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Cloudflare CDN'],
        flow: 'Product Catalog → Dynamic Cart → Stripe/Razorpay Webhooks → Order Fulfillment',
        highlights: [
          'Full-featured eCommerce engine with product variant filtering, persistent cart, and discount logic.',
          'Webhook listener verifying cryptographic signatures and preventing duplicate inventory drops.',
          'Admin dashboard with real-time sales telemetry, order tracking, and inventory restocking.',
        ],
        apiEndpoint: 'POST /api/v1/orders/webhook',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-06',
      title: 'Three.js 3D Web',
      category: 'BLENDER & THREE.JS',
      tag: '60 FPS WEBGL',
      metric: `${fpsCounter} FPS`,
      metricLabel: 'Render Cadence',
      accent: '#8B5CF6',
      icon: <Layers className="w-3.5 h-3.5 text-purple-600" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-950 rounded-lg p-2 border border-purple-900/60 text-[8px] relative overflow-hidden">
            <div className="flex justify-between items-center text-purple-300 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                GLTF PIPELINE
              </span>
              <span className="text-emerald-400 font-bold">{fpsCounter} FPS</span>
            </div>
            {/* Animated 3D geometric isometric preview */}
            <div className="h-6 my-1 flex items-center justify-center">
              <div
                className="w-5 h-5 border border-purple-400 bg-purple-500/20 transition-transform duration-100"
                style={{
                  transform: `rotateX(${radarAngle * 0.5}deg) rotateY(${radarAngle}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>
            <div className="flex justify-between text-[7px] text-purple-300 font-mono border-t border-purple-900/50 pt-1">
              <span>Shaders: GLSL Custom</span>
              <span>Draw Calls: 12</span>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/80 p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Asset Pipeline</span>
            <span className="font-bold text-purple-700 dark:text-purple-300">DRACO Compressed</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Three.js', 'React Three Fiber', 'Blender', 'GLSL Shaders', 'Vite'],
        flow: 'Blender 3D Modeling → GLTF/GLB Export → DRACO Compression → Three.js Canvas Scene',
        highlights: [
          'Interactive 3D web experiences with camera choreography, dynamic PBR lighting, and particle systems.',
          'Custom GLSL vertex and fragment shaders for holographic and fluid effects.',
          'Consistently locked at 60 FPS performance via frustum culling and texture LOD optimizations.',
        ],
        apiEndpoint: 'GLTF: /assets/models/scene.glb',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-07',
      title: 'Cloudflare & AWS',
      category: 'DEVOPS & CLOUD',
      tag: 'MULTI-CLOUD',
      metric: '99.95%',
      metricLabel: 'Global Uptime',
      accent: '#10B981',
      icon: <Globe className="w-3.5 h-3.5 text-emerald-600" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-900 text-white rounded-lg p-2 border border-neutral-800 text-[7px] font-mono space-y-1">
            <div className="flex justify-between text-emerald-400">
              <span className="flex items-center gap-1">
                <Wifi className="w-3 h-3 text-emerald-400" />
                AWS S3 + HEROKU
              </span>
              <span>EDGE CDN</span>
            </div>
            <div className="text-neutral-300">Mumbai: 12ms • Singapore: 28ms</div>
            <div className="flex justify-between text-neutral-400 border-t border-neutral-800 pt-0.5">
              <span>SSL / TLS 1.3</span>
              <span className="text-emerald-400 font-bold">STRICT HSTS</span>
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-1.5 rounded text-[8px] flex justify-between text-emerald-900 dark:text-emerald-200 font-mono border border-emerald-100 dark:border-emerald-900/40">
            <span>CDN Speedup</span>
            <span className="font-bold">4.2x Faster Assets</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['AWS S3', 'Cloudflare DNS/CDN', 'Heroku', 'Docker', 'GitHub Actions'],
        flow: 'Git Push → GitHub Actions CI/CD → Automated Test Suite → Zero-Downtime Multi-Cloud Deploy',
        highlights: [
          'Architected reliable production hosting infrastructure across AWS, Heroku, and Cloudflare.',
          'Configured DNS proxying, SSL certificates, edge caching, and DDoS mitigation.',
          'Automated CI/CD pipelines enabling continuous integration and instant rollbacks.',
        ],
        apiEndpoint: 'DNS: 1.1.1.1 / Proxy Mode',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-08',
      title: '3D Product Showcase',
      category: 'IMMERSIVE WEB',
      tag: 'INTERACTIVE 3D',
      metric: '2.4x',
      metricLabel: 'Engagement Lift',
      accent: '#0A0A0A',
      icon: <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-neutral-900 text-white rounded-lg p-2 border border-neutral-800 text-[8px] font-mono">
            <div className="flex justify-between items-center text-neutral-300">
              <span className="text-amber-400 font-bold">360° TURNTABLE</span>
              <span>ORBIT CONTROLS</span>
            </div>
            <div className="text-[7px] text-neutral-400 mt-1">Exploded Component Inspection & PBR Material Variants</div>
            <div className="mt-1 flex justify-between text-[7px] text-emerald-400 border-t border-neutral-800 pt-1">
              <span>WebGL 2.0</span>
              <span>GPU ACCELERATED</span>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">User Dwell Time</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">+140% Increase</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Three.js', 'Blender', 'GSAP', 'HTML5 Canvas', 'WebGL'],
        flow: 'CAD Model → Blender Retopology & UV Unwrap → Three.js Orbit Scene → Interactive Canvas',
        highlights: [
          'Built high-fidelity 3D product visualizer allowing customers to inspect hardware from any angle.',
          'Interactive colorway and material toggling with real-time environment map reflections.',
          'Smooth GSAP camera transitions syncing model animations with user scroll position.',
        ],
        apiEndpoint: 'CANVAS: webgl2 context',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-09',
      title: 'AskMyLLM Engine',
      category: 'AI / LLM SYSTEMS',
      tag: 'INTENT CLASSIFIER',
      metric: '96.4%',
      metricLabel: 'Intent Accuracy',
      accent: '#E8281A',
      icon: <Terminal className="w-3.5 h-3.5 text-red-500" />,
      content: (
        <div className="space-y-1.5 py-1 font-mono">
          <div className="bg-neutral-950 text-white rounded-lg p-2 text-[7px] border border-neutral-800">
            <div className="flex justify-between text-neutral-400 mb-1">
              <span className="text-red-400 font-bold">LLM TOKEN STREAM</span>
              <span className="text-neutral-500">&lt;350ms</span>
            </div>
            <div className="text-[7px] text-emerald-400 bg-black p-1 rounded font-mono truncate">
              &gt; {llmTokens[llmTokenIndex]}
            </div>
            <div className="flex items-end gap-0.5 h-3 mt-1">
              {[40, 80, 50, 95, 60, 90, 70, 45, 85, 30].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-red-500 rounded-xs transition-all duration-150"
                  style={{ height: `${Math.max(20, (h + radarAngle * 0.5) % 100)}%` }}
                />
              ))}
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">RAG Architecture</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">Semantic Search</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Node.js', 'Express', 'OpenAI/Gemini APIs', 'Pinecone / Vector DB', 'React.js'],
        flow: 'User Prompt → Vector Embedding Model → Cosine Similarity Search → Contextual LLM Stream',
        highlights: [
          'Engineered intelligent LLM question-answering and classification service.',
          'Built custom vector embedding similarity lookup reducing hallucination rate.',
          'Implemented Server-Sent Events (SSE) for low-latency word-by-word token streaming.',
        ],
        apiEndpoint: 'POST /api/v1/llm/stream',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-10',
      title: 'Node REST APIs',
      category: 'BACKEND ARCHITECTURE',
      tag: 'MICROSERVICES',
      metric: `${apiPingMs}ms`,
      metricLabel: 'P99 Latency',
      accent: '#2563EB',
      icon: <Cpu className="w-3.5 h-3.5 text-blue-600" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-blue-950 text-blue-100 rounded-lg p-2 border border-blue-800 text-[8px] font-mono">
            <div className="flex justify-between text-blue-300 font-bold">
              <span>EXPRESS SERVICES</span>
              <span className="text-emerald-400 font-bold">200 OK</span>
            </div>
            <div className="text-[7px] text-blue-200 mt-1">Rate Limit • Helmet • Centralized Error Handling</div>
            <div className="mt-1 flex justify-between text-[7px] text-blue-300 border-t border-blue-900 pt-1">
              <span>Test Suite (Jest/Bruno)</span>
              <span className="text-emerald-400 font-bold">98% Passed</span>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/80 p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Security Middleware</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">CORS & CSRF Shield</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Jest', 'Postman/Bruno'],
        flow: 'Client Request → Rate Limiter (Redis) → Auth Validation → Controller → Model Response',
        highlights: [
          'Architected high-throughput RESTful API microservices serving web and mobile clients.',
          'Centralized error handlers, request validation schemas, and structured logging.',
          'Comprehensive Postman & Bruno collections with automated integration tests.',
        ],
        apiEndpoint: 'GET /api/v1/health',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-11',
      title: 'Android Native Apps',
      category: 'MOBILE DEVELOPMENT',
      tag: 'REACT NATIVE',
      metric: '99.8%',
      metricLabel: 'Crash-Free',
      accent: '#EA580C',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />,
      content: (
        <div className="space-y-1.5 py-1">
          <div className="bg-orange-950 text-white rounded-lg p-2 border border-orange-800 text-[8px]">
            <div className="font-bold text-orange-300 flex justify-between">
              <span>Android Studio & Gradle</span>
              <span className="text-emerald-400 font-mono">BUILD SUCCESSFUL</span>
            </div>
            <div className="text-[7px] text-orange-200 mt-1 font-mono">
              Hermes JS Engine • ProGuard Code Obfuscation
            </div>
            <div className="mt-1 flex justify-between text-[7px] text-orange-300 border-t border-orange-900 pt-1 font-mono">
              <span>Bundle Size</span>
              <span className="text-emerald-400 font-bold">&lt;22MB Optimized</span>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/80 p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Hardware Access</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">Camera / Geolocation</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['React Native', 'Android Studio', 'Gradle', 'Hermes Engine', 'AsyncStorage'],
        flow: 'React Native JSX → Hermes Bytecode → Native Android Bridge → Device Hardware',
        highlights: [
          'Developed production-grade Android apps optimized with Hermes JavaScript engine.',
          'Configured ProGuard rules to reduce APK bundle size and secure intellectual property.',
          'Native hardware integration with camera, GPS geolocation, and local push notifications.',
        ],
        apiEndpoint: 'SDK: Android API 34',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
    {
      id: 'hero-12',
      title: 'Zero-Trust Auth',
      category: 'SECURITY & CRYPTO',
      tag: 'JWT & PASSKEYS',
      metric: 'A+',
      metricLabel: 'Security Audit',
      accent: '#DC2626',
      icon: <ShieldAlert className="w-3.5 h-3.5 text-red-600" />,
      content: (
        <div className="space-y-1.5 py-1 font-mono">
          <div className="bg-neutral-900 text-white rounded-lg p-2 border border-neutral-800 text-[7px]">
            <div className="flex justify-between text-red-400">
              <span className="font-bold">JWT HMAC-SHA256</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            <div className="text-neutral-300 mt-1 truncate">
              payload: {`{"sub":"vk_3321","role":"developer"}`}
            </div>
            <div className="mt-1 flex justify-between text-neutral-400 border-t border-neutral-800 pt-1">
              <span>HttpOnly Cookies</span>
              <span className="text-emerald-400 font-bold">XSS / CSRF SAFE</span>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded text-[8px] flex justify-between font-mono">
            <span className="text-neutral-500 dark:text-neutral-400">Token Refresh</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">Silent Rotation</span>
          </div>
        </div>
      ),
      architecture: {
        stack: ['Node.js', 'Express', 'JSON Web Tokens', 'Bcrypt.js', 'Crypto', 'Google OAuth2'],
        flow: 'Credentials → Bcrypt Salt & Hash Verification → Signed JWT / HttpOnly Cookie → Session Verification',
        highlights: [
          'Engineered bank-grade authentication with stateless JSON Web Tokens and refresh token rotation.',
          'Stored sensitive tokens in secure, HttpOnly, SameSite strict cookies to prevent XSS theft.',
          'Integrated OAuth2 social sign-in alongside passwordless biometric passkeys.',
        ],
        apiEndpoint: 'POST /api/v1/auth/login',
        githubUrl: 'https://github.com/vijaykamble3321',
      },
    },
  ];

  const totalCards = HERO_CARDS.length;

  const handleNext = useCallback((isManual = false) => {
    if (isManual) sound.playSwipe();
    setActiveIndex((prev) => (prev + 1) % totalCards);
    setAutoPlayProgress(0);
  }, [totalCards]);

  const handlePrev = useCallback((isManual = false) => {
    if (isManual) sound.playSwipe();
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setAutoPlayProgress(0);
  }, [totalCards]);

  // Keyboard navigation for card swiping
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (inspectedCard) return; // Don't hijack arrow keys if inspecting modal
      if (e.key === 'ArrowLeft') {
        handlePrev(true);
      } else if (e.key === 'ArrowRight') {
        handleNext(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev, inspectedCard]);

  // Auto-play timer (cards automatically cycle in background)
  useEffect(() => {
    if (!isAutoPlay || isDragging || inspectedCard !== null) return;

    const interval = 50; // 50ms tick
    const totalDuration = 2800; // 2.8s per card - dynamic, smooth flow
    const step = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setAutoPlayProgress((prev) => {
        if (prev >= 100) {
          handleNext(false);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, isDragging, inspectedCard, handleNext]);

  // Pointer drag gestures for swiping cards with mouse or touch
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartTime.current = Date.now();
    setDragOffsetPx(0);
    // Capture pointer so dragging continues even if cursor leaves the box
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffsetPx(delta);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaX = e.clientX - dragStartX.current;
    const elapsedMs = Math.max(1, Date.now() - dragStartTime.current);
    const velocity = Math.abs(deltaX) / elapsedMs; // px per ms

    // If dragged more than 45px or flicked with velocity > 0.35px/ms
    if (deltaX < -45 || (deltaX < -15 && velocity > 0.35)) {
      handleNext(true);
    } else if (deltaX > 45 || (deltaX > 15 && velocity > 0.35)) {
      handlePrev(true);
    }

    setDragOffsetPx(0);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  // Mouse wheel horizontal swipe
  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 20 || (e.shiftKey && Math.abs(e.deltaY) > 20)) {
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const liveFractionalOffset = isDragging ? dragOffsetPx / 150 : 0;

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onWheel={onWheel}
      className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
      title="Swipe with cursor horizontally to cycle through projects"
    >
      {/* Visual Live Drag Feedback Pill */}
     

      {/* 3D Stack / Fan Container */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        {HERO_CARDS.map((card, index) => {
          let offset = index - activeIndex - liveFractionalOffset;
          while (offset > totalCards / 2) offset -= totalCards;
          while (offset < -totalCards / 2) offset += totalCards;

          const absOffset = Math.abs(offset);
          const isCenter = absOffset < 0.45;

          // Only render visible adjacent cards in deck to maximize 60 FPS performance
          if (absOffset > 4.5) return null;

          // Mode-specific 3D spatial calculations
          let xPos = 0;
          let yPos = 0;
          let rotation = 0;
          let rotateY = 0;
          let scale = 1;
          let opacity = 1;
          let blurAmount = 0;
          const zIndex = Math.round(30 - absOffset * 4);

          if (deckMode === 'fan') {
            const sign = offset < 0 ? -1 : 1;
            // Generous bilateral spacing: provides clear space on both sides for the 3D man
            xPos = isCenter
              ? mouseOffset.x * 0.7
              : sign * (215 + (absOffset - 1) * 145) + mouseOffset.x * (1 + absOffset * 0.15);
            yPos = isCenter
              ? mouseOffset.y * 0.25 - 34
              : Math.pow(absOffset, 1.15) * 10 + mouseOffset.y * 0.35 - 30;
            rotation = isCenter ? 0 : sign * (6 + (absOffset - 1) * 5.5);
            rotateY = isCenter ? 0 : sign * -10;
            scale = isCenter ? 0.96 : Math.max(0.72, 0.92 - (absOffset - 1) * 0.08);
            opacity = isCenter ? 0.88 : Math.max(0.35, 0.95 - (absOffset - 1) * 0.18);
            blurAmount = isCenter ? 0 : Math.min(3, (absOffset - 0.7) * 0.9);
          } else if (deckMode === 'stack') {
            // Tinder-style stacked deck
            xPos = offset * 18 + mouseOffset.x * 0.4;
            yPos = absOffset * 8 + mouseOffset.y * 0.2 - 38;
            rotation = offset * 3;
            rotateY = offset * -4;
            scale = Math.max(0.75, 1 - absOffset * 0.06);
            opacity = Math.max(0.2, 1 - absOffset * 0.22);
            blurAmount = absOffset < 0.5 ? 0 : Math.min(2.5, absOffset * 0.6);
          } else {
            // Coverflow 3D
            const sign = offset < 0 ? -1 : 1;
            xPos = isCenter ? 0 : sign * (205 + (absOffset - 1) * 85) + mouseOffset.x * 0.5;
            yPos = mouseOffset.y * 0.3 - 38;
            rotation = 0;
            rotateY = isCenter ? 0 : sign * -48;
            scale = isCenter ? 0.98 : 0.82;
            opacity = isCenter ? 0.9 : Math.max(0.35, 1 - absOffset * 0.2);
            blurAmount = isCenter ? 0 : Math.min(3, absOffset * 0.8);
          }

          return (
            <motion.div
              key={card.id}
              onClick={(e) => {
                e.stopPropagation();
                if (Math.abs(dragOffsetPx) > 8) return; // Prevent accidental click while swiping
                sound.playClick(950);
                setActiveIndex(index);
              }}
              initial={false}
              animate={{
                x: xPos,
                y: yPos,
                rotate: rotation,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                filter: `blur(${blurAmount}px)`,
              }}
              transition={{
                type: 'spring',
                stiffness: isDragging ? 420 : 280,
                damping: 26,
              }}
              style={{
                zIndex: zIndex,
                transformPerspective: 1000,
              }}
              className="absolute pointer-events-auto cursor-pointer group transition-shadow duration-300"
            >
              {/* Phone Device Mockup Card with Cyber-Developer Chassis */}
              <div
                className={`relative w-[168px] sm:w-[184px] h-[296px] sm:h-[318px] bg-white dark:bg-[#141414] rounded-[32px] p-2.5 border-2 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isCenter
                    ? 'border-[#0A0A0A] dark:border-neutral-200 shadow-black/30 ring-4 ring-[#0A0A0A]/10 dark:ring-white/15'
                    : 'border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-700 shadow-black/10'
                }`}
              >
                {/* Subtle Neon Top Edge Reflection */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5 opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  }}
                />

                {/* Dynamic Island with Simulated Camera Sensor & Mic */}
                <div className="w-full flex justify-center items-center pb-1">
                  <div className="w-12 h-3.5 bg-[#0A0A0A] dark:bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                  </div>
                </div>

                {/* App Status Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1.5">
                  <div className="flex items-center gap-1.5 truncate">
                    <div className="p-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{card.icon}</div>
                    <span className="text-[9px] font-bold tracking-tight text-[#0A0A0A] dark:text-neutral-100 truncate">
                      {card.title}
                    </span>
                  </div>
                  <span
                    className="text-[6.5px] font-mono font-bold px-1.5 py-0.5 rounded-full border shrink-0 uppercase"
                    style={{
                      borderColor: `${card.accent}40`,
                      color: card.accent === '#0A0A0A' ? undefined : card.accent,
                      backgroundColor: `${card.accent}12`,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Main Metric Telemetry Banner */}
                <div className="bg-neutral-50/90 dark:bg-neutral-900/90 rounded-lg p-1.5 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-[6.5px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                      {card.metricLabel}
                    </div>
                    <div className="text-xs font-black text-neutral-900 dark:text-neutral-100 font-mono">
                      {card.metric}
                    </div>
                  </div>
                  <span className="text-[7px] font-mono text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 font-bold">
                    {card.category}
                  </span>
                </div>

                {/* Dynamic Interactive Mini-Widget per Card */}
                <div className="flex-1 flex flex-col justify-center my-0.5">
                  {card.content}
                </div>

                {/* Action Button: Click to Inspect Architecture Spec */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick(1100);
                    setInspectedCard(card);
                  }}
                  className="w-full bg-[#0A0A0A] text-white dark:bg-[#EDEDED] dark:text-[#0A0A0A] rounded-md py-1.5 text-center text-[7.5px] font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-1 hover:bg-neutral-800 dark:hover:bg-white transition-colors cursor-pointer group-hover:shadow-md"
                >
                  <Code2 className="w-2.5 h-2.5 text-[#E8281A]" />
                  <span>INSPECT ARCHITECTURE</span>
                  <span>→</span>
                </button>

                {/* iOS Home Indicator Bar */}
                <div className="w-full flex justify-center pt-1">
                  <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Swipe Affordance Bar, Mode Switcher & Navigation Controls */}
      <div className="absolute -bottom-22 sm:-bottom-26 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto w-full max-w-lg px-2">
        {/* Main Swipe Deck Control Strip */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-3 bg-white/95 dark:bg-[#161616]/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 shadow-lg text-[10px] font-mono text-neutral-800 dark:text-neutral-200">
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev(true);
            }}
            className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            title="Previous project (or use Left Arrow)"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Center Hint & Live Index */}
          <div className="flex items-center gap-1.5 px-1 cursor-grab active:cursor-grabbing">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#E8281A] animate-pulse" />
            <span className="font-bold tracking-wider hidden sm:inline">SWIPE WITH CURSOR</span>
            <span className="font-bold tracking-wider sm:hidden">SWIPE</span>
            <span className="text-neutral-400 dark:text-neutral-500 font-bold">
              [{String(activeIndex + 1).padStart(2, '0')}/{String(totalCards).padStart(2, '0')}]
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext(true);
            }}
            className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            title="Next project (or use Right Arrow)"
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <span className="text-neutral-300 dark:text-neutral-700">|</span>

          {/* Deck View Mode Switcher */}
          <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-0.5 rounded-full">
            {(['fan', 'stack', 'coverflow'] as const).map((mode) => (
              <button
                key={mode}
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick(950);
                  setDeckMode(mode);
                }}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase transition-all ${
                  deckMode === mode
                    ? 'bg-[#0A0A0A] text-white dark:bg-[#EDEDED] dark:text-[#0A0A0A] shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
                title={`Switch to ${mode} mode`}
              >
                {mode}
              </button>
            ))}
          </div>

          <span className="text-neutral-300 dark:text-neutral-700">|</span>

          {/* Auto-Play Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              sound.playClick(1000);
              setIsAutoPlay(!isAutoPlay);
            }}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase transition-colors ${
              isAutoPlay ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
            title={isAutoPlay ? 'Pause auto-play' : 'Start auto-play cycle'}
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline">PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                <span className="hidden sm:inline">AUTO</span>
              </>
            )}
          </button>
        </div>

        {/* Minimal Dot Indicators */}
        <div className="flex items-center gap-1">
          {HERO_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                sound.playClick(900 + i * 20);
                setActiveIndex(i);
              }}
              className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                i === activeIndex ? 'w-5 bg-[#0A0A0A] dark:bg-[#EDEDED]' : 'w-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500'
              }`}
              title={`Jump to ${HERO_CARDS[i].title}`}
              aria-label={`Jump to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Project Architecture Spec Modal mounted directly to document.body */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {inspectedCard && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setInspectedCard(null)}
                  className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
                />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 rounded-2xl shadow-2xl overflow-hidden z-10 font-sans"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#1A1A1A] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                    {inspectedCard.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8281A]">
                      {inspectedCard.category} // {inspectedCard.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                      {inspectedCard.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setInspectedCard(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                {/* Tech Stack Chips */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectedCard.architecture.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* System Architecture Flow */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    SYSTEM DATA FLOW ARCHITECTURE
                  </span>
                  <div className="p-3 bg-neutral-900 text-emerald-400 font-mono text-xs rounded-xl border border-neutral-800 space-y-1">
                    <div className="text-[10px] text-neutral-400 flex items-center gap-1.5">
                      <Server className="w-3 h-3 text-[#E8281A]" />
                      <span>DATA PIPELINE</span>
                    </div>
                    <div className="font-semibold">{inspectedCard.architecture.flow}</div>
                    {inspectedCard.architecture.apiEndpoint && (
                      <div className="text-[10px] text-neutral-400 pt-1 border-t border-neutral-800">
                        Primary API Endpoint: <span className="text-white font-bold">{inspectedCard.architecture.apiEndpoint}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Engineering Deliverables */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    KEY ENGINEERING HIGHLIGHTS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans-body">
                    {inspectedCard.architecture.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Metric Display */}
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">
                      BENCHMARK TELEMETRY
                    </div>
                    <div className="text-sm font-mono font-bold text-neutral-900 dark:text-white">
                      {inspectedCard.metricLabel}: <span className="text-[#E8281A]">{inspectedCard.metric}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-700">
                    PRODUCTION VERIFIED
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#1A1A1A] flex items-center justify-between">
                <a
                  href="https://github.com/vijaykamble3321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:underline"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>VIEW VIJAY'S GITHUB REPOS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setInspectedCard(null)}
                  className="px-4 py-2 rounded-full bg-[#0A0A0A] text-white dark:bg-[#EDEDED] dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-white transition-colors cursor-pointer"
                >
                  CLOSE INSPECTOR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </div>
  );
};
