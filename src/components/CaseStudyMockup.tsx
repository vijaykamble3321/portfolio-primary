import React from 'react';
import {
  Sparkles,
  Activity,
  Share2,
  Radio,
  CheckCircle2,
  Cpu,
  Compass,
  Zap,
  Layers,
  Terminal,
  Volume2,
  ShieldAlert,
  Sliders,
  Globe,
  Navigation,
  Box,
  Eye,
  Maximize2
} from 'lucide-react';
import type { CaseStudy } from '../types';

interface CaseStudyMockupProps {
  caseStudy: CaseStudy;
  onOpenDeepDive: () => void;
}

export const CaseStudyMockup: React.FC<CaseStudyMockupProps> = ({
  caseStudy,
  onOpenDeepDive,
}) => {
  // 1. Health App
  if (caseStudy.type === 'health') {
    return (
      <div className="w-full max-w-md bg-neutral-50/70 rounded-xl p-5 border border-neutral-300 shadow-sm relative overflow-hidden group">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-neutral-800">TELEMETRY_MONITOR_v4.2</span>
          </div>
          <span className="text-[11px] font-mono text-neutral-500">LIVE FEED</span>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-3 border border-neutral-200">
            <div className="flex justify-between text-xs font-mono text-neutral-500 mb-1">
              <span>SINUS RHYTHM ECG</span>
              <span className="text-neutral-900 font-bold">72 BPM</span>
            </div>
            <svg viewBox="0 0 320 60" className="w-full h-14 text-neutral-900 stroke-current">
              <path
                d="M0 30 H50 L58 10 L68 50 L78 20 L86 35 L96 30 H160 L168 8 L178 52 L188 18 L196 35 L206 30 H270 L278 12 L288 48 L296 22 L304 32 H320"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-neutral-200">
              <div className="text-[10px] font-mono text-neutral-400">BLOOD OXYGEN</div>
              <div className="text-xl font-bold font-mono text-neutral-900">99.2%</div>
              <div className="w-full bg-neutral-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-neutral-900 h-full w-[99%]" />
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-neutral-200">
              <div className="text-[10px] font-mono text-neutral-400">PATIENT STABILITY</div>
              <div className="text-xl font-bold font-mono text-neutral-900">OPTIMAL</div>
              <div className="w-full bg-neutral-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[94%]" />
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 text-white text-xs p-3 rounded-lg flex items-center justify-between font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ICU Protocol Synced</span>
            </div>
            <span className="text-neutral-400 text-[10px]">AUTO-ENCRYPTED</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. AI Dietitian App
  if (caseStudy.type === 'dietitian') {
    return (
      <div
        className="transform rotate-[12deg] sm:rotate-[15deg] hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer"
        onClick={onOpenDeepDive}
      >
        <div className="w-[260px] sm:w-[290px] h-[500px] bg-white rounded-[40px] p-3 border-[3px] border-[#0A0A0A] shadow-2xl flex flex-col justify-between overflow-hidden">
          <div className="w-full flex justify-center pb-1">
            <div className="w-16 h-4 bg-[#0A0A0A] rounded-full flex items-center justify-between px-2">
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>
          </div>

          <div className="bg-[#FFF5F2] rounded-2xl p-3 border border-[#FFE4DC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#E8281A] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">Dr. Ava (AI Dietitian)</div>
                <div className="text-[9px] text-emerald-600 font-medium">Active Glucose Guidance</div>
              </div>
            </div>
          </div>

          <div className="space-y-3 py-2 flex-1 flex flex-col justify-end text-xs">
            <div className="self-end max-w-[85%] bg-neutral-900 text-white p-3 rounded-2xl rounded-tr-xs">
              <div className="text-[10px] opacity-70 mb-1">Plate Scan #4102</div>
              <div className="bg-neutral-800 p-2 rounded-lg text-[11px] mb-1 flex items-center gap-2">
                <span>🥗 Grilled Salmon + Quinoa</span>
              </div>
              <span>Will this cause an afternoon spike?</span>
            </div>

            <div className="self-start max-w-[90%] bg-[#F4F9F4] text-neutral-900 p-3 rounded-2xl rounded-tl-xs border border-[#E0EFE0] space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[10px]">
                <Sparkles className="w-3 h-3 text-[#E8281A]" />
                <span>Metabolic Impact: Mild (+14 mg/dL)</span>
              </div>
              <p className="text-[11px] text-neutral-700 leading-snug">
                High protein and complex fiber buffer glycemic impact. 10 min walk recommended!
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-full px-3 py-2 flex items-center justify-between border border-neutral-200">
            <span className="text-[10px] text-neutral-400">Ask Dr. Ava anything...</span>
            <div className="w-5 h-5 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-xs">
              →
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. FinTech / Algo-Trading Terminal
  if (caseStudy.type === 'fintech') {
    return (
      <div className="w-full max-w-md bg-neutral-950 text-white rounded-xl p-4 border border-neutral-800 shadow-2xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#E8281A] animate-ping" />
            <span>ORDER_BOOK // NASDAQ:AETH</span>
          </div>
          <span className="text-[10px] text-emerald-400">LATENCY: 0.38ms</span>
        </div>

        {/* Depth Chart representation */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800 space-y-1">
            <div className="text-neutral-500 font-bold flex justify-between">
              <span>BIDS (BUY)</span>
              <span>SIZE</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-semibold">
              <span>$428.50</span>
              <span>12,400</span>
            </div>
            <div className="flex justify-between text-emerald-400/80">
              <span>$428.45</span>
              <span>8,150</span>
            </div>
            <div className="flex justify-between text-emerald-400/60">
              <span>$428.40</span>
              <span>24,890</span>
            </div>
          </div>

          <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800 space-y-1">
            <div className="text-neutral-500 font-bold flex justify-between">
              <span>ASKS (SELL)</span>
              <span>SIZE</span>
            </div>
            <div className="flex justify-between text-red-400 font-semibold">
              <span>$428.55</span>
              <span>15,200</span>
            </div>
            <div className="flex justify-between text-red-400/80">
              <span>$428.60</span>
              <span>9,430</span>
            </div>
            <div className="flex justify-between text-red-400/60">
              <span>$428.65</span>
              <span>31,000</span>
            </div>
          </div>
        </div>

        {/* Execution Log */}
        <div className="bg-neutral-900 p-2.5 rounded border border-neutral-800 text-[10px] space-y-1">
          <div className="text-neutral-400 font-semibold">DARK POOL ROUTE // SMART ORDER ROUTER</div>
          <div className="flex items-center justify-between text-neutral-300">
            <span>EXECUTED 50,000 SHRS @ VWAP</span>
            <span className="text-emerald-400 font-bold">FILLED 100%</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. Automotive EV Cockpit OS
  if (caseStudy.type === 'automotive') {
    return (
      <div className="w-full max-w-lg bg-neutral-900 text-white rounded-2xl p-5 border-2 border-neutral-700 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-bold tracking-wider">LEVEL 4 AUTONOMOUS CRUISE</span>
          </div>
          <div className="text-xs font-mono bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">
            LIDAR 360° ACTIVE
          </div>
        </div>

        {/* HUD Curvature Road Visualization */}
        <div className="h-32 bg-neutral-950 rounded-xl relative overflow-hidden flex items-center justify-center border border-neutral-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_100%)]" />
          <svg viewBox="0 0 200 100" className="w-48 h-full stroke-cyan-400 fill-none">
            <path d="M40 100 Q80 40 95 10" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M160 100 Q120 40 105 10" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="100" cy="55" r="8" fill="#0A0A0A" stroke="#E8281A" strokeWidth="2" />
          </svg>
          <div className="absolute bottom-2 left-4 text-[10px] font-mono text-neutral-400">
            LANE TRAJECTORY: LOCKED
          </div>
          <div className="absolute bottom-2 right-4 text-xs font-mono font-bold text-white">
            72 MPH
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
          <div className="bg-neutral-800 p-2 rounded">
            <div className="text-[9px] text-neutral-400">BATTERY</div>
            <div className="font-bold text-emerald-400">84% (312 mi)</div>
          </div>
          <div className="bg-neutral-800 p-2 rounded">
            <div className="text-[9px] text-neutral-400">CABIN TEMP</div>
            <div className="font-bold text-white">70°F SYNC</div>
          </div>
          <div className="bg-neutral-800 p-2 rounded">
            <div className="text-[9px] text-neutral-400">TAKEOVER LAG</div>
            <div className="font-bold text-cyan-400">0.02s SAFE</div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Spatial Computing & Mixed Reality
  if (caseStudy.type === 'spatial') {
    return (
      <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md text-white rounded-3xl p-5 border border-white/20 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-[#E8281A]" />
            <span className="text-xs font-mono font-bold tracking-wider">AURA SPATIAL OS // VOLUMETRIC</span>
          </div>
          <Eye className="w-4 h-4 text-white/70" />
        </div>

        {/* 3D CAD Wireframe Wire Cube representation */}
        <div className="h-36 bg-black/60 rounded-2xl flex items-center justify-center relative border border-white/10 overflow-hidden">
          <div className="w-20 h-20 border-2 border-cyan-400/80 rounded-lg transform rotate-12 flex items-center justify-center">
            <div className="w-12 h-12 border border-dashed border-white/60 rounded-md transform -rotate-6" />
          </div>
          <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-400">
            GAZE TARGET: MESH_NODE_4
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400">
            VOLUMETRIC PINCH: ARMED
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono bg-white/5 p-2.5 rounded-xl border border-white/10">
          <span>SPATIAL AUDIO: BINAURAL 3D</span>
          <span className="text-emerald-400 font-bold">CALIBRATED</span>
        </div>
      </div>
    );
  }

  // 7. Geospatial Climate Satellite
  if (caseStudy.type === 'climate') {
    return (
      <div className="w-full max-w-md bg-neutral-900 text-white rounded-xl p-4 border border-neutral-700 shadow-xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold">TERRASENSE RADAR // ORBIT 302</span>
          </div>
          <span className="text-[10px] text-neutral-400">37.7749° N, 122.4194° W</span>
        </div>

        <div className="h-36 bg-neutral-950 rounded-lg relative overflow-hidden border border-neutral-800 flex items-center justify-center">
          {/* Heat map contours */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%),radial-gradient(circle_at_70%_30%,#ef4444_0,transparent_30%)]" />
          {/* Radar target crosshair */}
          <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border border-emerald-400/60 rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#E8281A] rounded-full animate-ping" />
          </div>
          <div className="absolute top-2 left-2 text-[9px] text-neutral-400">SAR RADAR RESOLUTION: 30CM</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-red-400 font-bold">METHANE PLUME DETECTED</div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-neutral-800 p-2 rounded">
            <div className="text-[9px] text-neutral-400">OFFSET INTEGRITY</div>
            <div className="font-bold text-emerald-400">VERIFIED GOLD</div>
          </div>
          <div className="bg-neutral-800 p-2 rounded">
            <div className="text-[9px] text-neutral-400">CARBON FLUX</div>
            <div className="font-bold text-neutral-200">-1.4Mt CO2e</div>
          </div>
        </div>
      </div>
    );
  }

  // 8. Luxury Fashion 3D Atelier
  if (caseStudy.type === 'luxury') {
    return (
      <div className="w-full max-w-md bg-white rounded-xl p-5 border-2 border-neutral-900 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="font-serif-title italic text-sm text-neutral-900 font-bold">
            Atelier No. 04 — Silk Twill Trench
          </div>
          <span className="text-[10px] font-mono bg-neutral-900 text-white px-2 py-0.5 rounded-xs">
            8K WEBGL
          </span>
        </div>

        <div className="h-36 bg-neutral-100 rounded-lg flex items-center justify-center relative border border-neutral-300 overflow-hidden">
          <div className="w-24 h-24 border border-neutral-800 rounded-md flex flex-col items-center justify-center p-2 text-center">
            <div className="w-8 h-8 rounded-full bg-neutral-900 mb-1" />
            <span className="text-[8px] font-mono uppercase text-neutral-600">DRAPE PHYSICS SIM</span>
          </div>
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-500">
            MICRO-WEAVE: 100% RAW SILK
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-neutral-500">LIMITED EDITION: 24/50</span>
          <button className="px-3 py-1 bg-neutral-900 text-white rounded text-[11px] font-bold">
            INSPECT TEXTURE
          </button>
        </div>
      </div>
    );
  }

  // 9. Neural Audio Workstation
  if (caseStudy.type === 'audio') {
    return (
      <div className="w-full max-w-md bg-neutral-950 text-white rounded-xl p-4 border border-neutral-800 shadow-2xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-xs">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#E8281A]" />
            <span className="font-bold">HARMONIC NEURAL SYNTH // 96kHz</span>
          </div>
          <span className="text-emerald-400 text-[10px]">BUFFER: 1.2ms</span>
        </div>

        {/* Audio Waveform visualizer */}
        <div className="h-28 bg-neutral-900 rounded p-2 flex items-end justify-between gap-1 border border-neutral-800">
          {[40, 65, 30, 85, 95, 45, 60, 100, 75, 55, 90, 45, 80, 70, 35, 95, 60, 80, 50, 65].map((h, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-xs transition-all ${
                i % 4 === 0 ? 'bg-[#E8281A]' : 'bg-neutral-300'
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-neutral-400">
          <div className="bg-neutral-900 p-1.5 rounded">ATTACK 12ms</div>
          <div className="bg-neutral-900 p-1.5 rounded">DECAY 80ms</div>
          <div className="bg-neutral-900 p-1.5 rounded">SUSTAIN 0.9</div>
          <div className="bg-neutral-900 p-1.5 rounded">RELEASE 1.4s</div>
        </div>
      </div>
    );
  }

  // 10. Distributed Cloud Topology Mesh
  if (caseStudy.type === 'infrastructure') {
    return (
      <div className="w-full max-w-md bg-white rounded-xl p-4 border-2 border-neutral-900 shadow-xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-neutral-900">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>K8S SERVICE MESH // 100k PODS</span>
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">HEALTH: 99.99%</span>
        </div>

        {/* Microservice Node cluster visual */}
        <div className="h-32 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center justify-around p-3 relative">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
              ING
            </div>
            <span className="text-[8px] mt-1 text-neutral-500">Ingress</span>
          </div>

          <div className="w-12 h-0.5 bg-blue-500 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 absolute -top-0.5 left-1/2 animate-ping" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
              AUTH
            </div>
            <span className="text-[8px] mt-1 text-neutral-500">Auth 3 Pods</span>
          </div>

          <div className="w-12 h-0.5 bg-emerald-500" />

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#E8281A] text-white flex items-center justify-center text-[10px] font-bold">
              DB
            </div>
            <span className="text-[8px] mt-1 text-neutral-500">Spanner</span>
          </div>
        </div>

        <div className="text-[10px] text-neutral-600 flex justify-between">
          <span>P99 LATENCY: 18ms</span>
          <span>DISTRIBUTED TRACES: 4.2M/sec</span>
        </div>
      </div>
    );
  }

  // 11. Neuro-Adaptive Language Acquisition
  if (caseStudy.type === 'edtech') {
    return (
      <div className="w-full max-w-md bg-neutral-50 rounded-2xl p-5 border border-neutral-300 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#E8281A] text-white flex items-center justify-center text-xs font-bold">
              Ω
            </div>
            <span className="text-xs font-mono font-bold text-neutral-900">SYNAPSE NEURO-LEARNING</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 font-bold">STREAK: 48 DAYS</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-neutral-200 space-y-2">
          <div className="text-xs text-neutral-500 font-mono">Conversational Acoustic Target</div>
          <div className="text-sm font-bold text-neutral-900">"Bonjour! Comment allez-vous aujourd'hui?"</div>
          <div className="flex items-center gap-2 pt-2 border-t border-neutral-100 text-[11px] font-mono text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Phonetic Pitch Accuracy: 98.4% (Native Range)</span>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-3 rounded-xl flex items-center justify-between text-xs font-mono">
          <span>Memory Decay Forecast</span>
          <span className="text-emerald-400 font-bold">+18 Days Retained</span>
        </div>
      </div>
    );
  }

  // 12. Autonomous Zero-Trust Cyber Sentinel
  if (caseStudy.type === 'cyber') {
    return (
      <div className="w-full max-w-md bg-neutral-950 text-white rounded-xl p-4 border border-neutral-800 shadow-2xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span className="font-bold">AUTONOMOUS THREAT SENTINEL</span>
          </div>
          <div className="text-red-400 text-[10px] bg-red-950 px-2 py-0.5 rounded border border-red-800">
            ATTACK QUARANTINED
          </div>
        </div>

        <div className="h-32 bg-neutral-900 rounded p-3 border border-neutral-800 text-[10px] space-y-2">
          <div className="text-neutral-400">LATERAL INTRUSION DETECTION TIMELINE:</div>
          <div className="text-neutral-200 flex items-center gap-2">
            <span className="text-neutral-500">14:02:11</span>
            <span>Unusual token escalation attempt on port 8443</span>
          </div>
          <div className="text-red-400 flex items-center gap-2 font-bold">
            <span className="text-neutral-500">14:02:12</span>
            <span>Microsegmentation rule applied in 0.8 seconds</span>
          </div>
          <div className="text-emerald-400 flex items-center gap-2">
            <span className="text-neutral-500">14:02:13</span>
            <span>Zero-trust perimeter intact. Breach isolated.</span>
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-neutral-400 pt-1">
          <span>THREAT SURFACE: SHIELDED</span>
          <span>SOC STATUS: ACTIVE 24/7</span>
        </div>
      </div>
    );
  }

  // 13. Humanoid Robotics Teleoperation
  if (caseStudy.type === 'robotics') {
    return (
      <div className="w-full max-w-md bg-white rounded-xl p-4 border-2 border-neutral-900 shadow-xl space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-neutral-900">
            <Zap className="w-4 h-4 text-[#E8281A]" />
            <span>KINETICS BIMANUAL TELEPRESENCE</span>
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">SYNC: &lt;8ms</span>
        </div>

        {/* Robot Arm kinematics schematic */}
        <div className="h-32 bg-neutral-100 rounded-lg p-2 border border-neutral-300 flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 160 80" className="w-40 h-full stroke-neutral-900 fill-none">
            <circle cx="20" cy="60" r="6" fill="#0A0A0A" />
            <line x1="20" y1="60" x2="60" y2="30" strokeWidth="3" />
            <circle cx="60" cy="30" r="4" fill="#0A0A0A" />
            <line x1="60" y1="30" x2="110" y2="20" strokeWidth="3" />
            <circle cx="110" cy="20" r="4" fill="#0A0A0A" />
            <line x1="110" y1="20" x2="140" y2="45" strokeWidth="2" strokeDasharray="3 1" />
            <circle cx="140" cy="45" r="3" fill="#E8281A" />
          </svg>
          <div className="absolute bottom-2 left-2 text-[9px] text-neutral-500">
            6-DOF HAPTIC GLOVE: CONNECTED
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-bold text-neutral-900">
            GRIP FORCE: 4.2N
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-neutral-50 p-2 rounded border border-neutral-200">
            <div className="text-neutral-400">POSITIONAL ACCURACY</div>
            <div className="font-bold text-neutral-900 text-xs">0.1 mm</div>
          </div>
          <div className="bg-neutral-50 p-2 rounded border border-neutral-200">
            <div className="text-neutral-400">TELEOPERATION RANGE</div>
            <div className="font-bold text-neutral-900 text-xs">GLOBAL FIBER</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
